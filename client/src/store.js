import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import { getAllProductsReducer, addProductsReducer, getProductByIdReducer, updateProductReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { registerCustomerReducer, loginCustomerReducer, getAllCustomerReducer } from './reducers/customerReducer';
import { placeOrderReducer, getCustomerOrdersReducer, getAllOrdersReducer } from './reducers/orderReducer';


const finalReducer = combineReducers({
    getAllCustomerReducer,
    getAllOrdersReducer,
    updateProductReducer,
    getProductByIdReducer,
    addProductsReducer,
    getAllProductsReducer,
    cartReducer,
    registerCustomerReducer,
    loginCustomerReducer,
    placeOrderReducer,
    getCustomerOrdersReducer,
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentCustomer = localStorage.getItem('currentCustomer') ? JSON.parse(localStorage.getItem('currentCustomer')) : null;

const initialState = {
    cartReducer : {
        cartItems
    },
    
    loginCustomerReducer : {
        currentCustomer
    }
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
    finalReducer, 
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
)

export default store;