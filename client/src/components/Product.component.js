import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cart.action'

export default function Product({product}) {
    const [quantity, setQuantity] = useState(1)
    const [variant, setVariant] = useState('small')
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    function addtocart (){
        dispatch(addToCart(product, quantity, variant))
    }

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <div  onClick={handleShow}>
            <h5 className='title fw-bold'>{product.name}</h5>

            <img src={product.image} className="img-fluid product-img" alt='' />
        </div>

        <div className='flex-container'>

            <div className='w-100 m-1'>
                <p>variant</p>
                <select className='form-control' value={variant} onChange={(e) => setVariant(e.target.value)}>
                    {product.variants.map( variant => {
                        return <option value={variant}>{variant}</option>
                    })}
                </select>
            </div>

            <div className='w-100 m-1'>
                <p>quantity</p>
                <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                   {[...Array(10).keys()].map((x,i) => {
                       return <option value={i+1}>{i+1}</option>
                   })}
                </select>
            </div>

        </div>

        <div className='flex-container'>

            <div className='w-100 m-1'>
                <h6 className='fw-bold mt-3'>Price : {product.prices[0][variant] * quantity} TK</h6>
            </div>

            <div className='w-100 m-1'>
                <button className='btn btn-primary' onClick={addtocart}>Add To Cart</button>
            </div>

        </div>
        

        <Modal  show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img src={product.image} className="img-fluid product-modal-img" alt='' />
                <p>{product.description}</p>
            </Modal.Body>

        </Modal>

    </div>
  )
}
