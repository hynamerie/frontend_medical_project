import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Header({children}) {

  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);
  
  useEffect(() => {
    // console.log(location);
    if (location.pathname === "/signup") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location])


  return (
    <div>{showNavbar && children}</div>
  )
}

export default Header