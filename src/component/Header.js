import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Header(props) {
  const [isActive,setActive] = useState('/')
  document.title = props.title
  return (
    <>
    <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        <img src="./logo2.png" style={{ width:"100px", height:"200px"}} alt=""/>
        {/* <h1 className="sitename">Yummy</h1> */}
        {/* <span>.</span> */}
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            {/*   */}
          <Link to="/" className="active">Home</Link></li>
          <Link to="/about" className='active'>About</Link>
          <li><a href="#about" className='active'>About</a></li>
          <li><a href="#menu">Menu</a></li>
          {/* <li><a href="#events">Contact</a></li> */}
          <li>
          <Link to="/contact" className='active'>Contact</Link></li>
          <li><a href="#chefs" className='active'>Chefs</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a className="btn-getstarted" href="index.html#book-a-table">+91 7701933308</a>

    </div>
  </header>
  
  </>
  )
}

export default Header