import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Header(props) {
  const [isActive,setActive] = useState('/')
  document.title = props.title
  const style = {textDecoration:'none'}
  return (
    <>
    <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
        <img src="./logo2.png" style={{ width:"100px", height:"200px"}} alt=""/>
       
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="/" className={isActive === '/' ? 'active':''}style={style} onClick={()=>{setActive('/')}}>Home</Link></li>
          <li><Link to="about" className={isActive === 'about' ? 'active':''}style={style} onClick={()=>{setActive('about')}}>About</Link></li>
          <li><Link to="/contact" className={isActive === 'contact' ? 'active':''}style={style} onClick={()=>{setActive('contact')}}>Contact</Link></li>
          <li className="dropdown"><Link to="#" className='underline'><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
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
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a className="btn-getstarted underline" href="index.html#book-a-table">+91 7701933308</a>

    </div>
  </header>
  
  </>
  )
}

export default Header