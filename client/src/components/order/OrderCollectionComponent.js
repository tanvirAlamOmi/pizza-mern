import React from 'react'

export default function OrderCollectionComponent({order}) {

  return (
      <div className='flex-container card shadow p-3 mb-5 bg-body rounded'>
        <div className='row p-4'>

          <div className='col-4' style={{textAlign:"left"}}>
            <h5 className='pb-2 border-bottom'>Items</h5>
            {order.orderItems.map( item => {
              return <div>
                <h6>{item.name} [{item.variant}] * {item.quantity} = {item.price}</h6>
              </div>
            })}
          </div>

          <div className='col-4' style={{textAlign:"left"}}>
            <h5 className='pb-2 border-bottom'>Address</h5>
            <h6>Street: {order.shippingAddress.street}</h6>
            <h6>City: {order.shippingAddress.city}</h6>
            <h6>Post code: {order.shippingAddress.postalCode}</h6>
            <h6>Country: {order.shippingAddress.country}</h6>
          </div>

          <div className='col-4' style={{textAlign:"left"}}>
            <h5 className='pb-2 border-bottom'>Order Info</h5>
            <h6>Order Amount: {order.orderAmount} TK</h6>
            <h6>Order Date: {order.createdAt.substring(0,10)}</h6>
            <h6>Transaction Id: {order.transactionId}</h6>
            <h6>Order Id: {order._id}</h6>
          </div>

        </div>
      </div>
  )
}
