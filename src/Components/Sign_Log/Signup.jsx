import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'

import { Link } from 'react-router-dom';

const Sign_Up = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
      console.log("Name: " + name, "---Email: " + email, "---Phone: " + phone, password);
      sessionStorage.setItem("loggedin", true);
      sessionStorage.setItem("user", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("pwd", password);
      navigate("/", {replace: true});
      window.location.reload();
    }

    return (
      <div className='login-page'>
        <div className="logo" id="logo">
          <Link to="/">
            StayHealthy
            <i className="fa fa-user-md" aria-hidden="true"></i>
          </Link>
        </div>
        <div className='login-form'>
        <div className="head-text">
        <h1>Sign Up</h1>
        <div>
          Already a member? 
          <span>
            <Link to="/login" style={{ color: '#2190FF' }}>
              Login
            </Link>
          </span>
        </div>
      </div>
      <form action="" className="sign-form" onSubmit={handleSubmit}>
        <div className="select-group">
          <label htmlFor="role">Role</label>
          <div className="select-body">
            <select name="role" id="role" aria-placeholder="Select a role">
              <option>Select a role</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
            <div className="select-icon">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>  
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required
            className="form-control" placeholder="Enter your name"
            value={name} onChange={(e)=>setName(e.target.value)}
            />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" 
            // pattern='[0-9]{10}' title='must include 10 numbers'
            className="form-control" placeholder="Enter your phone number"
            value={phone} onChange={(e)=>setPhone(e.target.value)}
            />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required
            className="form-control" placeholder="Enter your email" aria-describedby="helpId"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <input type="password" name="password" id="password" required
            className="form-control" placeholder="Enter your password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="btn-group">
          <button type="submit" className="btn-primary"
            >Submit</button>
          <br/>
          <button type="reset" className="btn-danger">Reset</button>
        </div>

      </form>
      </div>
      </div>
    );
}

export default Sign_Up;