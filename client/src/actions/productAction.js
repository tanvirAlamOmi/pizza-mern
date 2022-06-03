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

export const addProduct = (product) =>async dispatch => {
    dispatch({type: 'ADD_PRODUCT_REQUEST'})

    try{
        const response = await axios.post('/api/product/add_products', {product})
        dispatch({type: 'ADD_PRODUCT_SUCCESS'})
    }catch(error){
        dispatch({type: 'ADD_PRODUCT_FAILED', payload: error})
    }
}


export const getProductById = (productId) => async dispatch => {
    dispatch({type: 'GET_PRODUCT_BY_ID_REQUEST'})

    try {
        const response = await axios.post('/api/product/get_product', {productId});
        dispatch({type: 'GET_PRODUCT_BY_ID_SUCCESS', payload: response.data.data});
    } 
    catch (error) {
        console.log(error);
        dispatch({type: 'GET_PRODUCT_BY_ID_FAILED', payload: error});
    }
}


export const updateProduct = (updatedproduct) =>async dispatch => {
    dispatch({type: 'UPDATE_PRODUCT_REQUEST'})

    try{
        const response = await axios.post('/api/product/update_product', {updatedproduct})
        dispatch({type: 'UPDATE_PRODUCT_SUCCESS'})
        window.location.href = '/admin/products'

    }catch(error){
        dispatch({type: 'UPDATE_PRODUCT_FAILED', payload: error})
    }
}

export const deleteProduct = (id) => async dispatch =>{
    try{
        await axios.post('/api/product/delete_product', {id})
        window.location.reload();
    }
    catch(error){
        console.log(error);
    }
}