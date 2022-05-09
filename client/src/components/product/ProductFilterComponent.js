import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../actions/productAction';

export default function ProductFilterComponent() {

  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState('');
  const [category, setCategory] = useState('all');

  return (
    <div>
        <div className='row justify-content-center shadow p-3 mb-5 bg-body rounded'>
            <div className='col-md-3'>
              <input 
                value={searchKey} 
                onChange={(e) => setSearchKey(e.target.value)} 
                type='text' 
                className='form-control w-100' 
                placeholder='search'
              />
            </div>

            <div className='col-md-3'>
              <select 
                name='' 
                id='' 
                className='form-control w-100' 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All</option>
                <option value="veg">Veg</option>
                <option value="nonveg">Non Veg</option>
              </select>
            </div>
            
            <div className='col-md-3'>
              <button className='btn btn-primary w-100' onClick={() => dispatch(filterProducts(searchKey, category))}> Filter </button>
            </div>
        </div>
    </div>
  )
}
