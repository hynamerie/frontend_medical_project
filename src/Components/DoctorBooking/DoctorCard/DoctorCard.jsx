import React, {useState} from 'react';
import './DoctorCard.css';
import Popup from 'reactjs-popup';
import { v4 as uuidv4 } from 'uuid';
// import { useNavigate } from 'react-router-dom';

const DoctorCard = ({name, speciality, experience, ratings, image}) => {
  

  const [bookingData, setBookingData] = useState({namePatient: "", phonePatient: "", date: "", timeslot: ""})
  const [appointments, setAppointments] = useState([]);

  // const navigate = useNavigate();

  function handleChange(e) {
    const {name, value} = e.target;
    setBookingData(prev => (
      {...prev, [name]: value}
    ));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Doctor: " + name, "| specialty: " + speciality, bookingData);
    
    const newAppointment = {
      id: uuidv4(),
      ...bookingData,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);

    console.log("Booking ID: "+ newAppointment.id)
    
    //Set data storages for Notifications
    const appointmentData = {
      name: newAppointment.namePatient,
      phone: newAppointment.phonePatient,
      date: newAppointment.date,
      time: newAppointment.timeslot
    }
    localStorage.setItem("booking", JSON.stringify(appointmentData));

    const doctorData = [name, speciality];
    localStorage.setItem("doctorData", JSON.stringify(doctorData));

    // navigate("/");
    // window.location.reload;
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((booking) => booking.id !== appointmentId);
    setAppointments(updatedAppointments);

    localStorage.clear();
  };

  return (
    <div className='card-container'>

{/* DOCTOR SEARCHED CARDS */}
      <div className="card-detail-container">
        <div className="card-img">
          <img src={image} alt="" />
        </div>
        <div className="card-details">
          <div className="detail-name">{name}</div>
          <div className="detail-speciality">{speciality}</div>
          <div className="detail-experience">{experience} years experience</div>
          <div className="detail-rating">Ratings: {ratings}</div>
        </div>
      </div>

{/* BOOKING BUTTON */}
      <div >
        <Popup trigger={
          <div className={`book-btn ${appointments.length > 0 ? 'cancel-btn' : ''}`}>
            <button >  
              {appointments.length > 0 ? (
                  <div>Cancel Appointment</div>
                ) : (
                  <div>Book Appointment</div>
                )}                  
              <div>No Booking Fee</div>
            </button>
          </div>
        }
        >
          {(close) => (
            <div className='popup-container'>
              <div className="popup-card">
  {/* DOCTOR INFO */}
                <div className='card-img'>
                  <img src={image} alt="" />
                </div>
                <div className="card-details">
                  <div className="detail-name">{name}</div>
                  <div className="detail-speciality">{speciality}</div>
                </div>

                {appointments.length > 0 ? (
  // APPOINTMENT DETAILS
                  <div>
                    <h3>Appointment Booked!</h3>
                    {appointments.map((appointment) => (
                      <div className="card-details" key={appointment.id}>
                        <p><strong>Name: </strong> {appointment.namePatient}</p>
                        <p><strong>Phone number: </strong> {appointment.phonePatient}</p>
                        <p><strong>Date of appointment: </strong>{appointment.date}</p>
                        <p><strong>Time slot: </strong>{appointment.timeslot}</p>
                        <div className="btn-group" >
                        <button className='btn-danger' style={{width: "200px"}}
                          onClick={() => handleCancel(appointment.id)}
                        >
                          Cancel Appointment
                        </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
// BOOKING FORM TO MAKE AN APPOINTMENT
                <form action=''className="sign-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <h4 style={{margin: "0", fontSize: "20px"}}>Make an appointment</h4>
                    <br />
                  </div>
                  <div className="form-group">
                    <label htmlFor="namePatient">Patient</label>
                    <input
                      type="text" name='namePatient' placeholder="Your name"
                      value={bookingData.namePatient}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phonePatient">Phone</label>
                    <input
                      type="tel" name='phonePatient' placeholder="Your phone number"
                      value={bookingData.phonePatient}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" name='date'
                      value={bookingData.date} onChange={handleChange}
                    />
                  </div>
                  <div className="select-group">
                    <label htmlFor="timeslot">Time</label>
                    <div className="select-body">
                      <select name="timeslot" aria-placeholder="Select a time slot"
                        value={bookingData.timeslot} onChange={handleChange}
                      >
                        <option>Select a time slot</option>
                        <option value="9 AM">9:00 AM</option>
                        <option value="10 AM">10:00 AM</option>
                        <option value="2 PM">2:00 PM</option>
                        <option value="3 PM">3:00 PM</option>
                      </select>
                      <div className="select-icon">
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </div>  
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="submit" className="btn-primary" >Book Now</button>
                  </div>
                </form>
                )}
              </div>

  {/* CLOSE POPUP */}
              <button className="close" onClick={close}>
                &times;
              </button>

            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default DoctorCard