import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import navBar from './Components/Navbar/navBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <navBar/>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
