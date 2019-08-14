import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import MeImage from '../../image/me.jpg'
import Footer from '../footer/Footer'

function NavBar() {
  return (
    <div className="navbar_container">
      <img src={ MeImage } alt={ MeImage }></img>
      <div>
        <Link to="/about">About</Link>
        <Link to="/expreience">Expreience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/education" >Education</Link>
      </div>
      <Footer />
    </div>
  )
}

export default NavBar