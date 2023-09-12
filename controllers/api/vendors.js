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

async function getStoreByUserId(req, res) {
    try {
        const store = await Vendor.findOne({ userId: req.params.userId });
        if (!store) {
            return res.status(404).json({ message: 'Store not found' });
        }
        res.json(store);
    } catch (error) {
        console.error('Error fetching store:', error);
        res.status(500).json({ error: 'An error occurred while fetching the store' });
    }
}

async function updateStoreInfo(req, res) {
    try {
        const { userId } = req.params;
        const updatedData = req.body;
        const store = await Vendor.findOne({ userId });

        store.name = updatedData.name || store.name;
        store.description = updatedData.description || store.description;
        store.address = updatedData.address || store.address;
        store.phone = updatedData.phone || store.phone;
        store.contactEmail = updatedData.contactEmail || store.contactEmail;
        await store.save();
        res.json(store);
    } catch (error) {
        console.log('error updating store info:', error);
    }
}

module.exports = {
    getAll,
    create,
    getStoreByUserId,
    updateStoreInfo,
}