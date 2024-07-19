import React, { useState } from 'react';
import './signup.css'

import { Link } from 'react-router-dom';

const Login = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');

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

        <form action="" className="sign-form">
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
