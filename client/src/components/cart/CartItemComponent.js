import React from 'react';
import { addToCart, removeFromCart } from '../../actions/cartAction';
import { useDispatch } from 'react-redux';

export default function CartItemComponent({item}) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className='flex-container'>

        <div style={{textAlign: 'left'}} className="m-1 w-100">

          <h6>{item.name} [{item.variant}]</h6>
          
          <h6>Price : {item.quantity} * {item.prices[0][item.variant]} = {item.price} </h6>
          
          <h6 style={{display: 'inline'}}> Quantity: </h6>
          
          <i 
            className='fa fa-plus text-success' 
            aria-hidden="true" 
            onClick={() => dispatch(addToCart(item, item.quantity+1, item.variant))}
          ></i>
          
          <b> {item.quantity} </b>
          
          <i 
            className='fa fa-minus text-danger' 
            aria-hidden="true" 
            onClick={() => dispatch(addToCart(item, item.quantity-1, item.variant))}
          ></i>
          
          <hr/>
        
        </div>

        <div className="m-1 w-100">
          <img src={item.image} style={{ height: '80px', width: '80px'}} alt=""/>
        </div>

        <div className="m-1 w-100">
          <i 
            className='fa fa-trash text-danger mt-4' 
            aria-hidden="true"
            onClick={() => dispatch(removeFromCart(item))}
          ></i>
        </div>

      </div>
    </div>
  )
}
