import React, { useState, useEffect } from 'react'
import { addProduct, getProductById, updateProduct } from '../../actions/productAction';
import AdminPanelComponent from './AdminPanelComponent'
import { useDispatch, useSelector} from 'react-redux';
import LoadingComponent from '../global/LoadingComponent';
import ErrorComponent from '../global/ErrorComponent';
import SuccessComponent from '../global/SuccessComponent';
import { getProductByIdReducer, updateProductReducer } from '../../reducers/productReducer';
import { useParams } from "react-router-dom";

export default function EditProductComponent({match}) {

  const [name, setname] = useState('');
  const [smallprice, setsmallprice] = useState('');
  const [mediumprice, setmediumprice] = useState('');
  const [largeprice, setlargeprice] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');

  const dispatch = useDispatch();
  const getproductstate = useSelector(state => state.getProductByIdReducer);
  const updateproductstate = useSelector(state => state.updateProductReducer);
  const { product, error, loading} = getproductstate;
  const { updateSuccess, updateError, updateLoading} = updateproductstate;
  
  let { productId } = useParams(); 
  useEffect(() => {
    if(!product || product._id !== productId) dispatch(getProductById(productId))
    else{
      setname(product.name)
      setsmallprice(product.prices[0]['small'])
      setmediumprice(product.prices[0]['medium'])
      setlargeprice(product.prices[0]['large'])
      setimage(product.image)
      setdescription(product.description)
      setcategory(product.category)
    }

      
  }, [product, dispatch])


  function formHandler(e) {
    e.preventDefault();

    const updatedproduct = {
      _id: productId,
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


    dispatch(updateProduct(updatedproduct))
    
  }

  return (
    <div>
      <AdminPanelComponent />


      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <h5>Edit Product</h5>


          {loading && (<LoadingComponent />)}
          {error && (<ErrorComponent message="Something went wrong" />)}
          {updateLoading && (<LoadingComponent />)}
          {updateError && (<ErrorComponent message="Something went wrong" />)}
          {updateSuccess && (<SuccessComponent message="Product updated successfully" />)}

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

            <button className='btn btn-block btn-primary mt-3' type='submit'> Update Product</button>
          </form>
        </div>
      </div>
    </div>
  )
}
