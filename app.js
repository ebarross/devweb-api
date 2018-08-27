const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 8080;

app.listen(port);
console.log(`Servidor rodando na porta ${port}...`);

var lista = [];
app.get('/', function(req, res) {
    res.send('Olá');
});

app.get('/list', function(req, res) {
    res.send(lista);
});
