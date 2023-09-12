const Vendor = require('../../models/vendor');

async function getAll(req, res) {
    const vendors = await Vendor.find();
    res.json(vendors);
}

async function create(req, res) {
    req.body.userId = req.user._id;
    const vendor = await Vendor.create(req.body);
    res.json(vendor);
}

async function getStoreByUserId(req, res) {
    const store = await Vendor.findOne({ userId: req.params.userId });
    res.json(store);
}

async function addItemToStore(req, res) {
    const { userId } = req.params;
    const { newItem } = req.body;
    const vendor = await Vendor.findOne({ userId })
    await vendor.addItemToStore(newItem);
    res.json(vendor.items);
}

async function deleteItemFromStore(req, res) {
    const { userId, itemId } = req.params;
    const vendor = await Vendor.findOne({ userId });
    await vendor.deleteItemFromStore(itemId);
    res.json(vendor.items);
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
    addItemToStore,
    deleteItemFromStore
}