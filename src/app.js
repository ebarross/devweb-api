const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cache = require('memory-cache');

//cache.put('foo', 'bar');
//console.log(cache.get('foo'));

const app = express();

app.use(express.json());
app.use('/static', express.static('../public'));
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
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

module.exports = app;