import React from 'react'
import "./Navbar.css"
import DropDown from '../NavbarDropDown/index'

function Navbar() {
  return (
    <div id="fixedNavbar">
    <nav className="navbar navbar-light notLanding d-flex justify-content-around" >
      <span className="navbar-brand mb-0">
        <span className="cap-brand">S</span>
        <span className="small-cap-brand kill">kill</span>
        <span className="cap-brand w">W</span>
        <span className="small-cap-brand">orx</span>
      </span>
      <div id="dropDownMedia">
     <DropDown/>
      </div>

    </nav>
  </div>
  )
}

export default Navbar
