const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    },
    cpf: {
        type: String,
        minlength: 14,
        maxlength: 14,
        required: true
    },
    phone: {
        type: String,
        minlength: 8,
        maxlength: 20,
        required: true
    },
    orders: [{
        type: new mongoose.Schema({
            payment: {
                type: String,
                enum: ['money', 'card']
            },
            time: {
                type: Date,
                required: true
            },
            totalValue: {
                type: Number,
                min: 0,
                default: 0,
                required: true
            }
        })
    }]
});

const Customer = mongoose.model('Customer', schema);

module.exports = { Customer };