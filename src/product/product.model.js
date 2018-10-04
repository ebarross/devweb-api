const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        max: 100
    },
    image: {
        type: String
    },
    value: {
        type: Number,
        required: true,
        min: 0
    }
});

const Product = mongoose.model('product', schema);

module.exports = Product;