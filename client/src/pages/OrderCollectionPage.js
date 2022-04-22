import React, { useEffect } from 'react'
import OrderCollectionComponent from '../components/order/OrderCollectionComponent'
import LoadingComponent from '../components/global/LoadingComponent';
import ErrorComponent from '../components/global/ErrorComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerOrders } from '../actions/orderAction';


export default function OrderCollectionPage() {
  
  const dispatch = useDispatch();
  const orderState = useSelector( state => state.getCustomerOrdersReducer);
  const {orders, error, loading} = orderState;

  useEffect( () => {
    dispatch(getCustomerOrders())
  }, [])

  return (
    <div>
      <h2 className='pb-1'>My Orders</h2>
      <hr/>
      
      <div className='row justify-content-center pt-3'>
        {loading ? (<LoadingComponent />) : error ? <ErrorComponent message={"something went wrong"} icon="true" /> : (
          
          orders.map( order => {
            return <div className='col-md-8' key={order._id}>
                    <OrderCollectionComponent order={order}/>
            </div>
          })

        )}
      </div>

    </div>
  )
}
