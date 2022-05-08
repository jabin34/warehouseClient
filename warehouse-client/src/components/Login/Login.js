import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //console.log(email,password);
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://pacific-tor-79361.herokuapp.com/login",
      { email }
    );
    console.log(data);
    localStorage.setItem("token", data.token);
    navigate(from, { replace: true });
  };
  const sendPasswordReset = async () => {
    const email = emailRef.current.value;
    if (!email) {
      toast("Enter an email");
    } else {
      await sendPasswordResetEmail(emailRef.current.value);
      toast("Sent email");
    }
  };
  return (
    <div className="container w-70 mx-auto p-4">
      <h3 className="text-center">Please Login Here</h3>
      <Form className="w-100 px-5" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          className="custom-button border-0 rounded text-center px-5"
          type="submit"
        >
          Login
        </Button>
        <p>
          Forgot password?
          <Button
            variant="link"
            onClick={() => {
              sendPasswordReset();
            }}
          >
            Reset Password
          </Button>
        </p>
        <p>
          Don't have an account?
          <span className="text-danger">
            <Link to="/registration">Register here</Link>
          </span>
        </p>
        <p style={{ color: "red", marginLeft: "20px" }}>{error?.message}</p>
      </Form>
      <div className=" px-5">
        <h6>OR</h6>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
