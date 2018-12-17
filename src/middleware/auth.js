const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ error: "Access denied." });

    try {
        const decoded = jwt.verify(token, '1d!$962(k.32%_d6fs?.er39d1');
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ error: "Invalid token." });
    }
}