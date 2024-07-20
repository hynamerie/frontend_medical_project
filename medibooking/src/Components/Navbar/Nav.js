import "./navBar.css";
import React from 'react';
import { Link } from "react-router-dom";
// import { useAuth } from "../Sign_Log/auth";

function Navbar() {

  // const auth = useAuth();

  return (
    <header className="header">
      <div className="logo" id="logo">
        <a href="/">
          StayHealthy
          <i className="fa fa-user-md" aria-hidden="true"></i>
        </a>
      </div>
      <input type="checkbox" id="check"/>
      <label htmlFor="check" className="side_menu">
        <i className="fa fa-times fa fa-bars" id="menu-icon"></i>
        <i className="fa fa-times" aria-hidden="true" id="close-icon"></i>
      </label> 
      <nav className="navbar">
        <ul>
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">Appointments</a>
          </li>
          <li className="link">
            <a href="#">Health Blog</a>
          </li>
          <li className="link">
            <a href="#">Review</a>
          </li>
          <li className=" link dropdown" id="profile">
            <a className="dropbtn">Profile</a>
            <ul className="dropdown-menu" id="dropdown-pf">
              <li>
                <a href="#">Reports</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="btn-log">
          <button>
            <Link to="/signup">Sign Up</Link>
          </button>
          </div>
          {/* {
            !auth.user &&           
            <div>
            <button>
              <Link to="/login">Login</Link>
            </button>
            </div>
  
          } */}
      </nav>
    </header>
  );
};

export default Navbar;