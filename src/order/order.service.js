const { Order, validate } = require('./order.model');
const { validateAddress } = require('../address/address.model');
const { Customer } = require('../customer/customer.model');
const { Product } = require('../product/product.model');

exports.find = async (req, res) => {
    try {
        const orders = await Order
            .find()
            .populate('customer')
            .select('-__v');

        if (orders.length === 0) return res.status(204).json(orders);

        res.status(200).json(orders);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.findById = async (req, res) => {
    try {
        const order = await Order
            .findById(req.params.id)
            .populate('customer')
            .select('-__v');

        if (!order) return res.status(404).json({ error: 'Order not found' });

        res.status(200).json(order);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.create = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const validationAddress = validateAddress(req.body.address);
    const errorAddress = validationAddress.error;
    if (errorAddress) res.status(400).json({ error: errorAddress.details[0].message });

    try {
        // const customer = await Customer.find(req.body.customerId);
        // if (!customer) return res.status(400).json({ error: 'Invalid customer' });

        let order = req.body;
        /* order.products.map((product) => {
            product = {
                _id: product._id,
                name: product.name,
                value: product.value
            };
            return product;
        }); */

        const orderPromises = order.products.map(async (productId) => {
            const product = await Product.findById(productId).select('_id name value');
            return product;
        });
        const products = await Promise.all(orderPromises);
        order.products = products;

        order = await Order.create(order);
        res.status(200).json(order);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

getProductData = async (productId) => {
    const product = await Product.findById(productId).select('_id name value');
    return product;
}

exports.update = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const validationAddress = validateAddress(req.body.address);
    const errorAddress = validationAddress.error;
    if (errorAddress) res.status(400).json({ error: errorAddress.details[0].message });

    const id = req.params.id;
    let order = req.body;

    try {
        order = await Order.findByIdAndUpdate(id, {
            $set: {
                products: order.products,
                status: order.status,
                payment: order.payment,
                deliveryAddress: order.deliveryAddress,
            }
        }, { new: true });

        if (!order) return res.status(404).json({ error: 'Order not found' });

        res.status(200).json(order);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.remove = async (req, res) => {
    try {
        const result = await Order.findByIdAndRemove(req.params.id);

        if (!result) return res.status(404).json({ error: 'Order not found' });

        res.status(200).json(result);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};