import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/img/menu/logo.png'


function Header(props) {
  const [isActive, setActive] = useState('/')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' })
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('')
  const [forgotPasswordError, setForgotPasswordError] = useState('')
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState('')
  const [isSubmittingForgotPassword, setIsSubmittingForgotPassword] = useState(false)
  const successShownRef = useRef(false)
  
  document.title = props.title
  
  const toggleMobileMenu = (e) => {
    console.log('Toggle mobile menu clicked') // Debug log
    
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    
    // Prevent body scroll when mobile nav is open
    if (newState) {
      document.body.classList.add('nav-open')
      // Prevent iOS Safari bounce scrolling
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.classList.remove('nav-open')
      // Restore normal scrolling
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }

  const toggleDropdown = (dropdownName, e) => {
    console.log('Toggle dropdown clicked:', dropdownName) // Debug log
    
    if (openDropdown === dropdownName) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(dropdownName)
    }
  }

  const closeAllDropdowns = () => {
    setOpenDropdown(null)
  }

  // Function to send login credentials to server for validation
  const handleLogin = async (e) => {
    e.preventDefault()
    
    // Clear previous error
    setLoginError('')
    
    // Prevent multiple login attempts
    if (isLoggingIn) {
      return
    }

    setIsLoggingIn(true)

    try {
      // Send credentials to server for validation
      const response = await fetch('http://localhost:80/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loginCredentials.username,
          password: loginCredentials.password
        })
      })

      if (response.ok) {
        const token = await response.text()
        console.log('Received token:', token)
        
        // If server returns a token string, log the user in
        if (token && token.trim() !== '') {
          // Store the JWT token
          localStorage.setItem('authToken', token)
          localStorage.setItem('isLoggedIn', 'true')
          
          setIsLoggedIn(true)
          setShowLoginForm(false)
          setLoginCredentials({ username: '', password: '' })
          setLoginError('')
          
          // Redirect to admin dashboard
          window.location.href = '/admin'
        } else {
          // Show error if no token received
          setLoginError('Invalid credentials. Please try again.')
        }
      } else {
        // Handle HTTP error responses
        const errorText = await response.text().catch(() => '')
        setLoginError(errorText || `Login failed (${response.status})`)
      }
    } catch (error) {
      console.error('Login error:', error)
      setLoginError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('authToken')
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('userLoggedOut'))
    // Force redirect to home if currently on admin page
    if (window.location.pathname === '/admin') {
      window.location.href = '/'
    } else {
      setActive('/')
    }
  }

  // Function to handle forgot password
  const handleForgotPassword = async (e) => {
    e.preventDefault()
    
    // Clear previous messages
    setForgotPasswordError('')
    setForgotPasswordSuccess('')
    
    if (!forgotPasswordEmail.trim()) {
      setForgotPasswordError('Please enter your registered email address.')
      return
    }

    setIsSubmittingForgotPassword(true)

    // Start the request (non-blocking)
    const emailParam = encodeURIComponent(forgotPasswordEmail.trim())
    const fetchPromise = fetch(`http://localhost:80/auth/forgotpassword?email=${emailParam}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    // Show immediate feedback after 2 seconds (optimistic UI)
    const immediateFeedbackTimeout = setTimeout(() => {
      if (!successShownRef.current) {
        successShownRef.current = true
        setForgotPasswordSuccess('Request received! If this email is registered, you will receive a password reset link shortly. Please check your inbox.')
        setForgotPasswordEmail('')
        setIsSubmittingForgotPassword(false)
        
        // Close modal after showing success message
        setTimeout(() => {
          setShowForgotPassword(false)
          setForgotPasswordSuccess('')
          successShownRef.current = false
        }, 3000)
      }
    }, 2000)

    // Handle the actual response in the background
    try {
      const response = await fetchPromise
      const responseText = await response.text()
      
      // Clear the immediate feedback timeout since we got a response
      clearTimeout(immediateFeedbackTimeout)
      
      if (response.ok) {
        // If we haven't shown success yet, show it now
        if (!successShownRef.current) {
          successShownRef.current = true
          setForgotPasswordSuccess('Password reset instructions have been sent to your email address. Please check your inbox.')
          setForgotPasswordEmail('')
          setIsSubmittingForgotPassword(false)
          setTimeout(() => {
            setShowForgotPassword(false)
            setForgotPasswordSuccess('')
            successShownRef.current = false
          }, 3000)
        }
      } else {
        // Handle error responses - clear success if shown
        if (successShownRef.current) {
          clearTimeout(immediateFeedbackTimeout)
          successShownRef.current = false
        }
        setIsSubmittingForgotPassword(false)
        try {
          const errorData = JSON.parse(responseText)
          setForgotPasswordError(errorData.message || errorData.error || 'Failed to process forgot password request.')
        } catch {
          setForgotPasswordError(responseText || `Failed to process request (${response.status})`)
        }
      }
    } catch (error) {
      // Clear timeout if there's an error
      clearTimeout(immediateFeedbackTimeout)
      if (successShownRef.current) {
        successShownRef.current = false
      }
      console.error('Forgot password error:', error)
      setIsSubmittingForgotPassword(false)
      setForgotPasswordError('Network error. Please check your connection and try again.')
    }
  }

  // Function to toggle forgot password form
  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword)
    setForgotPasswordError('')
    setForgotPasswordSuccess('')
    setForgotPasswordEmail('')
    successShownRef.current = false
  }

  // Update active state when route changes
  useEffect(() => {
    setActive(location.pathname)
    
    // Check authentication status when route changes
    const loginStatus = localStorage.getItem('isLoggedIn')
    const storedToken = localStorage.getItem('authToken')
    
    if (loginStatus === 'true' && storedToken) {
      if (isTokenExpired(storedToken)) {
        // Token is expired, clear auth data
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('authToken')
        setIsLoggedIn(false)
        window.dispatchEvent(new CustomEvent('userLoggedOut'))
      }
    } else if (isLoggedIn) {
      // If we think we're logged in but localStorage says otherwise
      setIsLoggedIn(false)
    }
  }, [location.pathname, isLoggedIn])

  // Function to check if JWT token is expired
  const isTokenExpired = (token) => {
    try {
      if (!token) return true
      
      // Decode JWT token (basic decode without verification)
      const payload = JSON.parse(atob(token.split('.')[1]))
      const currentTime = Date.now() / 1000
      
      // Check if token has expired
      if (payload.exp && payload.exp < currentTime) {
        return true
      }
      
      return false
    } catch (error) {
      return true // If we can't decode it, consider it expired
    }
  }

  // Check if user is logged in on component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn')
    const storedToken = localStorage.getItem('authToken')
    
    if (loginStatus === 'true' && storedToken) {
      // Check if token is expired
      if (isTokenExpired(storedToken)) {
        // Token is expired, clear auth data
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('authToken')
        setIsLoggedIn(false)
      } else {
        // Token is valid
        setIsLoggedIn(true)
      }
    }
  }, [])

  // Listen for storage changes (when user logs out from another tab or component)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'isLoggedIn' || e.key === 'authToken') {
        const loginStatus = localStorage.getItem('isLoggedIn')
        const storedToken = localStorage.getItem('authToken')
        
        if (!loginStatus || !storedToken || isTokenExpired(storedToken)) {
          setIsLoggedIn(false)
        } else {
          setIsLoggedIn(true)
        }
      }
    }

    // Listen for storage events
    window.addEventListener('storage', handleStorageChange)
    
    // Also listen for custom events (for same-tab logout)
    const handleCustomLogout = () => {
      setIsLoggedIn(false)
    }
    
    window.addEventListener('userLoggedOut', handleCustomLogout)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('userLoggedOut', handleCustomLogout)
    }
  }, [])

  // Cleanup effect for mobile navigation
  useEffect(() => {
    return () => {
      // Remove nav-open class when component unmounts
      document.body.classList.remove('nav-open')
    }
  }, [])

  // Close mobile nav when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    document.body.classList.remove('nav-open')
    // Restore normal scrolling
    document.body.style.position = ''
    document.body.style.width = ''
    closeAllDropdowns()
  }, [location.pathname])

  // Add click outside handler for mobile nav
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close mobile nav when clicking outside
      if (isMobileMenuOpen && !e.target.closest('.modern-nav') && !e.target.closest('.mobile-nav-toggle')) {
        setIsMobileMenuOpen(false)
        document.body.classList.remove('nav-open')
        document.body.style.position = ''
        document.body.style.width = ''
        closeAllDropdowns()
      }
    }

    // Add event listener
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Close dropdowns when mobile menu is closed
  useEffect(() => {
    if (!isMobileMenuOpen) {
      closeAllDropdowns()
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header id="header" className="header modern-header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src={logo} alt="Shri Radhe Agro Food Logo" style={{ objectFit: "contain" }} />
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
                  to="/aboutus" 
                  className={isActive === '/aboutus' ? 'active' : ''} 
                  onClick={() => { setActive('/aboutus'); setIsMobileMenuOpen(false) }}
                >
                  About
                </Link>
              </li>

              <li>
                <Link 
                  to="/contact" 
                  className={isActive === '/contact' ? 'active' : ''} 
                  onClick={() => { setActive('/contact'); setIsMobileMenuOpen(false) }}
                >
                  Contact
                </Link>
              </li>
              
              <li className={`dropdown ${openDropdown === 'products' ? 'active' : ''}`}>
                <Link 
                  to="/products" 
                  className={`${isActive === '/products' ? 'active' : ''}`}
                  onClick={(e) => { 
                    if (window.innerWidth <= 1199) {
                      toggleDropdown('products', e)
                      setActive('/products')
                    } else {
                      setActive('/products')
                      setIsMobileMenuOpen(false)
                    }
                  }}
                >
                  <span>Products</span> 
                  <i className={`bi bi-chevron-down toggle-dropdown ms-1 ${openDropdown === 'products' ? 'rotate' : ''}`}></i>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link 
                      to="/potatoFlakes" 
                      onClick={() => { 
                        setActive('/potatoFlakes')
                        setIsMobileMenuOpen(false)
                        closeAllDropdowns()
                      }}
                    >
                      Potato Flakes
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/milledProducts" 
                      onClick={() => { 
                        setActive('/milledProducts')
                        setIsMobileMenuOpen(false)
                        closeAllDropdowns()
                      }}
                    >
                      Milled
                    </Link>
                  </li>
                </ul>
              </li>

              {isLoggedIn && (
                <li>
                  <Link 
                    to="admin" 
                    className={isActive === '/admin' ? 'active' : ''} 
                    onClick={() => { setActive('/admin'); setIsMobileMenuOpen(false) }}
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
                onClick={() => {
                  setShowLoginForm(!showLoginForm)
                  setLoginError('')
                }}
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
            <a className="btn btn-outline-primary modern-btn-outline" href="tel:+917500054446">
              <i className="bi bi-telephone-fill me-2"></i>
              <span className="d-none d-sm-inline">+91 7500054446</span>
              {/* <span className="d-inline d-sm-none">Call</span> */}
            </a>
            
            <button 
              className="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              type="button"
            ></button>
            
            {/* Debug info - remove this after testing */}
            {/* <div className="d-none d-md-block" style={{fontSize: '12px', color: 'red'}}>
              Mobile Menu: {isMobileMenuOpen ? 'OPEN' : 'CLOSED'} | 
              Dropdown: {openDropdown || 'NONE'}
            </div> */}
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
                className="login-close-btn"
                onClick={() => setShowLoginForm(false)}
                type="button"
                aria-label="Close login form"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleLogin}>
              {loginError && (
                <div className="alert alert-danger mb-3" role="alert">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {loginError}
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={loginCredentials.username}
                  onChange={(e) => setLoginCredentials({...loginCredentials, username: e.target.value})}
                  required
                  disabled={isLoggingIn}
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
                  disabled={isLoggingIn}
                />
              </div>
              <div className="mb-3 text-end">
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none"
                  onClick={toggleForgotPassword}
                  disabled={isLoggingIn}
                  style={{ fontSize: '0.9rem' }}
                >
                  <i className="bi bi-question-circle me-1"></i>
                  Forgot Password?
                </button>
              </div>
              <div className="d-grid">
                <button 
                  type="submit" 
                  className="btn btn-primary modern-login-btn"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? (
                    <>
                      <i className="bi bi-arrow-clockwise me-2"></i>
                      Logging in...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-box-arrow-in-right me-2"></i>
                      Login
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="login-overlay" onClick={toggleForgotPassword}>
          <div className="login-form" onClick={(e) => e.stopPropagation()}>
            <div className="login-header">
              <h4>Forgot Password</h4>
              <button 
                className="login-close-btn"
                onClick={toggleForgotPassword}
                type="button"
                aria-label="Close forgot password form"
                disabled={isSubmittingForgotPassword}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleForgotPassword}>
              {forgotPasswordError && (
                <div className="alert alert-danger mb-3" role="alert">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {forgotPasswordError}
                </div>
              )}
              {forgotPasswordSuccess && (
                <div className="alert alert-success mb-3" role="alert">
                  <i className="bi bi-check-circle me-2"></i>
                  {forgotPasswordSuccess}
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="forgotPasswordEmail" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="forgotPasswordEmail"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  required
                  disabled={isSubmittingForgotPassword}
                />
              </div>
              <div className="d-grid gap-2">
                <button 
                  type="submit" 
                  className="btn btn-primary modern-login-btn"
                  disabled={isSubmittingForgotPassword}
                >
                  {isSubmittingForgotPassword ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Processing request...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-envelope me-2"></i>
                      Send Reset Instructions
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={toggleForgotPassword}
                  disabled={isSubmittingForgotPassword}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Back to Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Header