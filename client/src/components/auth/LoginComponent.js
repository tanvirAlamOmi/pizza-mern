import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginCustomer } from '../../actions/customerAction';
import LoadingComponent from '../global/LoadingComponent'
import ErrorComponent from '../global/ErrorComponent'

export default function LoginComponent() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginState = useSelector( state => state.loginCustomerReducer );
  const {loading, error} = loginState;

  const dispatch = useDispatch()

  useEffect( () => {
    if(localStorage.getItem('currentCustomer')) window.location.href = '/'    
  }, [])

  function login (){
    const customer = {
      email,
      password
    }
    dispatch(loginCustomer(customer));
  }

  const formHtml = (
    <div>

      <div className="form-floating mb-3">
        <input 
          required="required" 
          type="email" 
          className="form-control" 
          id="inputEmail" 
          placeholder="Email" 
          value={email}
          onChange={ e => setEmail(e.target.value)}
        />
        <label htmlFor="inputEmail" className="text-dark fw-bold">Email</label>
      </div>

      <div className="form-floating mb-3">
        <input 
          required="required" 
          type="password" 
          className="form-control" 
          id="inputPassword" 
          placeholder="Password" 
          value={password}
          onChange={ e => setPassword(e.target.value)}
        />
        <label htmlFor="inputPassword" className="text-dark fw-bold">Password</label>
      </div>

      <div className="d-grid gap-2">
        <button 
          className='btn btn-outline-primary btn-block fw-bolder'
          type='submit'
          onClick={login}
        >LOGIN</button> 
        <p>Don't have an acccount? <a href='/registration' className='text-info'>Register here</a></p> 

      </div>

    </div>
  )

  return (
    
    <div>
      <div className='row justify-content-center'>
        <h2 className='mb-5 fw-bolder'>Log in</h2>
        <div className='col-md-5'>
          
          {error && (<ErrorComponent message={error.response.data.message} />)}
          {loading ? <LoadingComponent /> : formHtml}

        </div>
      </div>
    </div>
  )
}
