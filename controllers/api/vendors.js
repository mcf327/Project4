const Vendor = require('../../models/vendor');

async function getAll(req, res) {
    try {
        const vendors = await Vendor.find();
        res.json(vendors);
    } catch (err) {
        res.json({ error: 'An error occurred while fetching vendors' });
    }
}

async function create(req, res) {
    try {
        req.body.userId = req.user._id;
        const vendor = await Vendor.create(req.body);
        res.json(vendor);
    } catch (error) {
        console.log('error creating vendor object: ', error);
    }
}


module.exports = {
    getAll,
    create
}