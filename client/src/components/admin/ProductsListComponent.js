import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../global/LoadingComponent';
import ErrorComponent from '../global/ErrorComponent';
import SuccessComponent from '../global/SuccessComponent';
import AdminPanelComponent from './AdminPanelComponent';
import {deleteProduct, getAllProducts} from '../../actions/productAction'
import { Link } from 'react-router-dom';

export default function ProductsListComponent() {
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.getAllProductsReducer);

  const {products, error, loading} = productState;

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div> 
        <AdminPanelComponent />
        
        <div className='row justify-content-center'>
            <div className='col-md-10'>
              <h5>Product List</h5>
              {loading && (<LoadingComponent />)}
              {error && (<ErrorComponent message="Something went wrong" />)}

              <table className='table table-bordered'>
                <thead className='thead-dark'>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products && products.map(product => {
                    return <tr>
                      <td>{product.name}</td>
                      <td>
                        Small: {product.prices[0]['small']} <br />
                        Medium: {product.prices[0]['medium']} <br />
                        Large: {product.prices[0]['large']}
                      </td>
                      <td>{product.category}</td>
                      <td>
                        <i className='fa fa-trash m-1' onClick={() => dispatch(deleteProduct(product._id))}></i>
                        <Link to={`/admin/editProduct/${product._id}`}><i className='fa fa-edit m-1'></i></Link>
                        
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
