const { Restaurant, validate } = require('./restaurant.model');
const { validateAddress } = require('../address/address.model');

exports.find = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        if (restaurants.length === 0) return res.status(204).json(restaurants);

        res.status(200).json(restaurants);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.findById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });

        res.status(200).json(restaurant);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.create = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const validationAddress = validateAddress(req.body.address);
    const errorAddress = validationAddress.error;
    if (errorAddress) return res.status(400).json({ error: errorAddress.details[0].message });

    try {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json(restaurant);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.update = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const validationAddress = validateAddress(req.body.address);
    const errorAddress = validationAddress.error;
    if (errorAddress) return res.status(400).json({ error: errorAddress.details[0].message });

    let restaurant = req.body;
    const id = req.params.id;

    try {
        restaurant = await Restaurant.findByIdAndUpdate(id, {
            $set: {
                name: restaurant.name,
                cnpj: restaurant.cnpj,
                phone: restaurant.phone,
                address: restaurant.address,
                status: restaurant.status
            }
        }, { new: true });

        res.status(200).json(restaurant);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.remove = async (req, res) => {
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