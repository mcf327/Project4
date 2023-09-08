const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.getCart);

// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);

// DELETE /api/orders/cart/items/:id
router.delete('/cart/items/:id', ordersCtrl.removeFromCart);

module.exports = router;