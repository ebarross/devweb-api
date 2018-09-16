const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        max: 100
    },
    image: {
        type: String,
        required: false
    },
    value: {
        type: Number,
        required: true,
        min: 0
    },
    restaurant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'restaurant',
        required: true
    }
});

const Product = mongoose.model('product', schema);

module.exports = Product;