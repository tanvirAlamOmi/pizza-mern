import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch} from 'react-redux'
import { placeOrder } from '../../actions/orderAction';
export default function CheckoutComponent({subtotal}) {
    const dispatch = useDispatch();

    function toeknHandler(token){
        console.log(token);
        dispatch(placeOrder(token,subtotal))
    }

    return (
        <div>
            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={toeknHandler}
                stripeKey='pk_test_w2atNnAve6rTAejzgtRy0u1300IuiIOdiY'
                currency='BDT'

            >
                <button className='btn btn-primary'> Pay now </button>
            </StripeCheckout>
        </div>
    )
}
