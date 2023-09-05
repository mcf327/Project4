const express = require('express');
const router = express.Router();
const vendorsCtrl = require('../../controllers/api/vendors');

router.get('/', vendorsCtrl.getAll);

module.exports = router;