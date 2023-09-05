const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    category: String,
    price: Number,
    vendor: { type: Schema.Types.ObjectId, ref: 'Vendor' },
    custom: Boolean,
}, {
    timestamps: true
});

module.exports = itemSchema;