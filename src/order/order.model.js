const mongoose = require('mongoose');
const address = require('../address/address.model');

const schema = new mongoose.Schema({
    customer: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'customer'
    },
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'product'
    }],
    status: {
        type: String,
        enum: ['waiting', 'canceled', 'complete'],
        default: 'waiting'
    },
    payment: {
        type: String,
        enum: ['money', 'card']
    },
    address: {
        type: address.schema,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    totalValue: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    }
});

const Order = mongoose.model('Order', schema);

module.exports = Order;