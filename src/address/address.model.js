const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        min: 1
    },
    district: {
        type: String,
        required: true,
        max: 30
    },
    city: {
        type: String,
        required: true,
        max: 30
    },
    state: {
        type: String,
        required: true,
        max: 2
    }
});

const Address = mongoose.model('address', schema);

module.exports = Address;