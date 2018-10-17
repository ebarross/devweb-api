const mongoose = require('mongoose');

const schema = new mongoose.Schema({
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
        required: true,
        minlength: 3,
        maxlength: 50
    },
    city: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    state: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    }
});

const Address = mongoose.model('Address', schema);

module.exports = Address;