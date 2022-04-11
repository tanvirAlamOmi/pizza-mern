import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'

export default function Product({pizza}) {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
        <div  onClick={handleShow}>
            <h5 className='title fw-bold'>{pizza.name}</h5>

            <img src={pizza.image} className="img-fluid product-img" alt='' />
        </div>

        <div className='flex-container'>

            <div className='w-100 m-1'>
                <p>variant</p>
                <select className='form-control' value={varient} onChange={(e) => setVarient(e.target.value)}>
                    {pizza.varients.map( varient => {
                        return <option value={varient}>{varient}</option>
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
                <h6 className='fw-bold mt-3'>Price : {pizza.prices[0][varient] * quantity} TK</h6>
            </div>

            <div className='w-100 m-1'>
                <button className='btn btn-primary'>Add To Cart</button>
            </div>

        </div>
        

        <Modal  show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{pizza.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img src={pizza.image} className="img-fluid product-modal-img" alt='' />
                <p>{pizza.description}</p>
            </Modal.Body>

        </Modal>

    </div>
  )
}
