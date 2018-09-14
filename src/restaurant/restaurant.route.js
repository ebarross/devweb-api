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

/* PRODUCTS */

router.get('/:id/product', (req, res) => {
    res.send(`GET /restaurant/${req.params.id}/product`);
});

router.get('/:restaurantID/product/:productID', (req, res) => {
    res.send(`GET /restaurant/${req.params.restaurantID}/product/${req.params.productID}`);
});

router.post('/:id/product', (req, res) => {

});

router.put('/:restaurantID/product/:productID', (req, res) => {

});

router.delete('/:restaurantID/product/:productID', (req, res) => {

});

/* ORDERS */

router.get('/:id/order', (req, res) => {

});

router.get('/:restaurantID/order/:orderID', (req, res) => {

});

module.exports = router;