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
            payload: action.payload
        }
        default : return state
    }
}