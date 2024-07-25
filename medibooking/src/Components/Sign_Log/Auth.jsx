import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Auth() {
  // const isLogined = true;
  const isLogined = localStorage.getItem("loggedin");
  
  if (!isLogined) {
    return (
      <Navigate 
        to="./login"
        state={{message: "Please log in first!"}}
        replace
      />
    )
  }
}
