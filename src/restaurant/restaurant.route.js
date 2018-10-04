const express = require('express');
const router = express.Router();
const restaurantService = require('./restaurant.service');

const Restaurant = require('./restaurant.model');

router.get('/', restaurantService.get);

//router.get('/:id', restaurantService.getById);

//router.post('/', restaurantService.post);

router.put('/:id', restaurantService.put);

//router.delete('/:id', restaurantService.delete);

module.exports = router;