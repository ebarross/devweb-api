const express = require('express');
const router = express.Router();
const service = require('./auth.service');

router.post('/', service.authenticate);

module.exports = router;