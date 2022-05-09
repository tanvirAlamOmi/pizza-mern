import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductComponent from '../components/product/ProductComponent';
import { getAllProducts } from '../actions/productAction';
import LoadingComponent from '../components/global/LoadingComponent';
import ErrorComponent from '../components/global/ErrorComponent';
import ProductFilterComponent from '../components/product/ProductFilterComponent';

export default function MenuPage() {

  const dispatch = useDispatch();
  const productState = useSelector(state => state.getAllProductsReducer);
  const {products, error, loading} = productState;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  return (
    
    <div className='row justify-content-center'>
      <div className='container-fluid'>
        <ProductFilterComponent />
      </div>

      {loading ? (<LoadingComponent />) : error ? <ErrorComponent message={"something went wrong"} /> : (
        products.map( product => {
          return <div className='col-md-3 m-3' key={product._id}>
              <div>
                  <ProductComponent product={product}/>
              </div>
          </div>
        })
      )}
    </div>
  )
}

