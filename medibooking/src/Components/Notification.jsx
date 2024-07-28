import React, { useEffect, useState } from 'react';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("loggedin");
    const storedDoctorData = localStorage.getItem("doctorData");
    const storedAppointmentData = localStorage.getItem("booking");

    console.log(storedDoctorData);
    console.log(storedAppointmentData)

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

  return (
    <div>
      {children}
      {isLoggedIn && (
        <>
          <div className="notify">
            <div className="notify-content">
              <h3 className="notify-title">Appointment Details</h3>
              <p className="notify-message">
                <strong>Doctor:</strong> {doctorData?.[0]}
                <br />
                <strong>Specialty:</strong> {doctorData?.[1]}
                <br />
                <strong>Patient name:</strong> {appointmentData?.name}
                <br />
                <strong>Phone number:</strong> {appointmentData?.phone}
                <br />
                <strong>Date of appointment:</strong> {appointmentData?.date}
                <br />
                <strong>Time slot:</strong> {appointmentData?.time}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;