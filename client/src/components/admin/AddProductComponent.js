import React, { useState,useEffect } from 'react'
import { addProduct } from '../../actions/productAction';
import AdminPanelComponent from './AdminPanelComponent'
import { useDispatch, useSelector} from 'react-redux';
import LoadingComponent from '../global/LoadingComponent';
import ErrorComponent from '../global/ErrorComponent';
import SuccessComponent from '../global/SuccessComponent';
import { addProductsReducer } from '../../reducers/productReducer';

export default function AddProductComponent() {

  const [name, setname] = useState('');
  const [smallprice, setsmallprice] = useState('');
  const [mediumprice, setmediumprice] = useState('');
  const [largeprice, setlargeprice] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');

  const dispatch = useDispatch();
  const addproductstate = useSelector(state => state.addProductsReducer);
  const {success, error, loading} = addproductstate;
  
  function formHandler(e) {
    e.preventDefault();

    const product = {
      name,
      image,
      description,
      category,
      variants:['small', 'medium', 'large'],
      prices : {
        small: smallprice,
        medium: mediumprice,
        large:largeprice
      }

    }

    dispatch(addProduct(product))
    .then((res) => {
      setname("");
      setsmallprice("");
      setmediumprice("");
      setlargeprice("");
      setimage("");
      setdescription("");
      setcategory("");
    })
    
  }

  return (
    <div>
      <AdminPanelComponent />


      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <h5>Add Product</h5>


          {loading && (<LoadingComponent />)}
          {error && (<ErrorComponent message="Something went wrong" />)}
          {success && (<SuccessComponent message="Product added successfully" />)}

          <form onSubmit={formHandler}>

            <div className="input-group mb-3">
              <div className="input-group-prepend same-width">
                <span className="input-group-text" id="basic-addon3">Name</span>
              </div>
              <input
               type="text"
               className="form-control"
               aria-describedby="basic-addon3" 
               value={name} 
               onChange={e => setname(e.target.value)} 
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend same-width">
                <span className="input-group-text" id="basic-addon3">Small variant price</span>
              </div>
              <input
               type="text"
               className="form-control"
               aria-describedby="basic-addon3" 
               value={smallprice} 
               onChange={e => setsmallprice(e.target.value)} 
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend same-width">
                <span className="input-group-text" id="basic-addon3">Medium variant price</span>
              </div>
              <input
               type="text"
               className="form-control"
               aria-describedby="basic-addon3" 
               value={mediumprice} 
               onChange={e => setmediumprice(e.target.value)} 
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend same-width">
                <span className="input-group-text" id="basic-addon3">Large variant price</span>
              </div>
              <input
               type="text"
               className="form-control"
               aria-describedby="basic-addon3" 
               value={largeprice} 
               onChange={e => setlargeprice(e.target.value)} 
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend same-width">
                <span className="input-group-text" id="basic-addon3">Image</span>
              </div>
              <input
               type="text"
               className="form-control"
               aria-describedby="basic-addon3" 
               value={image} 
               onChange={e => setimage(e.target.value)} 
              />
            </div>
            
            <div className="input-group mb-3">
              <div className="input-group-prepend same-width">
                <span className="input-group-text" id="basic-addon3">Description</span>
              </div>
              <input
               type="text"
               className="form-control"
               aria-describedby="basic-addon3" 
               value={description} 
               onChange={e => setdescription(e.target.value)} 
              />
            </div>
            
            <div className="input-group mb-3">
              <div className="input-group-prepend same-width">
                <span className="input-group-text" id="basic-addon3">Category</span>
              </div>
              <input
               type="text"
               className="form-control"
               aria-describedby="basic-addon3" 
               value={category} 
               onChange={e => setcategory(e.target.value)} 
              />
            </div>

            <button className='btn btn-block btn-primary mt-3' type='submit'> Add Product</button>
          </form>
        </div>
      </div>
    </div>
  )
}
