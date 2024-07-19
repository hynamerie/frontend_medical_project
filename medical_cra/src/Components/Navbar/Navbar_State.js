import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

function Navbar_State({children}) {
  const location = useLocation();

  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    console.log(location);
    if (location.pathname === '/login') {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location]);

  return (
    <div>
      {showNavBar && children}
    </div>
  )
}

export default Navbar_State;