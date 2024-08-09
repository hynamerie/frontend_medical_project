import React, { useEffect, useState } from 'react';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("loggedin");
    const storedDoctorData = localStorage.getItem("doctorData");
    const storedAppointmentData = localStorage.getItem("booking");
    // console.log(storedDoctorData);
    // console.log(storedAppointmentData)
    if (storedUser) {
      setIsLoggedIn(true);
    }
    if (storedDoctorData) {
      setDoctorData(JSON.parse(storedDoctorData));
    }
    if (storedAppointmentData) {
      setAppointmentData(JSON.parse(storedAppointmentData));
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  const [showNotify, setShowNotify] = useState(true);
  const handleClose = () => {
    setShowNotify(false);
  }

  return (
    <div>
      {children}
      {showNotify ? (
        <>
        {isLoggedIn && appointmentData && (
          <>
            <div className="notify">
              <div>
                <h4>Appointment Details</h4>
                <p className="notify-message">
                  <strong>Doctor:</strong> <span>{doctorData?.[0]}</span>
                  <br />
                  <strong>Specialty:</strong> <span>{doctorData?.[1]}</span>
                  <br />
                  <strong>Patient name:</strong> <span>{appointmentData?.name}</span>
                  <br />
                  <strong>Phone number:</strong> <span>{appointmentData?.phone}</span>
                  <br />
                  <strong>Date of appointment:</strong> <span>{appointmentData?.date}</span>
                  <br />
                  <strong>Time slot:</strong> <span>{appointmentData?.time}</span>
                </p>
              </div>
              <button onClick={handleClose}>X</button>
            </div>
          </>
        )}
        </>
      ) : ('')}
    </div>
  );
};

export default Notification;