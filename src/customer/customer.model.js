const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    },
    cpf: {
        type: String,
        max: 14,
        required: true
    },
    phone: {
        type: String,
        max: 20,
        required: true
    },
    orders: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'order'
    }]
});

const Customer = mongoose.model('Customer', schema);

module.exports = Customer;