const Product = require('./product.model');

exports.get = async (req, res) => {
    try {
        const products = await Product.find();

        if (products.length === 0) return res.status(204).json(products);

        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

exports.getById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) return res.status(404).json({ error: 'Product not found' });

        res.status(200).json(product);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

exports.post = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

exports.put = async (req, res) => {
    try {
        const newProduct = req.body;
        const id = req.params.id;

        const product = await Product.findByIdAndUpdate(id, {
            $set: {
                name: newProduct.name,
                description: newProduct.description,
                image: newProduct.image,
                value: newProduct.value
            }
        }, { new: true });

        if (!product) return res.status(404).json({ error: 'Product not found' });

        res.status(200).json(product);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Product.findByIdAndRemove(id);

        if (!result) return res.status(404).json({ error: 'Product not found' });

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

module.exports = exports;