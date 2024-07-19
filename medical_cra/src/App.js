import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Navbar from './Components/Navbar/Nav';
// import Landing_Page from './Components/LandingPage/LandingPage';

import Sign_Up from './Components/Sign_Log/Signup';
import Login from './Components/Sign_Log/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar/>
        <Routes>
          <Route path="/" element={<Landing_Page/>}/>
        </Routes> */}

        <Sign_Up/>
        <Login/>

      </BrowserRouter>
    </div>
  );
}

export default App;
