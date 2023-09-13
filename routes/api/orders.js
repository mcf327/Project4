const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.getCart);

// GET /api/orders/history
router.get('/history', ordersCtrl.getUserOrderHistory);

// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);

// POST /api/order/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);

// DELETE /api/orders/cart/items/:id
router.delete('/cart/items/:id', ordersCtrl.removeFromCart);

// PUT /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.changeCartItemQty);

module.exports = router;