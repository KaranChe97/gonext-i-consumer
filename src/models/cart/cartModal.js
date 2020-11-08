const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
        customerId: { type: mongoose.ObjectId, ref: 'customer' },
        cart: [{
            organizationID: {type: mongoose.ObjectId, ref: 'admin'},
            _id: false,
            products: [{
                _id: false,
                productID: { type: mongoose.ObjectId, ref: 'inventory' },
                variants:[{
                    _id: false,
                    variantID: { type: mongoose.ObjectId },
                    unit: { type: String },
                    cost: { type: Number },
                    quantity: { type: Number }
                }]
            }]
        }]
}, { timestamps: true });

CartSchema.index({ customerId: 1 });

module.exports = mongoose.model("cart",CartSchema);