import React from 'react'

export default function Footer() {
  const footStyle = {
    color: 'white',
    backgroundColor: 'rgba(2, 2, 2, 0.5)',
    height: "5vh",
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
      <p style={{marginRight: "1%"}}>
        Stay Healthy Medical Services.
      </p>
    </div>
  )
}
