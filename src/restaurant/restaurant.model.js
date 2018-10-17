const mongoose = require('mongoose');
const address = require('../address/address.model');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
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
        type: address.schema,
        required: true
    },
    status: {
        type: String,
        enum: ['open', 'closed'],
        lowercase: true,
        default: 'closed',
        required: true
    }
});

const Restaurant = mongoose.model('Restaurant', schema);

module.exports = Restaurant;