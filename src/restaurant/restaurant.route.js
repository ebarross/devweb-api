const express = require('express');
const router = express.Router();

const Restaurant = require('./restaurant.model');

router.get('/', (req, res) => {
    if (req.query.name) {
        Restaurant.find({ name: req.query.name }, (err, restaurants) => {
            if (err) {
                res.status(400).json({ error: 'Error on getting restaurants.' });
                return;
            }

            if (restaurants.length === 0) {
                res.status(400).json({ error: 'Restaurant(s) not found.' });
                return;
            }

            res.status(200).json(restaurants);

        });
    } else {
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
});

router.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
        if (err) {
            res.status(400).json({ error: 'Restaurant not found.' });
            return;
        }

        res.status(200).json(restaurant);
    });
});

router.post('/', (req, res) => {
    Restaurant.create(req.body, (err, restaurant) => {
        if (err) {
            res.status(400).json({ error: 'Error on create restaurant.' });
            return;
        }

        res.status(201).send(`Restaurante criado! ID: ${restaurant._id}`);
    });
});

router.put('/:id', (req, res) => {
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
    /*
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if (err) {
                res.status(400).json({ error: 'Restaurant not found.' });
                return;
            }
    
        });
    */
});

router.delete('/:id', (req, res) => {
    res.send(`DELETE /restaurant/${req.params.id}`);
});

/* PRODUCTS */

router.get('/:id/product', (req, res) => {
    res.send(`GET /restaurant/${req.params.id}/product`);
});

router.get('/:restaurantID/product/:productID', (req, res) => {
    res.send(`GET /restaurant/${req.params.restaurantID}/product/${req.params.productID}`);
});

router.post('/:id/product', (req, res) => {

});

router.put('/:restaurantID/product/:productID', (req, res) => {

});

router.delete('/:restaurantID/product/:productID', (req, res) => {

});

/* ORDERS */

router.get('/:id/order', (req, res) => {

});

router.get('/:restaurantID/order/:orderID', (req, res) => {

});

module.exports = router;