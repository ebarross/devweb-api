const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log("Recurso: pedido");
    next();
});

router.get('/', (req, res) => {
    console.log("GET /pedido");
    res.send("GET /pedido");
});

router.get('/:id', (req, res) => {
    console.log(`GET /pedido/${req.params.id}`);
    res.send(`GET /pedido/${req.params.id}`);
});

router.post('/', (req, res) => {
    console.log("POST /pedido");
    res.send("POST /pedido");
});

router.put('/:id', (req, res) => {
    console.log(`PUT /pedido/${req.params.id}`);
    res.send(`PUT /pedido/${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    console.log(`DELETE /pedido/${req.params.id}`);
    res.send(`DELETE /pedido/${req.params.id}`);
});

module.exports = router;