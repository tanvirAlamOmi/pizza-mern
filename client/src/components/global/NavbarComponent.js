import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { logoutCustomer } from '../../actions/customerAction';


export default function NavbarComponent() {

    const cartState = useSelector (state => state.cartReducer);
    const customerState = useSelector(state => state.loginCustomerReducer);

    const {currentCustomer} = customerState;

    const dispatch = useDispatch();

    const profileHtml = (
        <div className="dropdown nav-link">
            <a className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            { currentCustomer ? currentCustomer.name : 'guest'}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/orders">Orders</a>
                <a className="dropdown-item" href="/" onClick={() => dispatch(logoutCustomer())}>Logout</a>
            </div>
        </div>
    )
    const loginHtml = (
        <li className="nav-item active">
            <a className="nav-link" href="/login">
                Login 
            </a>
        </li>
    )

  return (
    <div>
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
            <a className="navbar-brand text-uppercase" href="/">
                Pitta
            </a>
            <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">

                    { currentCustomer ? profileHtml : loginHtml }

                    <li className="nav-item">
                        <a className="nav-link" href="/cart">
                            Cart {cartState.cartItems.length}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
