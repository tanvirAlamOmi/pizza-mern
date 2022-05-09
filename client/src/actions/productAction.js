import axios from 'axios';

export const getAllProducts = () => async dispatch => {
    dispatch({type: 'GET_PRODUCTS_REQUEST'})

    try {
        const response = await axios.get('/api/product/get_products');
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: response.data.data});
    } 
    catch (error) {
        console.log(error);
        dispatch({type: 'GET_PRODUCTS_FAILED', payload: error});
    }
}

export const filterProducts = (searchKey, category) => async dispatch => {
    let filterProducts = {};
    dispatch({type: 'GET_PRODUCTS_REQUEST'})

    try {
        const response = await axios.get('/api/product/get_products');
        filterProducts = response.data.data.filter( product => product.name.toLowerCase().includes(searchKey));
        if(category != 'all'){
            filterProducts = response.data.data.filter( product => product.category.toLowerCase() == category);
        }
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: filterProducts});
    } 
    catch (error) {
        console.log(error);
        dispatch({type: 'GET_PRODUCTS_FAILED', payload: error});
    }
}