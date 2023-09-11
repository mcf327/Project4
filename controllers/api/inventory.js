const Inventory = require('../../models/inventory');
const Item = require('../../models/item');

async function getInventory(req, res) {
    const inventory = await Inventory.getInventory(req.user._id);
    res.json(inventory);
}

async function addToInventory(req, res) {
    const inventory = await Inventory.getInventory(req.user._id);
    await inventory.addItemToInventory(req.params.id);
    res.json(inventory);
}

async function removeFromInventory(req, res) {
    const inventory = await Inventory.getInventory(req.user._id);
    await inventory.removeItemFromInventory(req.params.id);
    res.json(inventory);
}

async function setInventoryQty(req, res) {
    const inventory = await Inventory.getInventory(req.user._id);
    await inventory.setItemQty(req.body.itemId, req.body.newQty);
    res.json(inventory);
}

async function setInventoryMin(req, res) {
    const inventory = await Inventory.getInventory(req.user._id);
    await inventory.setItemMin(req.body.itemId, req.body.newMin);
    res.json(inventory);
}

module.exports = {
    getInventory,
    addToInventory,
    removeFromInventory,
    setInventoryQty,
    setInventoryMin
}