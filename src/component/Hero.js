import React from 'react'
import banner from '../assets/img/menu/potato.jpg'
import photo from '../assets/img/people/chairperson.jpg'
import arrow from '../assets/img/menu/profile-down-arrow.svg'

function Hero() {
  return (
    <>
      <section id="hero" className="hero modern-hero">
        <div className="container">
          <div className="row gy-4 justify-content-center justify-content-lg-between align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <div className="fade-in-up">
                <h1 className="display-4 fw-bold mb-4">
                  Premium Quality<br />
                  <span className="text-warning">Potato Products</span>
                </h1>
                <p className="lead mb-4 opacity-75">
                  Discover our range of high-quality dried potato products, 
                  carefully processed to maintain nutrition and taste while 
                  ensuring long shelf life and convenience.
                </p>
                <div className="d-flex flex-wrap gap-3" data-aos-delay="200">
                  <a href="#manufacture" className="modern-btn modern-btn-primary">
                    <i className="bi bi-info-circle me-2"></i>
                    Learn More
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=91QYV47fsBA" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="modern-btn modern-btn-outline"
                  >
                    <i className="bi bi-play-circle me-2"></i>
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <div className="fade-in-up" data-aos-delay="100">
                <img 
                  src={banner} 
                  className="img-fluid rounded-4 shadow-lg" 
                  alt="Fresh Potatoes" 
                  style={{ maxHeight: '500px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="modern-chairperson-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img 
                src={photo} 
                className="img-fluid h-100" 
                style={{ height: '400px', objectFit: 'cover' }} 
                alt="Chairperson" 
              />
            </div>
            <div className="col-md-8">
              <div className="modern-chairperson-content">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={arrow} 
                    className="me-3" 
                    style={{ width: '40px', height: '40px' }} 
                    alt="Arrow" 
                  />
                  <div>
                    <h5 className="modern-chairperson-title mb-1">Chairperson</h5>
                    <p className="modern-chairperson-subtitle">Chairman, SRAF</p>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  Leading our company with vision and dedication to provide 
                  the highest quality potato products to our customers worldwide.
                </p>
                <button type="button" className="btn btn-primary modern-btn-primary">
                  <i className="bi bi-person-circle me-2"></i>
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero