import React, { useRef, useState } from 'react';
import './Registration.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Registration = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');
    const from = location.state?.from?.pathname || '/';
    if(user){
      navigate(from,{replace:true});
  }
  const handleCreateUser = (event) =>{
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //console.log(name,email,password);
    createUserWithEmailAndPassword(email,password);
  }
    return (
        <div className='container  w-70 mx-auto pt-3'>
            <h3 className='text-center'>Register Here</h3>
        <Form className=" px-5" onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef}  type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button  className='custom-button border-0 rounded text-center px-5' type="submit">
         Register
        </Button>
        <p>Already have an account?<span className='text-danger'><Link to='/login'>Login here</Link></span></p>
        <p style={{color:"red",marginLeft:"20px"}}>{error?.message }</p>
      </Form>
      <div className=" px-5" >
      <h6>OR</h6>
     <SocialLogin/>
      </div>
        </div>
    );
};

export default Registration;