const express = require('express');
const router = express.Router();
const service = require('./user.service');
const auth = require('../middleware/auth');
const validateObjectId = require('../middleware/validateObjectId');
const admin = require('../middleware/admin');

router.get('/', [auth, admin], service.find);

router.get('/me', auth, service.getCurrent);

router.get('/:id', [auth, admin, validateObjectId], service.findById);

router.post('/', service.create);

module.exports = router;