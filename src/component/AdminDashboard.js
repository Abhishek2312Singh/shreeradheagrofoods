import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [contactData, setContactData] = useState([])
  const [loadingContacts, setLoadingContacts] = useState(false)
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [passwordStatus, setPasswordStatus] = useState({
    message: '',
    type: ''
  })
  const [passwordModalStatus, setPasswordModalStatus] = useState({
    message: '',
    type: ''
  })
  const [passwordSubmitting, setPasswordSubmitting] = useState(false)
  const [expandedMessages, setExpandedMessages] = useState({})
  const navigate = useNavigate()

  const extractMessage = (responseContent, defaultMessage) => {
    if (!responseContent) {
      return defaultMessage
    }

    let content = responseContent

    if (typeof content === 'string') {
      const trimmed = content.trim()
      if (!trimmed) {
        return defaultMessage
      }

      try {
        const parsed = JSON.parse(trimmed)
        if (parsed && typeof parsed === 'object') {
          content = parsed
        } else if (typeof parsed === 'string') {
          return parsed.trim() || defaultMessage
        } else {
          return trimmed
        }
      } catch (error) {
        return trimmed
      }
    }

    if (content && typeof content === 'object') {
      const possibleKeys = ['message', 'error', 'status', 'detail', 'info']
      for (const key of possibleKeys) {
        const value = content[key]
        if (typeof value === 'string' && value.trim()) {
          return value.trim()
        }
        if (value && typeof value === 'object') {
          const nestedMessage = extractMessage(value, '')
          if (nestedMessage) {
            return nestedMessage
          }
        }
      }
    }

    return defaultMessage
  }

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
      const response = await fetch('https://api.shriradheagrofoods.com/getdata', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'omit'
      })

    if (response.ok) {
      const data = await response.json()
      setContactData(data)
      } else {
      setContactData([])
      }
    } catch (error) {
    setContactData([])
    } finally {
      setLoadingContacts(false)
    }
  }

  const handleOpenPasswordModal = () => {
    setPasswordStatus({ message: '', type: '' })
    setPasswordModalStatus({ message: '', type: '' })
    setShowPasswordForm(true)
  }

  const handleClosePasswordModal = () => {
    setShowPasswordForm(false)
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    setPasswordSubmitting(false)
    setPasswordModalStatus({ message: '', type: '' })
  }

  const handlePasswordInputChange = (event) => {
    const { name, value } = event.target
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitPasswordChange = async (event) => {
    event.preventDefault()
    setPasswordStatus({ message: '', type: '' })
    setPasswordModalStatus({ message: '', type: '' })

    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      setPasswordModalStatus({ message: 'Please fill out all fields.', type: 'danger' })
      return
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordModalStatus({ message: 'New password and confirm password do not match.', type: 'danger' })
      return
    }

    setPasswordSubmitting(true)

    try {
      const token = localStorage.getItem('authToken')
      const response = await fetch('https://api.shriradheagrofoods.com/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'omit',
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
          confirmPassword: passwordForm.confirmPassword
        })
      })

      const rawResponse = await response.text()
      if (response.ok) {
        const successMessage = extractMessage(rawResponse, 'Password updated successfully.')
        setPasswordStatus({ message: successMessage, type: 'success' })
        handleClosePasswordModal()
      } else {
        const errorMessage = extractMessage(rawResponse, 'Failed to update password.')
        setPasswordModalStatus({ message: errorMessage, type: 'danger' })
      }
  } catch (error) {
      setPasswordModalStatus({ message: 'An unexpected error occurred. Please try again later.', type: 'danger' })
    } finally {
      setPasswordSubmitting(false)
    }
  }

  const toggleMessageExpansion = (messageKey) => {
    setExpandedMessages((prev) => ({
      ...prev,
      [messageKey]: !prev[messageKey]
    }))
  }

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('authToken')
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!token || !isLoggedIn) {
      navigate('/')
      return
    }

    // Check if token is expired
    if (isTokenExpired(token)) {
      clearAuthData()
      navigate('/')
      return
    }
    // Set loading to false since we don't need to fetch user data
    setLoading(false)
    
    // Fetch contact form submissions
    fetchContactData()

    // Set up periodic token validation (check every 5 minutes)
    const tokenCheckInterval = setInterval(() => {
      const currentToken = localStorage.getItem('authToken')
      if (!currentToken || isTokenExpired(currentToken)) {
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
                  <button 
                    className="btn btn-outline-warning btn-sm mt-3"
                    onClick={handleOpenPasswordModal}
                  >
                    <i className="bi bi-key me-2"></i>
                    Change Password
                  </button>
                </div>
              </div>
              {passwordStatus.message && (
                <div className={`alert alert-${passwordStatus.type} mt-3`} role="alert">
                  {passwordStatus.message}
                </div>
              )}
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
                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Message</th>
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
                            {(() => {
                              const message = contact.message ? contact.message : 'N/A'
                              const messageKey = contact.id != null ? contact.id : `idx-${index}`
                              const isLongMessage = message !== 'N/A' && message.length > 120
                              const isExpanded = !!expandedMessages[messageKey]

                              return (
                                <div className="text-break">
                                  <div>
                                    {isLongMessage && !isExpanded
                                      ? `${message.slice(0, 120)}...`
                                      : message}
                                  </div>
                                  {isLongMessage && (
                                    <button
                                      type="button"
                                      className="btn btn-link btn-sm ps-0"
                                      onClick={() => toggleMessageExpansion(messageKey)}
                                    >
                                      {isExpanded ? 'Show less' : 'Show more'}
                                    </button>
                                  )}
                                </div>
                              )
                            })()}
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
      {showPasswordForm && (
        <>
          <div 
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            onClick={handleClosePasswordModal}
          >
            <div 
              className="modal-dialog modal-dialog-centered"
              role="document"
              onClick={(event) => event.stopPropagation()}
            >
              <form className="modal-content" onSubmit={handleSubmitPasswordChange}>
                <div className="modal-header">
                  <h5 className="modal-title">
                    <i className="bi bi-shield-lock me-2"></i>
                    Change Password
                  </h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    aria-label="Close"
                    onClick={handleClosePasswordModal}
                    disabled={passwordSubmitting}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="currentPassword" className="form-label">Current Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="currentPassword"
                      name="currentPassword"
                      value={passwordForm.currentPassword}
                      onChange={handlePasswordInputChange}
                      disabled={passwordSubmitting}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      name="newPassword"
                      value={passwordForm.newPassword}
                      onChange={handlePasswordInputChange}
                      disabled={passwordSubmitting}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={passwordForm.confirmPassword}
                      onChange={handlePasswordInputChange}
                      disabled={passwordSubmitting}
                      required
                    />
                  </div>
                  {passwordModalStatus.message && (
                    <div className={`alert alert-${passwordModalStatus.type}`} role="alert">
                      {passwordModalStatus.message}
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={handleClosePasswordModal}
                    disabled={passwordSubmitting}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-warning"
                    disabled={passwordSubmitting}
                  >
                    {passwordSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Updating...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-check2-circle me-2"></i>
                        Update Password
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  )
}

export default AdminDashboard

