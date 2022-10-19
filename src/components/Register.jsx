import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';
import account from '../person-circle.svg';

const Register = () => {

    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const changeHandler = (event) => {
        setEmployee({
            ...employee,
            [event.target.name]:event.target.value
        })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8082/employee/register`,{...employee}).then(
            (response) => {
                console.log(response.data);
                // console.log(response.status);
                // console.log(response.headers);
                // console.log(response.config);
                navigate('/login')
                
            }
        ).catch(
            (error) => {
                console.log(error.response);
            }
        )
        // console.log(employee);
        // this.agree.terms = true;
        // console.log(this.agree.terms);

    }

    //destructiring
    const { firstName, lastName, email, password } = employee;

    return (
        <div className='bgimage'>
            <div className="row ">
                <div className=" col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 offset-1 text-white">
                    <div className="card form-card bg-white">

                        <div className="card-body">
                            {/* <i className="card-Title mt-4 col-8 offset-2 text-primary bi bi-person-circle text-dark">Inmage</i> */}
                            <div id="account"><img src={account} alt="signup" className="account mt-3 img-thumbnail"></img></div>
                            {/* <div className='card-Title mt-4 col-8 offset-2 text-primary display-5'>Register</div> */}
                            <form className='mt-1 col-8 offset-2 pb-4' onSubmit={submitHandler}>
                                <div className='mb-1    '>
                                    <label htmlFor='firstName' className='col-form-label'>First Name </label>
                                    <div className=''>
                                        <input className='form-control '
                                            type="text"
                                            value={firstName}
                                            onChange={changeHandler}
                                            name="firstName"
                                            id="firstName" />
                                    </div>
                                </div>
                                <div className='row mb-1'>
                                    <label htmlFor='lastName' className=' col-form-label'>Last Name </label>
                                    <div className=''>
                                        <input className='form-control'
                                            type="text"
                                            value={lastName}
                                            onChange={changeHandler}
                                            name="lastName"
                                            id="lastName" />
                                    </div>
                                </div>
                                <div className='row mb-1'>
                                    <label htmlFor='email' className=' col-form-label'> Email </label>
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
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                        <label className="form-check-label text-dark" htmlFor="invalidCheck2">
                                            Agree to terms and conditions
                                        </label>
                                    </div>
                                </div>
                                <button className='btn btn-primary col-12 px-4 mt-3 mb-2 text-bold p-2' value="submit" type='submit'>Register</button>
                                <small className='text-dark fw-bold pb-4'>Already have an account ? </small><Link to='/login' className='text-primary bluetext'>Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-6 ">
                    {/* <img src={bgimage} className="img-fluid" alt="Responsive image"/> */}
                </div>
            </div>
        </div>
    )
}

export default Register;