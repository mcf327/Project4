const express = require('express');
const router = express.Router();
const inventoryCtrl = require('../../controllers/api/inventory');


// GET /api/inventory
router.get('/', inventoryCtrl.getInventory);

// POST /api/inventory/items/:id
router.post('/items/:id', inventoryCtrl.addToInventory);

// DELETE /api/inventory/items/:id
router.delete('/items/:id', inventoryCtrl.removeFromInventory);

// PUT /api/inventory/qty
router.put('/qty', inventoryCtrl.setInventoryQty);

// PUT /api/inventory/min
router.put('/min', inventoryCtrl.setInventoryMin);

module.exports = router;