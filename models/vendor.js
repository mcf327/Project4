const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    name: String,
    description: String,
    address: String,
    phone: String,
    sortOrder: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Vendor', vendorSchema);