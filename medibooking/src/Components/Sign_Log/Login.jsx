import React, { useState } from 'react';
import './signup.css'
import { Link, useLocation } from 'react-router-dom';

const Login = () => {

  const [loginData, setLoginData] = useState({email: "", password: ""})
  const [user, setUser] = useState("");

  function handleChange(e) {
    const {name, value} = e.target;
    setLoginData(prev => (
      {...prev, [name]: value}
    ));
    setUser("Welcome back!")
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginData);
    console.log(user)
  }

  const location = useLocation();

  return (
    <div>
        <div className="head-text">
        {location.state?.message && <h3 className='log-notice'>{location.state.message}</h3>}
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

        <form action="" className="sign-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" 
              required
              className="form-control" placeholder="Enter your email"
              value={loginData.email}
              onChange={handleChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input type="password" name="password" id="pwd" 
              required pattern=".{6,}" title="include 6 or more characters"
              className="form-control" placeholder="Enter your password"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn-primary"
            >
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
