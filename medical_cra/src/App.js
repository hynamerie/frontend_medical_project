import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Nav';
// import Navbar_State from './Components/Navbar/Navbar_State';
import Landing_Page from './Components/LandingPage/LandingPage';

import Sign_Up from './Components/Sign_Log/Signup';
import Login from './Components/Sign_Log/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar_State>
        <Navbar/>
      </Navbar_State> */}
      <Navbar/>
        <Routes>
          <Route path="/" element={<Landing_Page/>}/>
          <Route path="signup" element={<Sign_Up/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
