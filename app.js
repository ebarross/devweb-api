const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 8080;

app.listen(port);
console.log(`Servidor rodando na porta ${port}...`);

app.use((req, res, next) => {
    res.header('Content-type', 'application/json');
    next();
});

app.get('/', function(req, res) {
    res.send(JSON.stringify('Receiving GET request to /'));
});