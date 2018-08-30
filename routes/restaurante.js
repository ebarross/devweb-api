const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log("Time: ", new Date());
    next();
});

router.get('/', (req, res) => {
    console.log("GET /restaurante");
    res.send("GET /restaurante");
});

router.get('/:id', (req, res) => {
    console.log(`GET /restaurante/${req.params.id}`);
    res.send(`GET /restaurante/${req.params.id}`);
});

router.post('/', (req, res) => {
    console.log("POST /restaurante");
    res.send("POST /restaurante");
});

router.put('/', (req, res) => {
    console.log("PUT /restaurante");
    res.send("PUT /restaurante");
});

router.delete('/', (req, res) => {
    console.log("DELETE /restaurante");
    res.send("DELETE /restaurante");
});

module.exports = router;