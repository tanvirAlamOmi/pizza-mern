import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch, useSelector} from 'react-redux'
import { placeOrder } from '../../actions/orderAction';
import LoadingComponent from '../global/LoadingComponent'
import ErrorComponent from '../global/ErrorComponent'
import SuccessComponent from '../global/SuccessComponent'

export default function CheckoutComponent({subtotal}) {
    const orderState = useSelector(state => state.placeOrderReducer)
    const dispatch = useDispatch();
    const { loading, error, success } = orderState;

    function toeknHandler(token){
        dispatch(placeOrder(token,subtotal))
    }

    return (
        <div>
          {loading && (<LoadingComponent />)}
          {success && (<SuccessComponent message="Registration Successful" />)}
          {error && (<ErrorComponent message="Registration failed" />) }
  
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
