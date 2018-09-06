const express = require('express');
const router = express.Router();

// retorna todos os restaurantes
router.get('/', (req, res) => {
    //res.send("GET /restaurante");
    res.status(200).json({ nome: 'restaurante tal' });
});

// retorna um restaurante
router.get('/:id', (req, res) => {
    res.send(`GET /restaurante/${req.params.id}`);
});

// adiciona um restaurante
router.post('/', (req, res) => {
    res.send("POST /restaurante");
});

// atualiza um restaurante
router.put('/:id', (req, res) => {
    res.send(`PUT /restaurante/${req.params.id}`);
});

// exclui um restaurante
router.delete('/:id', (req, res) => {
    res.send(`DELETE /restaurante/${req.params.id}`);
});

/* PRODUTOS */

router.get('/:id/produto', (req, res) => {
    res.send(`GET /restaurante/${req.params.id}/produto`);
});

router.get('/:idRestaurante/produto/:idProduto', (req, res) => {
    res.send(`GET /restaurante/${req.params.idRestaurante}/produto/${req.params.idProduto}`);
});

router.post('/:id/produto', (req, res) => {

});

router.put('/:idRestaurante/produto/:idProduto', (req, res) => {

});

router.delete('/:idRestaurante/produto/:idProduto', (req, res) => {

});

module.exports = router;