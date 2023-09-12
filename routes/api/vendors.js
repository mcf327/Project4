const express = require('express');
const router = express.Router();
const vendorsCtrl = require('../../controllers/api/vendors');

// GET /api/vendors
router.get('/', vendorsCtrl.getAll);

// GET /api/vendors/store/:userId
router.get('/store/:userId', vendorsCtrl.getStoreByUserId);

//POST /api/vendors
router.post('/', vendorsCtrl.create);

// PUT /api/vendors/store/:userId
router.put('/store/:userId', vendorsCtrl.updateStoreInfo);

module.exports = router;