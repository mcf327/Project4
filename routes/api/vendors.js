const express = require('express');
const router = express.Router();
const vendorsCtrl = require('../../controllers/api/vendors');

// GET /api/vendors
router.get('/', vendorsCtrl.getAll);

// GET /api/vendors/store/:userId
router.get('/store/:userId', vendorsCtrl.getStoreByUserId);

// POST /api/vendors
router.post('/', vendorsCtrl.create);

// POST /api/vendors/store/:userId/addItem
router.post('/store/:userId/addItem', vendorsCtrl.addItemToStore);

// PUT /api/vendors/store/:userId
router.put('/store/:userId', vendorsCtrl.updateStoreInfo);

// DELETE /api/vendors/store/:userId/deleteItem/:itemId
router.delete('/store/:userId/deleteItem/:itemId', vendorsCtrl.deleteItemFromStore);

module.exports = router;