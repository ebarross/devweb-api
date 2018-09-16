const mongoose = require('mongoose');
const address = require('../address/address.model');

const schema = new mongoose.Schema({
    customer: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'customer',
        required: true,
    },
    restaurant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'restaurant',
        required: true,
    },
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'product'
    }],
    status: {
        type: String,
        enum: ['waiting', 'canceled', 'complete'],
        default: 'waiting',
        required: true
    },
    payment: {
        type: String,
        enum: ['money', 'card'],
        required: true
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
        required: true,
        min: 0
    }
});

const Order = mongoose.model('order', schema);

module.exports = Order;