const mongoose = require('mongoose');
const Joi = require('joi');

const schema = new mongoose.Schema({
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
    image: {
        type: String
    },
    value: {
        type: Number,
        min: 0,
        max: 1000,
        required: true
    }
});

const Product = mongoose.model('Product', schema);

function validate(product) {
    const schema = {
        name: Joi.string().min(5).max(100).required(),
        description: Joi.string().max(255),
        image: Joi.string(),
        value: Joi.number().min(0).max(1000).required()
    }

    return Joi.validate(product, schema);
}

module.exports = { Product, validate };