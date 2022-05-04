import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword,user,loading, error, ] = useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
 
  const from = location.state?.from?.pathname || '/';
  if(user){
    navigate(from,{replace:true});
}
  const handleLogin = (event) =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email,password);
    signInWithEmailAndPassword(email, password);
   
  }
    return (
      <div>
        <h3>Login here</h3>
        <Form className="container w-50 mx-auto p-5" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>Don't have an account?<span className='text-danger'><Link to='/registration'>Register here</Link></span></p>
        <p style={{color:"red",marginLeft:"20px"}}>{error?.message }</p>
      </Form>
      </div>
        
    );
};

export default Login;