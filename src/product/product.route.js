const express = require('express');
const router = express.Router();
const service = require('./product.service');

router.get('/', service.get);

router.get('/:id', service.getById);

router.post('/', service.post);

router.put('/:id', service.put);

router.delete('/:id', service.delete);

module.exports = router;