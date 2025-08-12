import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// <<<<<<< HEAD
import logo from '../assets/img/menu/logo.png'
// =======
// import logo from './logo1.png'
// >>>>>>> 08883152fe08e36d8d775de26e7b74a8dba68d88

function Header(props) {
  const [isActive, setActive] = useState('/')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' })
  
  document.title = props.title
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    // Simple login check - in production, this should be proper authentication
    if (loginCredentials.username === 'admin' && loginCredentials.password === 'admin123') {
      setIsLoggedIn(true)
      setShowLoginForm(false)
      setLoginCredentials({ username: '', password: '' })
      localStorage.setItem('isLoggedIn', 'true')
    } else {
      alert('Invalid credentials. Use: admin / admin123')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    // Force redirect to home if currently on admin page
    if (window.location.pathname === '/admin') {
      window.location.href = '/'
    } else {
      setActive('/')
    }
  }

  // Check if user is logged in on component mount
  React.useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn')
    if (loginStatus === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <>
      <header id="header" className="header modern-header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src={logo} alt="Shree Radhe Agro Foods Logo" style={{ width: "80px", height: "60px", objectFit: "contain" }} />
            {/* <span className="ms-2 fw-bold text-primary">Shree Radhe Agro Foods</span> */}
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

              {isLoggedIn && (
                <li>
                  <Link 
                    to="admin" 
                    className={isActive === 'admin' ? 'active' : ''} 
                    onClick={() => { setActive('admin'); setIsMobileMenuOpen(false) }}
                  >
                    <i className="bi bi-gear-fill me-2"></i>
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div className="d-flex align-items-center gap-3">
            {!isLoggedIn ? (
              <button 
                className="btn btn-primary modern-btn-primary"
                onClick={() => setShowLoginForm(!showLoginForm)}
              >
                <i className="bi bi-person-circle me-2"></i>
                Login
              </button>
            ) : (
              <button 
                className="btn btn-outline-danger modern-btn-outline"
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </button>
            )}
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

      {/* Login Form Modal */}
      {showLoginForm && (
        <div className="login-overlay" onClick={() => setShowLoginForm(false)}>
          <div className="login-form" onClick={(e) => e.stopPropagation()}>
            <div className="login-header">
              <h4>Admin Login</h4>
              <button 
                className="btn-close"
                onClick={() => setShowLoginForm(false)}
              ></button>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={loginCredentials.username}
                  onChange={(e) => setLoginCredentials({...loginCredentials, username: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={loginCredentials.password}
                  onChange={(e) => setLoginCredentials({...loginCredentials, password: e.target.value})}
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary modern-login-btn">
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Login
                </button>
              </div>
            </form>
            <div className="login-help mt-3">
              <small className="text-muted">
                <i className="bi bi-info-circle me-1"></i>
                Use: admin / admin123
              </small>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header