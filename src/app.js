const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cache = require('memory-cache');

// connection to mongodb server.
const dbConnect = require('./config/database');
dbConnect();

//cache.put('foo', 'bar');
//console.log(cache.get('foo'));

const app = express();

//app.use(express.json());
app.use('/static', express.static('../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('tiny'));
/*
app.use((req, res, next) => {
    res.header('Content-type', 'application/json');
    next();
});
*/
app.get('/', (req, res) => {
    res.send(JSON.stringify('Welcome to \'food pls\' API! :)'));
});

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const restaurant = require('./restaurant/restaurant.route');
const order = require('./order/order.route');

app.use('/restaurant', cors(corsOptions), restaurant);
app.use('/order', order);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

module.exports = app;