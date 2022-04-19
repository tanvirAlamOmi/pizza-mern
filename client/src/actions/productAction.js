import axios from 'axios';

export const getAllProducts = () => async dispatch => {
    dispatch({type: 'GET_PRODUCTS_REQUEST'})

    try {
        const response = await axios.get('/api/product/get_products');
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: response.data});
    } 
    catch (error) {
        console.log(error);
        dispatch({type: 'GET_PRODUCTS_FAILED', payload: error});
    }
}