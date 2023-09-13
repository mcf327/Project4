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

async function removeFromCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.removeItemFromCart(req.params.id);
    res.json(cart);
}

async function changeCartItemQty(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.json(cart);
}

async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
}

async function getUserOrderHistory(req, res) {
    const orderHistory = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orderHistory);
}

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    changeCartItemQty,
    checkout,
    getUserOrderHistory
}