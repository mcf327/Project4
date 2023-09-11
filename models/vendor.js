const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    description: String,
    address: String,
    phone: String,
    contactEmail: String,
    sortOrder: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Vendor', vendorSchema);