const Order = require('../../models/order');
const Item = require('../../models/item');

async function getCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}

async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
}

module.exports = {
    getCart,
    addToCart
}