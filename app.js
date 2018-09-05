const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

const restaurante = require('./routes/restaurante');

app.listen(port);
console.log(`Servidor rodando na porta ${port}...`);

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Content-type', 'application/json');
    next();
});

app.get('/', (req, res) => {
    res.send(JSON.stringify('Receiving GET request to /'));
});

app.post('/', (req, res) => {
    res.end(JSON.stringify(req.body, null, 2));
});

app.use('/restaurante', restaurante);