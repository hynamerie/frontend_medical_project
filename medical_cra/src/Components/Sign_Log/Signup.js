import React, { useState } from 'react';
import './signup.css'

import { Link, useNavigate } from 'react-router-dom';
// import { API_URL } from '../../config';

const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

    //     // API Call to register user
    //     const response = await fetch(`${API_URL}/api/auth/register`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             name: name,
    //             email: email,
    //             password: password,
    //             phone: phone,
    //         }),
    //     });

    //     const json = await response.json(); // Parse the response JSON

    //     if (json.authtoken) {
    //         // Store user data in session storage
    //         sessionStorage.setItem("auth-token", json.authtoken);
    //         sessionStorage.setItem("name", name);
    //         sessionStorage.setItem("phone", phone);
    //         sessionStorage.setItem("email", email);

    //         // Redirect user to home page
    //         navigate("/");
    //         window.location.reload(); // Refresh the page
    //     } else {
    //         if (json.errors) {
    //             for (const error of json.errors) {
    //                 setShowerr(error.msg); // Show error messages
    //             }
    //         } else {
    //             setShowerr(json.error);
    //         }
    //     }
    };

    return (
      <>
      <div class="head-text">
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
      <form action="" className="sign-form" method="POST" onSubmit={register}>
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

        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" required
            class="form-control" placeholder="Enter your name"
            value={name} onChange={(e)=>setName(e.target.value)}
            />
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="tel" name="phone" id="phone" required
            class="form-control" placeholder="Enter your phone number"
            value={phone} onChange={(e)=>setPhone(e.target.value)}
            />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" 
            className="form-control" placeholder="Enter your email" aria-describedby="helpId"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          {/* {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>} */}
        </div>

        <div class="form-group">
          <label for="pwd">Password</label>
          <input type="password" name="pwd" id="pwd" required
          class="form-control" placeholder="Enter your password"
          />
        </div>

        <div class="btn-group">
          <button type="submit" class="btn-primary">Submit</button>
          <br/>
          <button type="reset" class="btn-danger">Reset</button>
        </div>

      </form>
      </>
    );
}

export default Sign_Up;