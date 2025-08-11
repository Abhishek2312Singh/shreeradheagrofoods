import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo1.png'

function Header(props) {
  const [isActive, setActive] = useState('/')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  document.title = props.title
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header id="header" className="header modern-header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src={logo} alt="SRAF Logo" style={{ width: "80px", height: "60px", objectFit: "contain" }} />
            <span className="ms-2 fw-bold text-primary">SRAF</span>
          </Link>
          
          <nav id="navmenu" className={`navmenu modern-nav ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="d-flex align-items-center">
              <li>
                <Link 
                  to="/" 
                  className={isActive === '/' ? 'active' : ''} 
                  onClick={() => { setActive('/'); setIsMobileMenuOpen(false) }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link 
                  to="aboutus" 
                  className={isActive === 'aboutus' ? 'active' : ''} 
                  onClick={() => { setActive('aboutus'); setIsMobileMenuOpen(false) }}
                >
                  About
                </Link>
              </li>

              <li>
                <Link 
                  to="contact" 
                  className={isActive === 'contact' ? 'active' : ''} 
                  onClick={() => { setActive('contact'); setIsMobileMenuOpen(false) }}
                >
                  Contact
                </Link>
              </li>
              
              <li className="dropdown">
                <Link 
                  to="products" 
                  className={`${isActive === 'products' ? 'active' : ''}`}
                  onClick={() => { setActive('products'); setIsMobileMenuOpen(false) }}
                >
                  <span>Products</span> 
                  <i className="bi bi-chevron-down toggle-dropdown ms-1"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link 
                      to="potatoFlakes" 
                      onClick={() => { setActive('potatoFlakes'); setIsMobileMenuOpen(false) }}
                    >
                      Potato Flakes
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="milledProducts" 
                      onClick={() => { setActive('milledProducts'); setIsMobileMenuOpen(false) }}
                    >
                      Milled Products
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="d-flex align-items-center gap-3">
            <a className="btn btn-outline-primary modern-btn-outline" href="tel:+917701933308">
              <i className="bi bi-telephone-fill me-2"></i>
              +91 7701933308
            </a>
            
            <button 
              className="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            ></button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header