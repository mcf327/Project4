const Vendor = require('../../models/vendor');

async function getAll(req, res) {
    try {
        const vendors = await Vendor.find();
        res.json(vendors);
    } catch (err) {
        res.json({ error: 'An error occurred while fetching vendors' });
    }
}


module.exports = {
    getAll
}