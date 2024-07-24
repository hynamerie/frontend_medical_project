import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Auth() {

  const isLogined= false;
  if (!isLogined) {
    return (
      <Navigate 
        to="./login"
      />
    )
  }
}
