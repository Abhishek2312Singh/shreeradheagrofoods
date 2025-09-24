import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [contactData, setContactData] = useState([])
  const [loadingContacts, setLoadingContacts] = useState(false)
  const navigate = useNavigate()

  // Function to check if JWT token is expired
  const isTokenExpired = (token) => {
    try {
      if (!token) return true
      
      // Decode JWT token (basic decode without verification)
      const payload = JSON.parse(atob(token.split('.')[1]))
      const currentTime = Date.now() / 1000
      
      // Check if token has expired
      if (payload.exp && payload.exp < currentTime) {
        console.log('Token is expired')
        return true
      }
      
      return false
    } catch (error) {
      console.error('Error decoding token:', error)
      return true // If we can't decode it, consider it expired
    }
  }

  // Function to clear authentication data
  const clearAuthData = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('isLoggedIn')
    // Dispatch custom event to notify Header component
    window.dispatchEvent(new CustomEvent('userLoggedOut'))
  }

  // Function to fetch contact form submissions
  const fetchContactData = async () => {
    setLoadingContacts(true)
    try {
      const token = localStorage.getItem('authToken')
      const response = await fetch('http://localhost:80/getdata', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        const data = await response.json()
        setContactData(data)
        console.log('Contact data fetched:', data)
      } else {
        console.error('Failed to fetch contact data')
        setContactData([])
      }
    } catch (error) {
      console.error('Error fetching contact data:', error)
      setContactData([])
    } finally {
      setLoadingContacts(false)
    }
  }

  useEffect(() => {
    console.log('AdminDashboard mounted')
    // Check if user is logged in
    const token = localStorage.getItem('authToken')
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    
    console.log('Token:', token)
    console.log('IsLoggedIn:', isLoggedIn)
    
    if (!token || !isLoggedIn) {
      console.log('No token or not logged in, redirecting to home')
      navigate('/')
      return
    }

    // Check if token is expired
    if (isTokenExpired(token)) {
      console.log('Token is expired, logging out')
      clearAuthData()
      navigate('/')
      return
    }

    console.log('User is authenticated with valid token, showing dashboard')
    // Set loading to false since we don't need to fetch user data
    setLoading(false)
    
    // Fetch contact form submissions
    fetchContactData()

    // Set up periodic token validation (check every 5 minutes)
    const tokenCheckInterval = setInterval(() => {
      const currentToken = localStorage.getItem('authToken')
      if (!currentToken || isTokenExpired(currentToken)) {
        console.log('Token expired during session, logging out')
        clearAuthData()
        navigate('/')
        clearInterval(tokenCheckInterval)
      }
    }, 5 * 60 * 1000) // Check every 5 minutes

    // Cleanup interval on component unmount
    return () => {
      clearInterval(tokenCheckInterval)
    }
  }, [navigate])


//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn')
//     localStorage.removeItem('authToken')
//     navigate('/')
//   }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading admin dashboard...</p>
          <p className="mt-2 text-muted">Checking authentication...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3 mb-0">
              <i className="bi bi-gear-fill me-2"></i>
              Admin Dashboard
            </h1>
            {/* <button 
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button> */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="bi bi-person-circle me-2"></i>
                Admin Information
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <p><strong>Username:</strong> Admin</p>
                  <p><strong>Role:</strong> Administrator</p>
                  <p><strong>Login Time:</strong> {new Date().toLocaleString()}</p>
                </div>
                <div className="col-md-6">
                  <p><strong>Status:</strong> <span className="badge bg-success">Active</span></p>
                  <p><strong>Last Access:</strong> Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Submissions Table */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">
                <i className="bi bi-envelope me-2"></i>
                Contact Form Submissions
              </h5>
              <button 
                className="btn btn-outline-primary btn-sm"
                onClick={fetchContactData}
                disabled={loadingContacts}
              >
                {loadingContacts ? (
                  <>
                    <i className="bi bi-arrow-clockwise me-1"></i>
                    Refreshing...
                  </>
                ) : (
                  <>
                    <i className="bi bi-arrow-clockwise me-1"></i>
                    Refresh
                  </>
                )}
              </button>
            </div>
            <div className="card-body">
              {loadingContacts ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-2">Loading contact submissions...</p>
                </div>
              ) : contactData.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Message</th>
                        <th>Submitted</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactData.map((contact, index) => (
                        <tr key={contact.id || index}>
                          <td>{index + 1}</td>
                          <td>
                            <strong>{contact.userName || 'N/A'}</strong>
                          </td>
                          <td>
                            <a href={`mailto:${contact.email}`} className="text-decoration-none">
                              {contact.email || 'N/A'}
                            </a>
                          </td>
                          <td>
                            <a href={`tel:${contact.contact}`} className="text-decoration-none">
                              {contact.contact || 'N/A'}
                            </a>
                          </td>
                          <td>
                            <div 
                              style={{ 
                                maxWidth: '300px', 
                                overflow: 'hidden', 
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                              }}
                              title={contact.message}
                            >
                              {contact.message || 'N/A'}
                            </div>
                          </td>
                          <td>
                            {contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'N/A'}
                          </td>
                          <td>
                            <button 
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => alert(`Full Message:\n\n${contact.message}`)}
                              title="View full message"
                            >
                              <i className="bi bi-eye"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-4">
                  <i className="bi bi-inbox display-4 text-muted"></i>
                  <p className="mt-3 text-muted">No contact form submissions found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
