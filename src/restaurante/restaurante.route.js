const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.send("GET /restaurante");
    res.status(200).json({ nome: 'restaurante tal' });
});

router.get('/:id', (req, res) => {
    res.send(`GET /restaurante/${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send("POST /restaurante");
});

router.put('/:id', (req, res) => {
    res.send(`PUT /restaurante/${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`DELETE /restaurante/${req.params.id}`);
});

/* PRODUTOS */

router.get('/:id/produto', (req, res) => {
    res.send(`GET /restaurante/${req.params.id}/produto`);
});

router.get('/:idRest/produto/:idProduto', (req, res) => {
    res.send(`GET /restaurante/${req.params.idRestaurante}/produto/${req.params.idProduto}`);
});

router.post('/:id/produto', (req, res) => {

});

router.put('/:idRest/produto/:idProduto', (req, res) => {

});

router.delete('/:idRest/produto/:idProduto', (req, res) => {

});

/* PEDIDOS */

router.get('/:id/pedido', (req, res) => {

});

router.get('/:idRest/pedido/:idPedido', (req, res) => {
    
});

module.exports = router;