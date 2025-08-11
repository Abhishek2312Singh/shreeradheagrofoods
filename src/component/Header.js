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

          <li><Link to="aboutus" className={isActive === 'aboutus' ? 'active':''}style={style} onClick={()=>{setActive('aboutus')}}>About</Link></li>

          <li><Link to="contact" className={isActive === 'contact' ? 'active':''}style={style} onClick={()=>{setActive('contact')}}>Contact</Link></li>
          <li className="dropdown"><Link to="products" className={`underline ${isActive ==='potatoFlakes' ? 'active' : ""}`} onClick={()=>{
            setActive('milledProdcuts')
          }}><span>Dried Potato Product</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
            <ul>
              <li><Link to="potatoFlakes" className='underline' onClick={()=>{
                setActive('potatoFalkes')
              }}>Potato Flakes</Link></li>
              <li><Link to="milledProducts" className='underline' onClick={()=>{
                setActive('milledProducts')
              }}>Milled Products</Link></li>
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