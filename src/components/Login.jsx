import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../utils/Auth';
import { useLocation, useNavigate } from 'react-router';
import account from '../person-circle.svg';
import { Link } from 'react-router-dom';

const Login = () => {

  const auth = useAuth();
  const [employee, setEmployee] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/dashboard'

  const changeHandler = (event) => {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8082/employee/login`, employee).then(
      (response) => {
        // console.log(response.data);
        auth.login(response.data);
        auth.checkactive(true);
        navigate(redirectPath, { replace: true });
      }
    ).catch((error) => {
      console.log(error.response);
    })
  }

  //destructiring
  const { email, password } = employee;

  return (
    <div className='bgimage' >
      <div className="row mt-5">
        <div className=" col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 offset-1 text-white">
          <div className="card form-card bg-white">

            <div className="card-body">
              {/* <i className="card-Title mt-4 col-8 offset-2 text-primary bi bi-person-circle text-dark">Inmage</i> */}
              <div id="account"><img src={account} alt="signup" className="account mt-3 img-thumbnail"></img></div>
              {/* <div className='card-Title mt-4 col-8 offset-2 text-primary display-5'>Register</div> */}
              <form className='mt-1 col-8 offset-2 pb-4' onSubmit={submitHandler}>
                <div className='row mb-1'>
                  <label htmlFor='email' className=' col-form-label'> Email ID </label>
                  <div className=''>
                    <input className='form-control '
                      type="email"
                      value={email}
                      onChange={changeHandler}
                      name="email"
                      id="email" />
                  </div>
                </div>
                <div className='row mb-2'>
                  <label htmlFor='password' className=' col-form-label'> Password </label>
                  <div className=''>
                    <input className='form-control '
                      type="password"
                      value={password}
                      onChange={changeHandler}
                      name="password"
                      id="password" />
                  </div>
                </div>
                <button className='btn btn-primary col-12 px-4 mt-3 mb-2 text-bold p-2' value="login" type='submit'>Login</button>
                <small className='text-dark fw-bold pb-4'>Dont't have an account ? </small><Link to='/register' className='text-primary bluetext'>SignUp</Link>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 ">
          {/* <img src={bgimage} className="img-fluid" alt="Responsive image"/> */}
        </div>
      </div>
    </div>

    // <div>
    //   <form onSubmit={submitHandler}>
    //     <div>
    //       <label htmlFor='email' >Email ID </label>
    //       <input type='email'
    //         value={email}
    //         onChange={changeHandler}
    //         name='email'
    //         id='email'
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor='password' >Password </label>
    //       <input type='password'
    //         value={password}
    //         onChange={changeHandler}
    //         name='password'
    //         id='password'
    //       />
    //     </div>
    //     <input type='submit' value="login"/>
    //   </form>
    // </div>
  )
}

export default Login
