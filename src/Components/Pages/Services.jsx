import React from 'react';
import imgDoctor from "../../assets/bro.png"
import imgConsult from "../../assets/pana.png"
import imgCheck from "../../assets/rafiki.png"
import imgTip from "../../assets/cuate.png"
import "./Pages.css";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='service-page'>
      <h2>Best Services</h2>
      <p>
        Love yourself enough to live a healthy style.
      </p>
      <div className="service-layout">
        <Link to="/doctor-booking">
          <div className="service-card-container">
            <div className="img-box">          
              <img src={imgDoctor} alt="Book an Appointment" />
            </div>
            <div className='service-name'>Book an Appointment</div>
          </div>
        </Link>
        <Link to="/doctor-booking/2">
          <div className="service-card-container">
          <div className="img-box">          
            <img src={imgConsult} alt="Instant Consultation" />
          </div>
            <div className='service-name'>Instant Consultation</div>
          </div>
        </Link>
        <Link to="/checkup">
          <div className="service-card-container">
          <div className="img-box">          
            <img src={imgCheck} alt="Self Checkup" />
          </div>
            <div className='service-name'>Self Checkup</div>
          </div>
        </Link>
        <Link to="/blog">
          <div className="service-card-container">
          <div className="img-box">          
            <img src={imgTip} alt="Health Tips & Guidance" />
          </div>
            <div className='service-name'>Health Tips & Guidance</div>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Services