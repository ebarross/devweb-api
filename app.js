const express = require('express');
const app = express();

const port = 8080;

const restaurante = require('./routes/restaurante');

app.listen(port);
console.log(`Servidor rodando na porta ${port}...`);

app.use((req, res, next) => {
    res.header('Content-type', 'application/json');
    next();
});

app.get('/', function(req, res) {
    res.send(JSON.stringify('Receiving GET request to /'));
});

app.use('/restaurante', restaurante);