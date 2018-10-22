const express = require('express');
const router = express.Router();
const service = require('./order.service');
const validateObjectId = require('../util/validateObjectId');

router.get('/', service.find);

router.get('/:id', validateObjectId, service.findById);

router.post('/', service.create);

router.put('/:id', validateObjectId, service.update);

router.delete('/:id', validateObjectId, service.remove);

module.exports = router;