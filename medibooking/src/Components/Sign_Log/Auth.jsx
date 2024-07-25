import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Auth() {
  // const isLogined = false;
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

  return <Outlet/>
}
