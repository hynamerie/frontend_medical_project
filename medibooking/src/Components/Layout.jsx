import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Header from './Navbar/Header'

export default function Layout() {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      
      <Outlet />
    </div>
  )
}
