const express = require('express');
const router = express.Router();
const productService = require('./product.service');

/* PRODUCTS */

router.get('/:id/product', productService.get);

router.get('/:restaurantID/product/:productID', productService.getById);

router.post('/:id/product', productService.post);

router.put('/:restaurantID/product/:productID', productService.put);

router.delete('/:restaurantID/product/:productID', productService.delete);