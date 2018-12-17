const express = require('express');
const router = express.Router();
const service = require('./restaurant.service');
const validateObjectId = require('../middleware/validateObjectId');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', [auth, admin], service.find);

router.get('/:id', [auth, admin, validateObjectId], service.findById);

router.post('/', [auth, admin], service.create);

router.put('/:id', [auth, admin, validateObjectId], service.update);

router.delete('/:id', [auth, admin, validateObjectId], service.remove);

module.exports = router;