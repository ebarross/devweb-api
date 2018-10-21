const { Product, validate } = require('./product.model');

exports.find = async (req, res) => {
    try {
        const products = await Product.find().sort('name').select('-__v');

        if (products.length === 0) return res.status(204).json(products);

        res.status(200).json(products);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.findById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) return res.status(404).json({ error: 'Product not found' });

        res.status(200).json(product);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.create = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.update = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    let product = req.body;
    const id = req.params.id;

    try {
        product = await Product.findByIdAndUpdate(id, {
            $set: {
                name: product.name,
                description: product.description,
                image: product.image,
                value: product.value
            }
        }, { new: true });

        if (!product) return res.status(404).json({ error: 'Product not found' });

        res.status(200).json(product);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Product.findByIdAndRemove(id);

        if (!result) return res.status(404).json({ error: 'Product not found' });

        res.status(200).json(result);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

module.exports = exports;