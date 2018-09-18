const Restaurant = require('./restaurant.model');

exports.get = (req, res) => {
    Restaurant.find((err, restaurants) => {
        if (err) {
            res.status(400).json({ error: 'Error on getting restaurants.' });
            return;
        }

        if (restaurants.length === 0) {
            res.status(204);
            return;
        }

        res.status(200).json(restaurants);
    });
}

exports.getById = (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
        if (err) {
            res.status(400).json({ error: 'Restaurant not found.' });
            return;
        }

        res.status(200).json(restaurant);
    });
};

exports.post = (req, res) => {
    Restaurant.create(req.body, (err, restaurant) => {
        if (err) {
            res.status(400).json({ error: 'Error on create restaurant.' });
            return;
        }

        res.status(201).send(`Restaurante criado! ID: ${restaurant._id}`);
    });
}

exports.put = (req, res) => {
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

exports.delete = (req, res) => {

}

module.exports = exports;