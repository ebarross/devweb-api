const mongoose = require('mongoose');
const address = require('../address/address.model');

const schema = new mongoose.Schema({
    customer: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Customer'
    },
    /* products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product'
    }], */
    products: [{
        type: new mongoose.Schema({
            name: {
                type: String,
                minlength: 5,
                maxlength: 100,
                required: true,
            },
            description: {
                type: String,
                maxlength: 255
            },
            value: {
                type: Number,
                required: true,
                min: 0,
                max: 1000
            }
        }),
        required: true
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
        required: true,
        default: Date.now
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