import React, { useRef, useState } from 'react';
import './Registration.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Registration = () => {
    const navigate = useNavigate();
  const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
   const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');

  const handleCreateUser = (event) =>{
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(name,email,password);
    createUserWithEmailAndPassword(email,password);
    navigate('/home');
  }
    return (
        <div className='container'>
        <Form className="container w-50 mx-auto p-5" onSubmit={handleCreateUser}>
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
        <Button variant="primary" type="submit">
         Register
        </Button>
        <p>Already have an account?<span className='text-danger'><Link to='/login'>Login here</Link></span></p>
      </Form>
        </div>
    );
};

export default Registration;