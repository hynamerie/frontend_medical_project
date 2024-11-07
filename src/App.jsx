import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Landing_Page from "./Components/LandingPage/LandingPage"
import Appointments from "./Components/Pages/Appointments"
import Auth from "./Components/Sign_Log/Auth"
import Login from "./Components/Sign_Log/Login"
import Signup from "./Components/Sign_Log/Signup"
// import "./server"
import BookingLayout from "./Components/DoctorBooking/BookingLayout"
import Notification from "./Components/Notification"
import Services from "./Components/Pages/Services"
import Review from "./Components/Pages/Review"
import Reports from "./Components/Pages/Reports"
import Settings from "./Components/Pages/Settings"
import Blog from "./Components/Pages/Blog"
import BookingLayout2 from "./Components/DoctorBooking/BookingLayout2"
import Checkup from "./Components/Pages/Checkup"

function App() {

  return (
    <BrowserRouter basename={"/frontend_medical_project/"}>
      <Notification>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Landing_Page/>} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/checkup" element={<Checkup/>}/>
            
            <Route path="/doctor-booking" element={<Appointments/>}>
              <Route index element={<BookingLayout/>}/>
              <Route path="2" element={<BookingLayout2/>}/>
            </Route>
            
            <Route element={<Auth/>}>
              <Route path="/review" element={<Review/>} />
              <Route path="/reports" element={<Reports/>}/>
              <Route path="settings" element={<Settings/>}/>
            </Route>

            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />

          </Route>
        </Routes>
      </Notification>
    </BrowserRouter>
  )
}

export default App
