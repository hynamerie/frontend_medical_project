import React from 'react';
import './DoctorCard.css';
import Popup from 'reactjs-popup';

const DoctorCard = ({ name, speciality, experience, ratings }) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-img">
          <i className="fa fa-user-md" aria-hidden="true"></i>        
        </div>
        <div className="card-details">
          <div className="detail-name">{name}</div>
          <div className="detail-speciality">{speciality}</div>
          <div className="detail-experience">{experience} years experience</div>
          <div className="detail-rating">Ratings: {ratings}</div>
        </div>
      </div>
      <div >
        <Popup trigger={
          <div className='book-btn'>
            <button >                    
              <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
          </div>
        }>
          {close => (
            <div className='popup-container'>
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="popup-card">
                <div className='card-img'>
                <i className="fa fa-user-md" aria-hidden="true"></i>        
                </div>
                <div className="card-details">
                  <div className="detail-name">{name}</div>
                  <div className="detail-speciality">{speciality}</div>
                  <div className="detail-experience">{experience} years experience</div>
                  <div className="detail-rating">Ratings: {ratings}</div>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default DoctorCard