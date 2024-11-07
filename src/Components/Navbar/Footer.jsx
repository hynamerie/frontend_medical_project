import React from 'react'

export default function Footer() {
  const footStyle = {
    color: 'white',
    backgroundColor: 'rgba(2, 2, 2, 0.5)',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100vw",
    padding: "10px 0"
    };
    

  return (
    <div style={footStyle}>
      <p style={{marginLeft: "1%", fontSize: "15px", fontWeight: "250", textAlign: "left"}}>
        StayHealthy Medical Services.
      </p>
      <p style={{marginRight: "1%", fontSize: "15px", fontWeight: "250", textAlign: "right"}}>
         Developed by Hynamerie | IBM Front-end Developer.
      </p>
    </div>
  )
}
