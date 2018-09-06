const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(express.static('../static'));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send(JSON.stringify('Welcome to \'food pls\' API! :)'));
});

app.post('/', (req, res) => {
    res.end(JSON.stringify(req.body, null, 2));
});

const restaurante = require('./restaurante/restaurante.route');
const pedido = require('./pedido/pedido.route');

app.use('/restaurante', restaurante);
app.use('/pedido', pedido);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}...`));

module.exports = app;