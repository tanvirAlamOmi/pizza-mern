import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Product from '../components/Product.component';
import { getAllProducts } from '../actions/product.action';

export default function Home() {

  const dispatch = useDispatch();
  const productState = useSelector(state => state.getAllProductsReducer);
  const {products, error, loading} = productState;
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  return (
    <div className='row justify-content-center'>

      {loading ? (<h1>Loading</h1>) : error ? (<h1>Something went wrong</h1>) : (
        products.map( product => {
          return <div className='col-md-3 m-3' key={product._id}>
              <div>
                  <Product product={product}/>
              </div>
          </div>
        })
      )}
    </div>
  )
}

