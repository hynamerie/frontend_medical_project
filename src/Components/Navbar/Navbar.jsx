import "./navBar.css";
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";

function Navbar() {
  const token = sessionStorage.getItem("loggedin");

  function logOut() {
    // sessionStorage.removeItem("loggedin");
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
  }

  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="header">
      <div className="logo" id="logo">
        <Link to="/">
          StayHealthy
          <i className="fa fa-user-md" aria-hidden="true"></i>
        </Link>
      </div>
      <input type="checkbox" id="check" checked={isChecked} onChange={checkHandler}/>
      <label htmlFor="check" className="side_menu">
        <i className="fa fa-times fa fa-bars" id="menu-icon"></i>
        <i className="fa fa-times" aria-hidden="true" id="close-icon"></i>
      </label> 
      <nav className="navbar">
        <ul>
          <li className="link">
            <a href="/" onClick={checkHandler}>Home</a> 
            {/* INCLUDE "A" TAG TO SHOW NOTIFICATIONS????? */}
          </li>
          <li className="link">
            <Link to="/services" onClick={checkHandler}>Services</Link>
          </li>
          <li className="link">
            <Link to="/blog" onClick={checkHandler}>Health Blog</Link>
          </li>
        </ul>
        {token ? (
          <>
          <ul>
            <li className=" link dropdown-pf" id="profile">
              Profile
              <ul className="dropdown-pf-menu" id="dropdown-pf">
                <li><Link to="/review">Review</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/settings">Settings</Link></li>
              </ul>
            </li>
          </ul>
          <Link to="/"><button onClick={logOut}>Log out</button></Link>  
          </>
        ) : (
          <>
          <Link to="./signup" ><button>Sign Up</button></Link>
          <Link to="./login" onClick={checkHandler}><button>Log In</button></Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;