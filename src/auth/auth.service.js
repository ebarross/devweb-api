const { User } = require('../user/user.model');
const bcrypt = require('bcrypt');
const Joi = require('joi');

exports.authenticate = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json({ error: 'Incorrect email or password.' });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({ error: 'Incorrect email or password.' });

        res.status(200).send(true);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

validate = (user) => {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(6).max(255).required()
    };

    return Joi.validate(user, schema);
};