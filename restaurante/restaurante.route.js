const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log("Recurso: restaurante");
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

router.put('/:id', (req, res) => {
    console.log(`PUT /restaurante/${req.params.id}`);
    res.send(`PUT /restaurante/${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    console.log(`DELETE /restaurante/${req.params.id}`);
    res.send(`DELETE /restaurante/${req.params.id}`);
});

module.exports = router;