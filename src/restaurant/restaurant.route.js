const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ nome: 'restaurante tal' });
});

router.get('/:id', (req, res) => {
    res.send(`GET /restaurant/${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send("POST /restaurant");
});

router.put('/:id', (req, res) => {
    res.send(`PUT /restaurant/${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`DELETE /restaurant/${req.params.id}`);
});

/* PRODUTOS */

router.get('/:id/product', (req, res) => {
    res.send(`GET /restaurant/${req.params.id}/product`);
});

router.get('/:idRest/product/:idProduct', (req, res) => {
    res.send(`GET /restaurant/${req.params.idRest}/product/${req.params.idProduct}`);
});

router.post('/:id/product', (req, res) => {

});

router.put('/:idRest/product/:idProduct', (req, res) => {

});

router.delete('/:idRest/product/:idProduct', (req, res) => {

});

/* PEDIDOS */

router.get('/:id/order', (req, res) => {

});

router.get('/:idRest/order/:idOrder', (req, res) => {

});

module.exports = router;