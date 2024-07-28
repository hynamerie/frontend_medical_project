import "./navBar.css";
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const token = sessionStorage.getItem("loggedin");

  function logOut() {
    sessionStorage.removeItem("loggedin");
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="header">
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
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/doctor-booking">Appointments</Link>
          </li>
          <li className="link">
            <Link to="/review">Review</Link>
          </li>
        </ul>
        {token ? (
          <>
          <ul>
            <li className=" link dropdown-pf" id="profile">
              <Link to="/profile" className="dropbtn">Profile</Link>
              <ul className="dropdown-pf-menu" id="dropdown-pf">
                <li>
                  <a href="#">Reports</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
              </ul>
            </li>
          </ul>
          <Link to="/"><button onClick={logOut}>Log out</button></Link>  
          </>
        ) : (
          <>
          <Link to="./signup"><button>Sign Up</button></Link>
          <Link to="./login"><button>Log In</button></Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;