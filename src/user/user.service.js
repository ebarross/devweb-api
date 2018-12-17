const { User, validate } = require('./user.model');
const _ = require('lodash');
const bcrypt = require('bcrypt');

exports.find = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) return res.status(204);

        res.status(200).json(users);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.findById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return res.status(404).json({ error: 'User not found.' });

        res.status(200).json(user);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.create = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).json({ erro: 'Email already used.' });

        user = new User(_.pick(req.body, ['name', 'email', 'password']));

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();
        res.status(201).json(_.pick(user, ['_id', 'name', 'email']));
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.getCurrent = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        return res.status(200).json(user);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }

}

exports.update = async (req, res) => {

}