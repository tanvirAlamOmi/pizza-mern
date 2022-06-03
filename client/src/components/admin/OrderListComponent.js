import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingComponent from '../global/LoadingComponent';
import ErrorComponent from '../global/ErrorComponent';
import AdminPanelComponent from './AdminPanelComponent'
import { approveOrder, deliverOrder, getAllOrders } from '../../actions/orderAction';

export default function OrderListComponent() {

  const orderState = useSelector((state) => state.getAllOrdersReducer);

  const {orders, error, loading} = orderState;

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllOrders());
  }, [])

  return (
    <div>
        <AdminPanelComponent />
        

        <div className='row justify-content-center'>
            <div className='col-md-10'>
              <h5>Order List</h5>
              {loading && (<LoadingComponent />)}
              {error && (<ErrorComponent message="Something went wrong" />)}

              <table className='table table-bordered table-responsive-sm'>
                <thead className='thead-dark'>
                  <tr>
                    <th>Order ID</th>
                    <th>Email</th>
                    <th>User id</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders && orders.map(order => {
                    return <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.email}</td>
                      <td>{order.customerId}</td>
                      <td>{order.orderAmount}</td>
                      <td>{order.createdAt.substring(0,10)}</td>
                      <td>
                        { 
                          order.orderStatus == "PENDING" && (<button className='btn btn-primary fw-bold' onClick={() => dispatch(approveOrder(order._id))}>APPROVE</button>) || 
                          order.orderStatus == "APPROVED" && (<button className='btn btn-warning fw-bold' onClick={() => dispatch(deliverOrder(order._id))}>DELIVER</button>) ||
                          order.orderStatus == "DELIVERED" && (<h6 className='text-success fw-bold'>DELIVERED</h6>)

                        }
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>

            </div>
        </div>

    </div>
  )
}
