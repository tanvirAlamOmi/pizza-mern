export const addProductsReducer = (state = { }, action) => {
    switch(action.type)
    {
        case 'ADD_PRODUCT_REQUEST' : return {
            loading: true,
            ...state
        };

        case 'ADD_PRODUCT_SUCCESS' : return {
            loading: false,
            success: true,
        };
        
        case 'ADD_PRODUCT_FAILED' : return {
            loading: false,
            error : action.payload
        };
        
        default: return state;
    }

}

export const getAllProductsReducer = (state = {products: []}, action) => {
    switch(action.type)
    {
        case 'GET_PRODUCTS_REQUEST' : return {
            loading: true,
            ...state
        };

        case 'GET_PRODUCTS_SUCCESS' : return {
            loading: false,
            products : action.payload
        };
        
        case 'GET_PRODUCTS_FAILED' : return {
            loading: false,
            error : action.payload
        };
        
        default: return state;
    }

}



export const getProductByIdReducer = (state = { }, action) => {
    switch(action.type)
    {
        case 'GET_PRODUCT_BY_ID_REQUEST' : return {
            loading: true,
            ...state
        };

        case 'GET_PRODUCT_BY_ID_SUCCESS' : return {
            loading: false,
            product : action.payload
        };
        
        case 'GET_PRODUCT_BY_ID_FAILED' : return {
            loading: false,
            error : action.payload
        };
        
        default: return state;
    }

}

export const updateProductReducer = (state = { }, action) => {
    switch(action.type)
    {
        case 'UPDATE_PRODUCT_REQUEST' : return {
            updateLoading: true,
            ...state
        };

        case 'UPDATE_PRODUCT_SUCCESS' : return {
            updateLoading: false,
            updateSuccess: true,
        };
        
        case 'UPDATE_PRODUCT_FAILED' : return {
            updateLoading: false,
            updateError : action.payload
        };
        
        default: return state;
    }

}