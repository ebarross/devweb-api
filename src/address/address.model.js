const mongoose = require('mongoose');
const Joi = require('joi');

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        minlength: 5,
        maxlength: 255,
        required: true
    },
    number: {
        type: Number,
        min: 1
    },
    district: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    city: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    state: {
        type: String,
        minlength: 2,
        maxlength: 2,
        required: true
    }
});

const Address = mongoose.model('Address', addressSchema);

function validate(address) {
    const schema = {
        street: Joi.string().min(5).max(255).required(),
        number: Joi.number().min(1),
        district: Joi.string().min(3).max(50).required(),
        city: Joi.string().min(3).max(100).required(),
        state: Joi.string().min(2).max(2).required()
    }

    return Joi.validate(address, schema);
}

module.exports = { Address, addressSchema, validateAddress: validate };