import React, { useState } from 'react';
import './signup.css'

import { Link } from 'react-router-dom';

const Sign_Up = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
      e.preventDefault();
      console.log("Name: " + name, "---Email: " + email, "---Phone: " + phone, password);
    }

    return (
      <>
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
      <form action="" className="sign-form">
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
          <input type="tel" name="phone" id="phone" required
            className="form-control" placeholder="Enter your phone number"
            value={phone} onChange={(e)=>setPhone(e.target.value)}
            />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" 
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
          <button type="submit" className="btn-primary" onClick={handleSubmit}
            >Submit</button>
          <br/>
          <button type="reset" className="btn-danger">Reset</button>
        </div>

      </form>
      </>
    );
}

export default Sign_Up;