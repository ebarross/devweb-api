const Restaurant = require('./restaurant.model');

exports.get = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        if (restaurants.length === 0) return res.status(204).json(restaurants);

        res.status(200).json(restaurants);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.getById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });

        res.status(200).json(restaurant);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.post = async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json(restaurant);
    } catch (e) {
        res.status(400).json({ error: e.message });
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
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Restaurant.findByIdAndRemove(id);

        if (!result) return res.status(400).json({ error: 'Restaurant not found' });

        res.status(200).json(result);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

module.exports = exports;