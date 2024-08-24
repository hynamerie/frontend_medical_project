import React from 'react'

export default function Footer() {
  const footStyle = {
    color: 'white',
    backgroundColor: '#5113D6',
    height: "5vh",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100vw"
    };
    

  return (
    <div style={footStyle}>
      <p style={{marginLeft: "5%"}}>
      Front-end Medical Appointment Booking Project 
      </p>
    </div>
  )
}
