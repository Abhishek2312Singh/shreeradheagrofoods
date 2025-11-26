import React, { useState, useEffect } from 'react'
import './Activities.css'

function Activities() {
  const [activities, setActivities] = useState([])
  const [filteredActivities, setFilteredActivities] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [visibleCount, setVisibleCount] = useState(6)
  const [expandedActivities, setExpandedActivities] = useState(new Set())

  // Initialize sample activities if none exist
  const initializeSampleActivities = () => {
    const sampleActivities = [
      {
        id: 1,
        title: "New Potato Processing Facility Launch",
        description: "We are excited to announce the launch of our state-of-the-art potato processing facility. This new facility will increase our production capacity by 40% and allow us to serve more customers worldwide.",
        date: "2024-01-15",
        category: "news",
        image: "",
        createdAt: "2024-01-15T10:00:00.000Z"
      },
      {
        id: 2,
        title: "International Food Expo 2024",
        description: "Join us at the International Food Expo 2024 where we'll showcase our latest potato products and innovations. Visit our booth to learn about our quality standards and meet our team.",
        date: "2024-02-20",
        category: "events",
        image: "",
        createdAt: "2024-01-20T10:00:00.000Z"
      },
      {
        id: 3,
        title: "Quality Certification Renewal",
        description: "We are proud to announce the successful renewal of our ISO 22000 and HACCP certifications. This reaffirms our commitment to maintaining the highest food safety standards.",
        date: "2024-01-10",
        category: "achievements",
        image: "",
        createdAt: "2024-01-10T10:00:00.000Z"
      },
      {
        id: 4,
        title: "New Product Line: Organic Potato Flakes",
        description: "Introducing our new organic potato flakes line, made from 100% certified organic potatoes. Perfect for health-conscious consumers and organic food manufacturers.",
        date: "2024-01-25",
        category: "updates",
        image: "",
        createdAt: "2024-01-25T10:00:00.000Z"
      },
      {
        id: 5,
        title: "Sustainability Award Recognition",
        description: "Shri Radhe Agro Foods has been recognized with the Green Business Award for our sustainable farming practices and eco-friendly processing methods. We're committed to environmental responsibility.",
        date: "2024-01-30",
        category: "achievements",
        image: "",
        createdAt: "2024-01-30T10:00:00.000Z"
      },
      {
        id: 6,
        title: "Customer Success Story: Global Restaurant Chain",
        description: "We're proud to share how our potato products helped a major global restaurant chain improve their menu quality and reduce costs. Read about this success story.",
        date: "2024-02-05",
        category: "news",
        image: "",
        createdAt: "2024-02-05T10:00:00.000Z"
      }
    ]
    
    localStorage.setItem('activities', JSON.stringify(sampleActivities))
    return sampleActivities
  }

  // Load activities from localStorage
  useEffect(() => {
    const savedActivities = localStorage.getItem('activities')
    if (savedActivities) {
      const parsedActivities = JSON.parse(savedActivities)
      setActivities(parsedActivities)
      setFilteredActivities(parsedActivities)
    } else {
      // Initialize with sample data if no activities exist
      const sampleActivities = initializeSampleActivities()
      setActivities(sampleActivities)
      setFilteredActivities(sampleActivities)
    }
  }, [])

  // Filter activities based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredActivities(activities)
    } else {
      setFilteredActivities(activities.filter(activity => activity.category === selectedCategory))
    }
    setVisibleCount(6) // Reset visible count when filtering
    setExpandedActivities(new Set()) // Reset expanded activities when filtering
  }, [selectedCategory, activities])

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
  }

  const toggleActivityExpansion = (activityId) => {
    setExpandedActivities(prev => {
      const newSet = new Set(prev)
      if (newSet.has(activityId)) {
        newSet.delete(activityId)
      } else {
        newSet.add(activityId)
      }
      return newSet
    })
  }

  const loadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  const getCategoryIcon = (category) => {
    const icons = {
      news: 'bi-newspaper',
      events: 'bi-calendar-event',
      updates: 'bi-arrow-up-circle',
      achievements: 'bi-trophy'
    }
    return icons[category] || 'bi-info-circle'
  }

  const getCategoryColor = (category) => {
    const colors = {
      news: 'primary',
      events: 'success',
      updates: 'info',
      achievements: 'warning'
    }
    return colors[category] || 'secondary'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (activities.length === 0) {
    return null // Don't render anything if no activities
  }

  return (
    <section className="activities-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-primary mb-3">
            <i className="bi bi-activity me-3"></i>
            Latest Activities
          </h2>
          <p className="lead text-muted">
            Stay updated with our latest news, events, and achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter mb-4">
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <button
              className={`btn ${selectedCategory === 'all' ? 'btn-info' : 'btn-outline-info'}`}
              onClick={() => handleCategoryFilter('all')}
            >
              <i className="bi bi-grid me-2"></i>
              All ({activities.length})
            </button>
            <button
              className={`btn ${selectedCategory === 'news' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleCategoryFilter('news')}
            >
              <i className="bi bi-newspaper me-2"></i>
              News ({activities.filter(a => a.category === 'news').length})
            </button>
            <button
              className={`btn ${selectedCategory === 'events' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleCategoryFilter('events')}
            >
              <i className="bi bi-calendar-event me-2"></i>
              Events ({activities.filter(a => a.category === 'events').length})
            </button>
            <button
              className={`btn ${selectedCategory === 'updates' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleCategoryFilter('updates')}
            >
              <i className="bi bi-arrow-up-circle me-2"></i>
              Updates ({activities.filter(a => a.category === 'updates').length})
            </button>
            <button
              className={`btn ${selectedCategory === 'achievements' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleCategoryFilter('achievements')}
            >
              <i className="bi bi-trophy me-2"></i>
              Achievements ({activities.filter(a => a.category === 'achievements').length})
            </button>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="row g-4">
          {filteredActivities.slice(0, visibleCount).map(activity => (
            <div key={activity.id} className="col-lg-4 col-md-6">
              <div className="activity-card hover-lift">
                <div className="activity-image">
                  {activity.image ? (
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="img-fluid"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  {(!activity.image || activity.image === '') && (
                    <div className="activity-placeholder">
                      <i className={`bi ${getCategoryIcon(activity.category)} display-4`}></i>
                    </div>
                  )}
                  <div className="activity-category">
                    <span className={`badge bg-${getCategoryColor(activity.category)}`}>
                      {activity.category}
                    </span>
                  </div>
                </div>
                
                <div className="activity-content">
                  <div className="activity-date">
                    <i className="bi bi-calendar3 me-2"></i>
                    {formatDate(activity.date)}
                  </div>
                  
                  <h3 className="activity-title">{activity.title}</h3>
                  
                  <p className="activity-description">
                    {expandedActivities.has(activity.id) 
                      ? activity.description
                      : activity.description.length > 120 
                        ? `${activity.description.substring(0, 120)}...` 
                        : activity.description
                    }
                  </p>
                  
                  <div className="activity-footer">
                    {activity.description.length > 120 && (
                      <button 
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => toggleActivityExpansion(activity.id)}
                      >
                        <i className={`bi ${expandedActivities.has(activity.id) ? 'bi-chevron-up' : 'bi-arrow-right'} me-2`}></i>
                        {expandedActivities.has(activity.id) ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredActivities.length > visibleCount && (
          <div className="text-center mt-5">
            <button 
              className="btn btn-primary btn-lg px-5"
              onClick={loadMore}
            >
              <i className="bi bi-arrow-down me-2"></i>
              Load More Activities
            </button>
          </div>
        )}

        {/* No Activities Message */}
        {filteredActivities.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-inbox display-1 text-muted"></i>
            <h4 className="text-muted mt-3">No activities found</h4>
            <p className="text-muted">Try selecting a different category or check back later</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Activities
