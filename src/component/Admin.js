import React, { useState, useEffect } from 'react'
import './Admin.css'

function Admin() {
  const [activities, setActivities] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'company-news',
    date: new Date().toISOString().split('T')[0]
  })
  const [editingId, setEditingId] = useState(null)
  const [isEditing, setIsEditing] = useState(false)


  // Load activities from localStorage on component mount
  useEffect(() => {
    const savedActivities = localStorage.getItem('activities')
    if (savedActivities) {
      setActivities(JSON.parse(savedActivities))
    } else {
      // Initialize with sample activities if none exist
      initializeSampleActivities()
    }
  }, [])

  // Save activities to localStorage whenever activities change
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities))
  }, [activities])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title || !formData.description || !formData.date) {
      alert('Please fill in all required fields')
      return
    }

    if (isEditing && editingId) {
      // Update existing activity
      setActivities(prev => prev.map(activity => 
        activity.id === editingId 
          ? { ...formData, id: editingId }
          : activity
      ))
      setIsEditing(false)
      setEditingId(null)
    } else {
      // Add new activity
      const activityToAdd = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString()
      }
      setActivities(prev => [activityToAdd, ...prev])
    }

    // Reset form
    setFormData({
      title: '',
      description: '',
      category: 'company-news',
      date: new Date().toISOString().split('T')[0]
    })
  }

  const handleEdit = (activity) => {
    setFormData({
      title: activity.title,
      description: activity.description,
      date: activity.date,
      category: activity.category
    })
    setIsEditing(true)
    setEditingId(activity.id)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this activity?')) {
      setActivities(prev => prev.filter(activity => activity.id !== id))
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditingId(null)
    setFormData({
      title: '',
      description: '',
      category: 'company-news',
      date: new Date().toISOString().split('T')[0]
    })
  }

  // Initialize sample activities if none exist
  const initializeSampleActivities = () => {
    const sampleActivities = [
      {
        id: 1,
        title: 'Welcome to Shree Radhe Agro Foods',
        description: 'We are excited to announce the launch of our new website showcasing our premium potato products and commitment to quality.',
        category: 'company-news',
        date: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Quality Certification Achieved',
        description: 'Our facility has been awarded the highest quality certification, ensuring our products meet international standards.',
        category: 'achievements',
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 3,
        title: 'New Product Line Launch',
        description: 'Introducing our new range of premium potato flakes designed for the food service industry.',
        category: 'updates',
        date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]
    setActivities(sampleActivities)
  }


  return (
    <div className="admin-panel">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* Admin Header */}
            <div className="admin-header text-center mb-5">
              <h1 className="display-4 fw-bold text-primary mb-3">
                <i className="bi bi-gear-fill me-3"></i>
                Admin Panel
              </h1>
              <p className="lead text-muted">Manage activities and content for your website</p>
            </div>

            {/* Activity Form */}
            <div className="admin-form-card mb-5">
              <div className="card shadow-lg border-0">
                <div className="card-header bg-primary text-white">
                  <h3 className="mb-0">
                    <i className="bi bi-plus-circle me-2"></i>
                    {isEditing ? 'Edit Activity' : 'Add New Activity'}
                  </h3>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="title" className="form-label fw-semibold">
                          Activity Title *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="Enter activity title"
                          required
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="category" className="form-label fw-semibold">
                          Category
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                        >
                          <option value="company-news">Company News</option>
                          <option value="events">Events</option>
                          <option value="updates">Updates</option>
                          <option value="achievements">Achievements</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="date" className="form-label fw-semibold">
                          Date *
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>



                      <div className="col-12">
                        <label htmlFor="description" className="form-label fw-semibold">
                          Description *
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="description"
                          name="description"
                          rows="4"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Enter activity description"
                          required
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <div className="d-flex gap-2">
                          <button type="submit" className="btn btn-warning btn-lg px-4">
                            <i className={`bi ${isEditing ? 'bi-check-circle' : 'bi-plus-circle'} me-2`}></i>
                            {isEditing ? 'Update Activity' : 'Add Activity'}
                          </button>
                          
                          {isEditing && (
                            <button 
                              type="button" 
                              className="btn btn-secondary btn-lg px-4"
                              onClick={handleCancel}
                            >
                              <i className="bi bi-x-circle me-2"></i>
                              Cancel
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Activities List */}
            <div className="admin-activities">
              <div className="card shadow-lg border-0">
                <div className="card-header bg-success text-white">
                  <h3 className="mb-0">
                    <i className="bi bi-list-ul me-2"></i>
                    Current Activities ({activities.length})
                  </h3>
                </div>
                <div className="card-body p-0">
                  {activities.length === 0 ? (
                    <div className="text-center py-5">
                      <i className="bi bi-inbox display-1 text-muted"></i>
                      <p className="lead text-muted mt-3">No activities added yet</p>
                      <p className="text-muted">Start by adding your first activity above</p>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {activities.map(activity => (
                            <tr key={activity.id}>
                              <td>
                                <div>
                                  <h6 className="mb-1 fw-semibold">{activity.title}</h6>
                                  <small className="text-muted">
                                    {activity.description.substring(0, 50)}...
                                  </small>
                                </div>
                              </td>
                              <td>
                                <span className={`badge bg-${getCategoryColor(activity.category)}`}>
                                  {activity.category}
                                </span>
                              </td>
                              <td>
                                <small className="text-muted">
                                  {new Date(activity.date).toLocaleDateString()}
                                </small>
                              </td>
                              <td>
                                <div className="btn-group btn-group-sm">
                                  <button
                                    className="btn btn-outline-primary"
                                    onClick={() => handleEdit(activity)}
                                    title="Edit"
                                  >
                                    <i className="bi bi-pencil"></i>
                                  </button>
                                  <button
                                    className="btn btn-outline-danger"
                                    onClick={() => handleDelete(activity.id)}
                                    title="Delete"
                                  >
                                    <i className="bi bi-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get category colors
function getCategoryColor(category) {
  const colors = {
    'company-news': 'primary',
    events: 'success',
    updates: 'info',
    achievements: 'warning'
  }
  return colors[category] || 'secondary'
}

export default Admin
