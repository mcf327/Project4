const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

router.get('/byVendor/:vendorId', itemsCtrl.getItemsByVendorId);

// POST /api/items/custom
router.post('/custom', itemsCtrl.createCustomItem);

module.exports = router;