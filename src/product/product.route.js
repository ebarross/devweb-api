const express = require('express');
const router = express.Router();
const service = require('./product.service');
const validateObjectId = require('../middleware/validateObjectId');
const auth = require('../middleware/auth');

router.get('/', auth, service.find);

router.get('/:id', [validateObjectId, auth], service.findById);

router.post('/', auth, service.create);

router.put('/:id', [validateObjectId, auth], service.update);

router.delete('/:id', [validateObjectId, auth], service.remove);

module.exports = router;