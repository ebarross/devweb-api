const mongoose = require('mongoose');

module.exports = function (req, res, next) {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID.' });
    }

    next();
}