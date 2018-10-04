const mongoose = require('mongoose');
const address = require('../address/address.model');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    cpnj: {
        type: String,
        max: 20,
        required: false
    },
    phone: {
        type: String,
        max: 20,
        required: true
    },
    address: {
        type: address.schema,
        required: true
    },
    status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'closed',
        required: true
    }
});

const Restaurant = mongoose.model('restaurant', schema);

module.exports = Restaurant;