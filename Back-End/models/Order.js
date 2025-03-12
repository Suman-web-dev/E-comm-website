import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [
        {
            _id: String,
            name: String,
            price: Number,
            quantity: Number,
        },
    ],
    totalPrice: { type: Number, required: true },
    address: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, default: "Pending" },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
