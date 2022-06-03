import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingComponent from '../global/LoadingComponent';
import ErrorComponent from '../global/ErrorComponent';
import AdminPanelComponent from './AdminPanelComponent'
import { getAllCustomers, deleteCustomer} from '../../actions/customerAction';

export default function CustomerListComponent() {
  
  const customersState = useSelector((state) => state.getAllCustomerReducer);

  const {customers, error, loading} = customersState;

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCustomers());
  }, [])

  return (
    <div>
        <AdminPanelComponent />

        

        <div className='row justify-content-center'>
            <div className='col-md-10'>
              <h5>Customer List</h5>
              {loading && (<LoadingComponent />)}
              {error && (<ErrorComponent message="Something went wrong" />)}

              <table className='table table-bordered'>
                <thead className='thead-dark'>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {customers && customers.map(customer => {
                    return <tr key={customer._id}>
                      <td>{customer._id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td> <i className="fa fa-trash" onClick={() => dispatch(deleteCustomer(customer._id))}></i> </td>
                    </tr>
                  })}
                </tbody>
              </table>

            </div>
        </div>

    </div>
  )
}
