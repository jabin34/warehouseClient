import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <Form className="container w-50 mx-auto p-5">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>Don't have an account?<span className='text-danger'><Link to='/registration'>Register here</Link></span></p>
      </Form>
    );
};

export default Login;