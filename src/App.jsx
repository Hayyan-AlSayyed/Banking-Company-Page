import './App.css'
import { Route, Routes } from 'react-router-dom'
import Security from './pages/Security'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import logo from '/Images/HomePage/Logo.png'
import stroke from '/Images/HomePage/Mobile Icon.png'
import NavBar from './components/Shared components/NavBar/NavBar'
import Footer from './components/Shared components/Footer/Footer'
import url from './components/Shared components/NavBar/js_NavBar_data_url'
import contact from './components/Shared components/Footer/js_Footer_data_contact'
import icons from './components/Shared components/Footer/js_Footer_data_sm_icons'
import btn from './components/Shared components/NavBar/js_NavBar_btn'
import Dashboard from './pages/Dashboard'
import Cursor from './components/Shared components/Cursor/CursorComponent'
import ScrollToTop from './components/Shared components/ScrollToTop/ScrollToTop'

function App() {

  return (
    <>
      {/* Persistent decorative background texture fixed in the corner across all pages. */}
      <div className="ma-hero-background-abstract">
        <img src="\Images\HomePage\Main Texture.png" className="MainTexture" />
      </div>

      <Cursor />
      <NavBar
        logo={logo}
        items={url}
        btn={btn}
        smallBtn={stroke}
      />
<ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer
        logo={logo}
        items={url}
        contact={contact}
        icons={icons}
        rights="YourBank All Rights Reserved"
        p="Privacy Policy"
        s="Terms of Service"
      />


    </>

  )
}

export default App
