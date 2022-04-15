import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import { getAllProductsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { registerCustomerReducer } from './reducers/customerReducer';


const finalReducer = combineReducers({
    getAllProductsReducer,
    cartReducer,
    registerCustomerReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cartReducer : {
        cartItems
    }
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
    finalReducer, 
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
)

export default store;