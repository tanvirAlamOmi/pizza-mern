import React, { useEffect, useState } from 'react';
import {useSelector,  useDispatch} from 'react-redux'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CustomerListComponent from './CustomerListComponent';

export default function AdminPanelComponent() {
    const userState = useSelector((state) => state.loginCustomerReducer);
    const {currentCustomer } = userState;
    const dispatch = useDispatch();

    useEffect(() => {
        if( !currentCustomer || !currentCustomer.isAdmin){
            window.location.href= '/';
        }
    })
  return (
    <div>
        <div className='row justify-content-center p-3'>
            <div className='col-md-10'>

                <h2>Admin Panel</h2>

                <ul className='adminMenu'>
                    <li><Link to={'/admin/customers'}> User List</Link></li>
                    <li><Link to={'/admin/products'}> Product List</Link></li>
                    <li><Link to={'/admin/addProducts'}> Add new Product</Link></li>
                    <li><Link to={'/admin/orders'}> Order List</Link></li>
                </ul>

            </div>
        </div>
    </div>
  )
}
