const express = require('express');
const router = express.Router();
const service = require('./order.service');

/*
    os pedidos podem ser acessados tanto por clientes, quanto por restaurantes.
    tratar isso com autorização a partir do tipo de usuário (cliente ou restaurante).
*/

router.get('/', service.get);

router.get('/:id', service.getById);

router.post('/', service.post);

router.put('/:id', service.put);

router.delete('/:id', service.delete);

module.exports = router;