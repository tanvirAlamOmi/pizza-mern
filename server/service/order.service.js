import { v4 as uuidv4 } from 'uuid';
import orderModel from '../model/order.model.js';

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET);

class OrderService {
    constructor(){}

    async submit(obj){
        const session = await orderModel.startSession();
        
        const { token, subtotal, currentCustomer, cartItems } = obj;

        session.startTransaction();

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await stripe.charges.create({
            amount : subtotal * 100,
            currency: 'BDT',
            customer: customer.id,
            receipt_email: token.email
        },
        {
            idempotencyKey: uuidv4()
        })

        const newOrder = new orderModel({
            name: currentCustomer.name,
            email: currentCustomer.email,
            customerId: currentCustomer._id,
            orderItems: cartItems,
            shippingAddress: {
                street: token.card.address_line1,
                city: token.card.address_city,
                country: token.card.address_country,
                postalCode: token.card.address_zip,
            },
            orderAmount: subtotal,
            transactionId: payment.source.id
        })

        newOrder.save();
        
        await session.commitTransaction();
        session.endSession();

        return newOrder;
    }

    async getOrdersByCustomer(obj) {
        const {customerId} = obj;

        const orders = await orderModel.find({customerId}).sort({_id: -1})
        return orders;
    }
}

export default OrderService;