const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    description: String,
    address: String,
    phone: String,
    contactEmail: String,
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item',
      }],
    sortOrder: Number
}, {
    timestamps: true
});

vendorSchema.methods.addItemToStore = async function(item) {
    this.items.push(item);
    await this.save();
}

vendorSchema.methods.deleteItemFromStore = async function(itemId) {
    this.items = this.items.filter(item => item._id.toString() !== itemId);
    await this.save();
}

module.exports = mongoose.model('Vendor', vendorSchema);