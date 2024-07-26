import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, speciality, experience, ratings }) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-image">
          <i className="fa fa-user-md" aria-hidden="true"></i>        
        </div>
        <div className="card-details">
          <div className="detail-name">{name}</div>
          <div className="detail-speciality">{speciality}</div>
          <div className="detail-experience">{experience} years experience</div>
          <div className="detail-rating">Ratings: {ratings}</div>
        </div>
        {/* for reference  */}
        <div className='book-btn'>
          <button >                    
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard