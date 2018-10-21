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

const Address = mongoose.model('Address', schema);

module.exports = Address;