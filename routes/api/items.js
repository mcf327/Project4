const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

router.get('/byVendor/:vendorId', itemsCtrl.getItemsByVendorId);

// GET /api/items/:itemId
router.get('/:itemId', itemsCtrl.getItemById);

// POST /api/items
router.post('/', itemsCtrl.createItem);

// POST /api/items/custom
router.post('/custom', itemsCtrl.createCustomItem);

module.exports = router;