import React from 'react'

export default function Footer() {
  const footStyle = {
    color: 'white',
    backgroundColor: 'rgba(2, 2, 2, 0.5)',
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100vw"
    };
    

  return (
    <div style={footStyle}>
      <p style={{marginRight: "1%", fontSize: "14px", fontWeight: "200", textAlign: "right"}}>
        StayHealthy Medical Services. Developed by Hynamerie | IBM Front-end Developer.
      </p>
    </div>
  )
}
