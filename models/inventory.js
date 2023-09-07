const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    items: [
        {
            itemId: {
                type: Schema.Types.ObjectId,
                ref: 'Item',
            },
            minimumStock: Number,
            onHand: Number,
        }
    ]
});

module.exports = mongoose.model('Inventory', inventorySchema);