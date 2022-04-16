import axios from 'axios';

export const registerCustomer = (customer) => async dispatch => {
    dispatch({type: 'CUSTOMER_REGISTRATION_REQUEST'})

    try{
        const response = await axios.post('/api/auth/customer/register', customer)
        dispatch({type: 'CUSTOMER_REGISTRATION_SUCCESS'})
    }
    catch(error){
        dispatch({type: 'CUSTOMER_REGISTRATION_FAILED', payload: error})
    }
}