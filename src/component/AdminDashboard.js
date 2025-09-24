import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

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

    console.log('User is authenticated, showing dashboard')
    // Set loading to false since we don't need to fetch user data
    setLoading(false)
  }, [navigate])


  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('authToken')
    navigate('/')
  }

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
            <button 
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
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

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="bi bi-speedometer2 me-2"></i>
                Quick Actions
              </h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <button className="btn btn-primary">
                  <i className="bi bi-plus-circle me-2"></i>
                  Add New Item
                </button>
                <button className="btn btn-info">
                  <i className="bi bi-eye me-2"></i>
                  View Reports
                </button>
                <button className="btn btn-warning">
                  <i className="bi bi-gear me-2"></i>
                  Settings
                </button>
                <button className="btn btn-secondary">
                  <i className="bi bi-people me-2"></i>
                  Manage Users
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="bi bi-graph-up me-2"></i>
                Dashboard Overview
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="text-center p-3 bg-light rounded">
                    <i className="bi bi-box-seam text-primary" style={{ fontSize: '2rem' }}></i>
                    <h4 className="mt-2">Products</h4>
                    <p className="text-muted">Manage inventory</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center p-3 bg-light rounded">
                    <i className="bi bi-people text-success" style={{ fontSize: '2rem' }}></i>
                    <h4 className="mt-2">Customers</h4>
                    <p className="text-muted">View customer data</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center p-3 bg-light rounded">
                    <i className="bi bi-receipt text-warning" style={{ fontSize: '2rem' }}></i>
                    <h4 className="mt-2">Orders</h4>
                    <p className="text-muted">Track orders</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center p-3 bg-light rounded">
                    <i className="bi bi-bar-chart text-info" style={{ fontSize: '2rem' }}></i>
                    <h4 className="mt-2">Analytics</h4>
                    <p className="text-muted">View reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
