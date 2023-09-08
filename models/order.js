const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const orderItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    item: itemSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [orderItemSchema],
    isPaid: { type: Boolean, default: false },
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true }
    );
}

orderSchema.methods.addItemToCart = async function(itemId) {
    const cart = this;
    const orderItem = cart.orderItems.find(orderItem => orderItem.item._id.equals(itemId));
    if (orderItem) {
      orderItem.qty += 1;
    } else {
      const Item = mongoose.model('Item');
      const item = await Item.findById(itemId);
      cart.orderItems.push({ item });
    }
    return cart.save();
};

orderSchema.methods.removeItemFromCart = async function(itemId) {
    const cart = this;
    const itemIndex = cart.orderItems.findIndex(orderItem =>
        orderItem.item._id.equals(itemId)
    );
    if (itemIndex !== -1) {
    cart.orderItems.splice(itemIndex, 1);
    await cart.save();
    }
    return cart;
}

module.exports = mongoose.model('Order', orderSchema);