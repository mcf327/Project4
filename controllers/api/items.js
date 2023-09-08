const Item = require('../../models/item');

async function getItemsByVendorId(req, res) {
    try {
        const vendorId = req.params.vendorId;
        const items = await Item.find({ vendor: vendorId });
        res.json(items);
    } catch (err) {
        res.json({ error: 'Internal server error' });
    }
}

module.exports = {
    getItemsByVendorId
}