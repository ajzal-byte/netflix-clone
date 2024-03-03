import React, { useEffect, useState } from 'react'
import "./css/Nav.css"
import logo from '../assets/logo.png';
import profile from '../assets/profile.png'
import { useNavigate } from 'react-router-dom';


const Nav = () => {

  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if(window.scrollY > 100) handleShow(true)
    else handleShow(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img onClick={() => navigate('/')}
          className='nav__logo' 
          src={logo}
          alt="netflix-logo" />
        <img onClick={() => navigate('/profile')}
          className='nav__profile'
          src={profile}
          alt="profile-icon" />
      </div>
    </div>
  )
}

export default Nav