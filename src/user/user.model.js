const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 255,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 1024,
        required: true
    },
    isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id,
        isAdmin: this.isAdmin
    }, '1d!$962(k.32%_d6fs?.er39d1'); // change this secret to env variable
    return token;
}

const User = mongoose.model('User', userSchema);

function validate(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(6).max(255).required()
    };

    return Joi.validate(user, schema);
}

module.exports = { User, validate };