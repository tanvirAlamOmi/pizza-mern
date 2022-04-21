import axios from 'axios'

export const placeOrder =  (token, subtotal) => async ( dispatch, getState ) => {

    dispatch({type: 'PLACE_ORDER_REQUEST'})
    const currentCustomer = getState().loginCustomerReducer.currentCustomer;
    const cartItems = getState().cartReducer.cartItems;
    try{
        const response = await axios.post('/orders/placeOrder', {token, subtotal, currentCustomer, cartItems})
        dispatch({type: 'PLACE_ORDER_SUCCESS'})

        console.log(response);
    }
    catch(error){
        dispatch({type: 'PLACE_ORDER_FAILED'})

        console.log(error);
    }
}