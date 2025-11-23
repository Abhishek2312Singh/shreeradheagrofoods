import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'

function ResetPassword() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get('token')
  
  const [passwordForm, setPasswordForm] = useState({
    newPassword: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isValidatingToken, setIsValidatingToken] = useState(true)
  const [tokenValid, setTokenValid] = useState(false)

  useEffect(() => {
    // Check if token exists in URL
    if (!token) {
      setError('Invalid or missing reset token. Please request a new password reset link.')
      setIsValidatingToken(false)
      setTokenValid(false)
      return
    }
    
    // Token exists, allow form to be shown
    setIsValidatingToken(false)
    setTokenValid(true)
  }, [token])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear errors when user starts typing
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Clear previous messages
    setError('')
    setSuccess('')

    // Validation
    if (!passwordForm.newPassword || !passwordForm.confirmPassword) {
      setError('Please fill in all fields.')
      return
    }

    if (passwordForm.newPassword.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setError('Passwords do not match. Please try again.')
      return
    }

    setIsSubmitting(true)

    try {
      // Send reset password request to server
      // Using URLSearchParams for form data (application/x-www-form-urlencoded)
      const formData = new URLSearchParams()
      formData.append('newPassword', passwordForm.newPassword)
      formData.append('confirmPassword', passwordForm.confirmPassword)
      
      const response = await fetch(`http://localhost:80/auth/resetpassword?token=${encodeURIComponent(token)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      })

      const responseText = await response.text()
      
      if (response.ok) {
        setSuccess('Password has been reset successfully! Redirecting to login...')
        setPasswordForm({ newPassword: '', confirmPassword: '' })
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/', { replace: true })
        }, 2000)
      } else {
        // Handle error responses
        try {
          const errorData = JSON.parse(responseText)
          setError(errorData.message || errorData.error || 'Failed to reset password. The token may have expired.')
        } catch {
          setError(responseText || `Failed to reset password (${response.status}). The token may have expired.`)
        }
      }
    } catch (error) {
      console.error('Reset password error:', error)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isValidatingToken) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow">
              <div className="card-body text-center py-5">
                <div className="spinner-border text-primary mb-3" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p>Validating reset token...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!tokenValid) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow">
              <div className="card-body py-5">
                <div className="text-center mb-4">
                  <i className="bi bi-exclamation-triangle-fill text-danger display-4"></i>
                  <h3 className="mt-3">Invalid Reset Link</h3>
                </div>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {error}
                  </div>
                )}
                <div className="text-center mt-4">
                  <Link to="/" className="btn btn-primary">
                    <i className="bi bi-house me-2"></i>
                    Go to Home
                  </Link>
                  <p className="mt-3 text-muted">
                    Need a new reset link? <Link to="/">Request password reset</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <i className="bi bi-shield-lock-fill text-primary display-4"></i>
                <h2 className="mt-3 mb-2">Reset Password</h2>
                <p className="text-muted">Enter your new password below</p>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
                </div>
              )}

              {success && (
                <div className="alert alert-success" role="alert">
                  <i className="bi bi-check-circle me-2"></i>
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                    value={passwordForm.newPassword}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                    required
                    disabled={isSubmitting}
                    minLength={6}
                  />
                  <small className="form-text text-muted">
                    Password must be at least 6 characters long.
                  </small>
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={passwordForm.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm new password"
                    required
                    disabled={isSubmitting}
                    minLength={6}
                  />
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-lg"
                    style={{
                      backgroundColor: '#28a745',
                      borderColor: '#28a745',
                      color: '#ffffff'
                    }}
                    disabled={isSubmitting || success}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Resetting Password...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-key me-2"></i>
                        Reset Password
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <Link to="/" className="text-decoration-none">
                  <i className="bi bi-arrow-left me-1"></i>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword

