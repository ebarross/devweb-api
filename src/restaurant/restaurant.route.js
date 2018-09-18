const express = require('express');
const router = express.Router();
const restaurantService = require('./restaurant.service');
const productService = require('../product/product.service');

const Restaurant = require('./restaurant.model');

router.get('/', restaurantService.get);

router.get('/:id', restaurantService.getById);

router.post('/', restaurantService.post);

router.put('/:id', restaurantService.put);

router.delete('/:id', restaurantService.delete);

/* PRODUCTS */

router.get('/:id/product', productService.get);

router.get('/:restaurantID/product/:productID', productService.getById);

router.post('/:id/product', productService.post);

router.put('/:restaurantID/product/:productID', productService.put);

router.delete('/:restaurantID/product/:productID', productService.delete);

/* ORDERS */

router.get('/:id/order', (req, res) => {

});

router.get('/:restaurantID/order/:orderID', (req, res) => {

});

module.exports = router;