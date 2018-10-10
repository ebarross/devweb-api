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

        //if (!restaurant) return res.status(404).json({ error: 'Not found' });

        res.status(200).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

exports.post = async (req, res) => {
    try {
        //const restaurant = req.body;
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json({ restaurant });
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

exports.put = async (req, res) => {
    let newRestaurant = req.body;

    if (newRestaurant === {}) {
        res.status(400).json({ error: 'Restaurant required.' });
        return;
    }

    const update = {
        $set: {
            name: newRestaurant.name,
            cnpj: newRestaurant.cnpj,
            phone: newRestaurant.phone,
            address: newRestaurant.address,
            status: newRestaurant.status
        }
    };

    Restaurant.findByIdAndUpdate(req.params.id, update, (err, restaurant) => {
        if (err) {
            res.status(400).json({ error: 'Restaurant not found.' });
            return;
        }

        res.status(200).json(restaurant);
    });
}

exports.delete = async (req, res) => {
    try {
        const result = await Restaurant.findByIdAndRemove(req.params.id);

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

module.exports = exports;