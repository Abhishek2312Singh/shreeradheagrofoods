import React, { useMemo, useState } from 'react'

function DeveloperInfo() {
  const [expanded, setExpanded] = useState(false)

  const developerDetails = useMemo(() => ({
    name: 'Abhishek Singh & Tanisha Nainwal',
    role: 'Full Stack Developer',
    email: 'abhishekrbs.singh@gmail.com, tanisha.nainwal@gmail.com',
    phone: '7701933308, 8130495445',
    // portfolio: 'https://developerportfolio.example.com',
    // bio: 'Building reliable web experiences with React, Spring Boot, and scalable infrastructure.'
  }), [])

  return (
    <div className="card h-100">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">
          <i className="bi bi-person-badge me-2"></i>
          Developer Information
        </h5>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      <div className="card-body">
        <p className="mb-1"><strong>Name:</strong> {developerDetails.name}</p>
        <p className="mb-3"><strong>Role:</strong> {developerDetails.role}</p>
        {developerDetails.bio && (
          <p className="text-muted mb-3">{developerDetails.bio}</p>
        )}
        {expanded && (
          <div className="border-top pt-3">
            {developerDetails.email && (
              <p className="mb-1">
                <strong>Email:</strong>{' '}
                <a href={`mailto:${developerDetails.email}`} className="text-decoration-none">
                  {developerDetails.email}
                </a>
              </p>
            )}
            {developerDetails.phone && (
              <p className="mb-1">
                <strong>Phone:</strong> {developerDetails.phone}
              </p>
            )}
            {developerDetails.portfolio && (
              <p className="mb-0">
                <strong>Portfolio:</strong>{' '}
                <a
                  href={developerDetails.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  {developerDetails.portfolio}
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default DeveloperInfo

