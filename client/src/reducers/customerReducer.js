export const registerCustomerReducer = (state = {}, action) => {
    switch(action.type)
    {
        case 'CUSTOMER_REGISTRATION_REQUEST' : return {
            loading: true
        }
        case 'CUSTOMER_REGISTRATION_SUCCESS' : return {
            loading: false,
            success: true
        }
        case 'CUSTOMER_REGISTRATION_FAILED' : return {
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export const loginCustomerReducer = (state = {}, action) => {
    switch(action.type)
    {
        case 'CUSTOMER_LOGIN_REQUEST' : return {
            loading: true
        }
        
        case 'CUSTOMER_LOGIN_SUCCESS' : return {
            loading: false,
            success: true,
            payload: action.payload
        }
        
        case 'CUSTOMER_LOGIN_FAILED' : return {
            loading: false,
            error: action.payload
        }

        default: return state;
    }
}


export const getAllCustomerReducer = (state = {customers: []}, action) => {
    switch(action.type)
    {
        case 'GET_CUSTOMERS_REQUEST' : return {
            loading: true,
            ...state
        };

        case 'GET_CUSTOMERS_SUCCESS' : return {
            loading: false,
            customers : action.payload
        };
        
        case 'GET_CUSTOMERS_FAILED' : return {
            loading: false,
            error : action.payload
        };
        
        default: return state;
    }

}