import axios from 'axios'

export const placeOrder =  (token, subtotal) => async ( dispatch, getState ) => {

    dispatch({type: 'PLACE_ORDER_REQUEST'})

    const currentCustomer = getState().loginCustomerReducer.currentCustomer;
    const cartItems = getState().cartReducer.cartItems;

    try{
        const response = await axios.post('/api/orders/place_order', {token, subtotal, currentCustomer, cartItems})
        dispatch({type: 'PLACE_ORDER_SUCCESS', payload: response.data.data})
    }
    catch(error){
        dispatch({type: 'PLACE_ORDER_FAILED', payload: error})

    }
}

export const getCustomerOrders = () => async (dispatch, getState) => {
    dispatch({type: 'GET_CUSTOMER_ORDERS_REQUEST'})

    const currentCustomer = getState().loginCustomerReducer.currentCustomer;

    try {
        const response = await axios.post('/api/orders/get_customer_orders', {customerId: currentCustomer._id});
        dispatch({type: 'GET_CUSTOMER_ORDERS_SUCCESS', payload: response.data.data});
    } 
    catch (error) {
        dispatch({type: 'GET_CUSTOMER_PRODUCTS_FAILED', payload: error});
    }
}