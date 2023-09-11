const Item = require('../../models/item');
const Inventory = require('../../models/inventory');

async function getItemsByVendorId(req, res) {
    try {
        const vendorId = req.params.vendorId;
        const items = await Item.find({ vendor: vendorId });
        res.json(items);
    } catch (err) {
        res.json({ error: 'Internal server error' });
    }
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
    createCustomItem
}