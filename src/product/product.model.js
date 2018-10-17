const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
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
        required: true,
        min: 0
    }
});

const Product = mongoose.model('Product', schema);

module.exports = Product;