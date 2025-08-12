import React, { useState, useEffect } from 'react'

function StatsSection() {
  const [counts, setCounts] = useState({
    production: 0,
    countries: 0,
    customers: 0,
    experience: 0
  })

  const stats = [
    {
      id: 1,
      icon: 'bi-factory',
      number: 50000,
      suffix: '+',
      label: 'Tonnes Annual Production',
      color: 'primary'
    },
    {
      id: 2,
      icon: 'bi-globe',
      number: 25,
      suffix: '+',
      label: 'Countries Served',
      color: 'success'
    },
    {
      id: 3,
      icon: 'bi-people',
      number: 500,
      suffix: '+',
      label: 'Happy Customers',
      color: 'warning'
    },
    {
      id: 4,
      icon: 'bi-calendar-check',
      number: 15,
      suffix: '+',
      label: 'Years of Experience',
      color: 'info'
    }
  ]

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      stats.forEach((stat, index) => {
        let current = 0
        const target = stat.number
        const increment = target / steps

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }

          setCounts(prev => ({
            ...prev,
            [Object.keys(prev)[index]]: Math.floor(current)
          }))
        }, stepDuration)
      })
    }

    // Start animation when component mounts
    const timer = setTimeout(animateCounts, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-5 bg-primary text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">
            Our Numbers Speak for Themselves
          </h2>
          <p className="lead opacity-75">
            Trusted by customers worldwide with proven track record of excellence
          </p>
        </div>

        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={stat.id} className="col-lg-3 col-md-6">
              <div className="stat-card text-center hover-lift">
                <div className={`stat-icon mb-3 bg-${stat.color} bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center`} style={{width: '80px', height: '80px'}}>
                  <i className={`bi ${stat.icon} text-${stat.color === 'primary' ? 'white' : stat.color} fs-1`}></i>
                </div>
                
                <div className="stat-number mb-2">
                  <span className="display-4 fw-bold">
                    {counts[Object.keys(counts)[index]]}
                  </span>
                  <span className="fs-2 fw-bold">{stat.suffix}</span>
                </div>
                
                <h6 className="stat-label opacity-75">
                  {stat.label}
                </h6>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-award-fill text-warning me-3 fs-2"></i>
                <div className="text-start">
                  <h6 className="fw-bold mb-1">ISO 22000 Certified</h6>
                  <p className="small opacity-75 mb-0">Food Safety Management</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-shield-check text-warning me-3 fs-2"></i>
                <div className="text-start">
                  <h6 className="fw-bold mb-1">HACCP Certified</h6>
                  <p className="small opacity-75 mb-0">Quality Assurance</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-globe text-warning me-3 fs-2"></i>
                <div className="text-start">
                  <h6 className="fw-bold mb-1">Export Ready</h6>
                  <p className="small opacity-75 mb-0">Global Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
