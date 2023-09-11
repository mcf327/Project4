const express = require('express');
const router = express.Router();
const vendorsCtrl = require('../../controllers/api/vendors');

// GET /api/vendors
router.get('/', vendorsCtrl.getAll);

//POST /api/vendors
router.post('/', vendorsCtrl.create);

module.exports = router;