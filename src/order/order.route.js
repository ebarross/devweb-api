const express = require('express');
const router = express.Router();

/*
    os pedidos podem ser acessados tanto por clientes, quanto por restaurantes.
    tratar isso com autorização a partir do tipo de usuário (cliente ou restaurante).
*/

router.get('/', (req, res) => {
    res.send("GET /order");
});

router.get('/:id', (req, res) => {
    res.send(`GET /order/${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send("POST /order");
});

router.put('/:id', (req, res) => {
    res.send(`PUT /order/${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`DELETE /order/${req.params.id}`);
});

module.exports = router;