const Joi = require('joi');
const mongoose = require('mongoose');
const { addressSchema } = require('../address/address.model');

const schema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 255,
        required: true
    },
    cpnj: {
        type: String,
        maxlength: 20
    },
    phone: {
        type: String,
        minlength: 8,
        maxlength: 20,
        required: true
    },
    address: {
        type: addressSchema,
        required: true
    },
    status: {
        type: String,
        enum: ['open', 'closed'],
        lowercase: true,
        default: 'closed'
    }
});

const Restaurant = mongoose.model('Restaurant', schema);

function validate(restaurant) {
    const schema = {
        name: Joi.string().min(5).max(255).required(),
        cnpj: Joi.string().max(20),
        phone: Joi.string().min(8).max(20).required(),
        address: Joi.required(),
        status: Joi.string()
    };

    return Joi.validate(restaurant, schema);
}

module.exports = { Restaurant, validate };