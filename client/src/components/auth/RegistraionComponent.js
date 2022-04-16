import React, { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { registerCustomer } from '../../actions/customerAction';

export default function RegistraionComponent() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch(); 

  function register (){
    if(password != confirmPassword){
      alert('password dont match')
    }
    else{
      const customer = {
        name,
        email,
        password
      }
      dispatch(registerCustomer(customer));
    }
  }
  
  return (
    <div>
      <div className='row justify-content-center'>
        <h2 className='mb-5 fw-bolder'>Registration</h2>
        <div className='col-md-5'>

          <div className="form-floating mb-3">
            <input 
              required="required" 
              type="name" 
              className="form-control fw-bold" 
              id="inputName" 
              placeholder="Name" 
              value={name}
              onChange={ e => setName(e.target.value)}
            />
            <label htmlFor ="inputName" className="text-dark fw-bold">Name</label>
          </div>
          
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

          <div className="form-floating mb-3">
            <input 
              required="required" 
              type="password" 
              className="form-control" 
              id="inputConfirmPassword" 
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={ e => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="inputConfirmPassword" className="text-dark fw-bold">Confirm Password</label>
          </div>

          <div className="d-grid gap-2">
            <button 
              className='btn btn-outline-primary btn-block fw-bolder'
              type='submit'
              onClick={register}
            >REGISTER</button> 
          </div>


        </div>
      </div>
    </div>
  )
}
