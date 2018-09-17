const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    },
    restaurant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'restaurant'
    }
});

const Employee = mongoos.model('employee', schema);

module.exports = Employee;