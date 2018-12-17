const express = require('express');
const router = express.Router();
const service = require('./auth.service');

// login route
router.post('/', service.authenticate);

module.exports = router;