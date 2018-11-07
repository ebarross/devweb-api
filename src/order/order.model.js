const mongoose = require('mongoose');
const { addressSchema } = require('../address/address.model');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const schema = new mongoose.Schema({
    customer: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Customer',
        required: true
    },
    products: [{
        type: new mongoose.Schema({
            name: {
                type: String,
                minlength: 5,
                maxlength: 100,
                required: true,
            },
            value: {
                type: Number,
                min: 0,
                max: 1000,
                required: true
            }
        }),
        required: true
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
        customer: Joi.objectId().required(),
        /* products: Joi.array().items(Joi.object({
            _id: Joi.objectId(),
            name: Joi.string().min(5).max(100).required(),
            description: Joi.string().max(255),
            image: Joi.string(),
            value: Joi.number().min(0).max(1000).required()
        })).required(), */
        products: Joi.array().items(Joi.string()).required(),
        status: Joi.string(),
        payment: Joi.string().required(),
        deliveryAddress: Joi.required()
    }

    return Joi.validate(order, schema);
}

module.exports = { Order, validate };