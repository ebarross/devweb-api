const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cache = require('memory-cache');

// connection to mongodb server.
const dbConnect = require('./config/database');
dbConnect();

//cache.put('foo', 'bar');
//console.log(cache.get('foo'));

const app = express();

app.use(express.json());
app.use('/static', express.static('../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send(JSON.stringify('Welcome to \'food pls\' API! :)'));
});

const restaurant = require('./restaurant/restaurant.route');
const order = require('./order/order.route');

app.use('/restaurant', restaurant);
app.use('/order', order);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

module.exports = app;