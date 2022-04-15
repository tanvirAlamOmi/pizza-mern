import React from 'react'
import { useSelector } from 'react-redux';

export default function CartCalculationComponent() {
    const cartState = useSelector( state => state.cartReducer );
    const cartItems = cartState.cartItems;

    let subtotal = cartItems.reduce( (total, item) => total + item.price, 0 )  

    return (
        <div style={{textAlign: 'right'}} >
            <h2>  Subtotal: {subtotal} TK</h2>
        </div>
    )
}
