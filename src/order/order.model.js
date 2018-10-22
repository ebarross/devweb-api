const mongoose = require('mongoose');
const { addressSchema } = require('../address/address.model');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const schema = new mongoose.Schema({
    customerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Customer',
        required: true
    },
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product'
    }],
    status: {
        type: String,
        enum: ['waiting', 'canceled', 'complete'],
        lowercase: true,
        default: 'waiting'
    },
    payment: {
        type: String,
        enum: ['money', 'card'],
        lowercase: true,
        required: true
    },
    deliveryAddress: {
        type: addressSchema,
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

function validate(order) {
    const schema = {
        customerId: Joi.objectId().required(),
        products: Joi.array().items(Joi.objectId()).required(),
        status: Joi.string(),
        payment: Joi.string().required(),
        deliveryAddress: Joi.required()
    }

    return Joi.validate(order, schema);
}

module.exports = { Order, validate };