const express = require('express');
const router = express.Router();
const inventoryCtrl = require('../../controllers/api/inventory');


// GET /api/inventory
router.get('/', inventoryCtrl.getInventory);

// POST /api/inventory/items/:id
router.post('/items/:id', inventoryCtrl.addToInventory);

// DELETE /api/inventory/items/:id
router.delete('/items/:id', inventoryCtrl.removeFromInventory);

module.exports = router;