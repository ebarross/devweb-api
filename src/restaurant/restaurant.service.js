const Restaurant = require('./restaurant.model');

exports.get = async (req, res) => {
    try {
        let restaurants = await Restaurant.find();
        if (restaurants.length === 0) return res.status(204).json(restaurants);

        res.status(200).json(restaurants);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

exports.getById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });

        res.status(200).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

exports.post = async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

exports.put = async (req, res) => {
    try {
        const newRestaurant = req.body;

        const id = req.params.id;

        const restaurant = await Restaurant.findByIdAndUpdate(id, {
            $set: {
                name: newRestaurant.name,
                cnpj: newRestaurant.cnpj,
                phone: newRestaurant.phone,
                address: newRestaurant.address,
                status: newRestaurant.status
            }
        }, { new: true });

        res.status(200).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await Restaurant.findByIdAndRemove(req.params.id);

        if (!result) return res.status(400).json({ error: 'Restaurant not found' });

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

module.exports = exports;