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

export const loginCustomer = (customer) => async dispatch => {
    dispatch({type: 'CUSTOMER_LOGIN_REQUEST'})

    try{
        const response = await axios.post('/api/auth/customer/login', customer);
        dispatch({type: 'CUSTOMER_LOGIN_SUCCESS', payload: response.data});
        localStorage.setItem('currentCustomer', JSON.stringify(response.data.data));
        window.location.href = '/';
    }
    catch(error){
        console.log(error.response.data.message);
        dispatch({type: 'CUSTOMER_LOGIN_FAILED', payload: error})
    }
}

export const logoutCustomer = () => {
    localStorage.removeItem('currentCustomer');
    window.location.href = '/login';
}