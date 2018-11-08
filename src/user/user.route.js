const express = require('express');
const router = express.Router();
const service = require('./user.service');

router.post('/', service.create);

module.exports = router;