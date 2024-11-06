import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import Footer from "../Navbar/Footer";

function Landing_Page() {
  return (
    <section className="hero-section">
    <div>
      <div data-aos="fade-up" className="flex-hero">
        <h1>
          Your Health<br/>
          <span className="text-gradient">
            Our Responsibility
          </span>
        </h1>
        <div className="blob-cont">
            <div className="blue blob"></div>
        </div>
        <div className="blob-cont">
            <div className="blue1 blob"></div>
        </div>
        <p>
        We focus on prevention and specialty services to enhance your well-being. Our goal is to provide accessible, coordinated, and high-quality healthcare every step of the way.
        </p>
        <Link to="/services">
          <button className="button">Get Started</button>
        </Link>              
      </div>

    </div>
    <Footer/>
  </section>

  )
};

export default Landing_Page;