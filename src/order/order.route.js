const express = require('express');
const router = express.Router();
const service = require('./order.service');
const validateObjectId = require('../middleware/validateObjectId');
const auth = require('../middleware/auth');

router.get('/', auth, service.find);

router.get('/:id', [auth, validateObjectId], service.findById);

router.post('/', auth, service.create);

router.put('/:id', [auth, validateObjectId], service.update);

router.delete('/:id', [auth, validateObjectId], service.remove);

module.exports = router;