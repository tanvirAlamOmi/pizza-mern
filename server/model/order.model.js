import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        name : {type: String, required: true},
        email: {type: String, required: true},
        customerId: {type: String, required: true},
        orderItems: [],
        shippingAddress: {type: Object},
        orderAmount: {type: Number, required: true},
        orderStatus: {
            type: String,
            enum : ['PENDING','APPROVED', 'DELIVERED'],
            default: 'PENDING'
        },
        is_paid: {type: Boolean, default: false},
        transactionId: {type: String, required: true}
    },
    {
        timestamps: true,
    }
);

const orderModel = mongoose.model('orders', orderSchema);

export default orderModel;