const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cache = require('memory-cache');
const port = process.env.PORT || 8080;
const restaurant = require('./restaurant/restaurant.route');
const product = require('./product/product.route');
const order = require('./order/order.route');
const user = require('./user/user.route');
const auth = require('./auth/auth.route');

// connection to mongodb server.
require('./config/database')();

//cache.put('foo', 'bar');
//console.log(cache.get('foo'));

const app = express();

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('../public'));
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send(JSON.stringify('Welcome to \'food pls\' API! :)'));
});

app.use('/restaurant', cors(corsOptions), restaurant);
app.use('/product', product);
app.use('/order', order);
app.use('/user', user);
app.use('/auth', auth);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));

module.exports = app;