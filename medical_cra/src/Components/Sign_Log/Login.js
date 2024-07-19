import React, { useState, useEffect } from 'react';
import './signup.css'

import { Link, useNavigate } from 'react-router-dom';
// import { API_URL } from '../../config';

const Login = () => {

  // State variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');

  const navigate = useNavigate(); // Get navigation function from react-router-dom

  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, []);

  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();
    // Send a POST request to the login API endpoint
    // const res = await fetch(`${API_URL}/api/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    // });

    // Parse the response JSON
    // const json = await res.json();
    // if (json.authtoken) {
    //   // If authentication token is received, store it in session storage
    //   sessionStorage.setItem('auth-token', json.authtoken);
    //   sessionStorage.setItem('email', email);

    //   // Redirect to home page and reload the window
    //   navigate('/');
    //   window.location.reload();
    // } else {
    //   // Handle errors if authentication fails
    //   if (json.errors) {
    //     for (const error of json.errors) {
    //       alert(error.msg);
    //     }
    //   } else {
    //     alert(json.error);
    //   }
    // }
  };

  return (
    <div>
        <div className="head-text">
          <h1>Login</h1>
          <div>
            Are you a new member? 
            <span>
              <Link to="/signup" style={{ color: '#2190FF' }}>
                Sign up here
              </Link>
            </span>
          </div>
        </div>

        <form action="" className="sign-form" onSubmit={login}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required
              className="form-control" placeholder="Enter your email"
              value={email} onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input type="password" name="pwd" id="pwd" required
              className="form-control" placeholder="Enter your password"
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>

          <div className="under-text">
            Forgot password?
            <span>
              Reset
            </span>
          </div>
        </form>

    </div>
  )
}

export default Login;
