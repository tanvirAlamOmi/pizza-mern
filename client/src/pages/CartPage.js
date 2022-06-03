import React from 'react'
import CartComponent from '../components/cart/CartItemComponent'
import CartCalculationComponent from '../components/cart/CartCalculationComponent'
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function CartPage() {
    AOS.init()
  const cartState = useSelector( state => state.cartReducer );
  const cartItems = cartState.cartItems;

  return (
      <div>
          
        <div className='row justify-content-center p-2' data-aos='fade-down'>

            <h2 style={{fontSize: '40px'}}> My Cart </h2>

            <div className='col-md-6'>
                {cartItems.map( item => {
                    return (
                        <div key={item._id}>
                            <CartComponent item = {item} />
                        </div>
                    )
                })}
            </div>

            <div className='col-md-4'>
                <CartCalculationComponent />
            </div>
            
        </div>
        
      </div>
 )
}
