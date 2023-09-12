const Item = require('../../models/item');
const Inventory = require('../../models/inventory');
const Vendor = require('../../models/vendor');

async function getItemsByVendorId(req, res) {
    const vendorId = req.params.vendorId;
    const items = await Item.find({ vendor: vendorId });
    res.json(items);
}

async function createItem(req, res) {
    const itemData = req.body;
    const vendor = await Vendor.findOne({ userId: req.user._id });
    itemData.vendor = vendor._id;
    const newItem = new Item(itemData);
    await newItem.save();
    res.json(newItem);
}

async function getItemById(req, res) {
    const itemId = req.params.itemId;
    const item = await Item.findById(itemId);
    res.json(item);
}

async function createCustomItem(req, res) {
    const { name, category, price } = req.body;
    const newItem = new Item({
        name,
        category,
        price,
        custom: true,
    });
    await newItem.save();

    const { qty, minimumStock } = req.body;
    const newInventoryItem = {
        qty,
        minimumStock,
        item: {
            name,  
            _id: newItem._id
        },
    };

    const inventory = await Inventory.getInventory(req.user._id);
    inventory.inventoryItems.push(newInventoryItem);
    await inventory.save();
    res.json(newItem);
}

module.exports = {
    getItemsByVendorId,
    createCustomItem,
    createItem,
    getItemById
}