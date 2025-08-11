import React from 'react'
import banner from '../assets/img/menu/potato.jpg'
import photo from '../assets/img/people/chairperson.jpg'
import arrow from '../assets/img/menu/profile-down-arrow.svg'

function Hero() {
  return (
    <>
      <section id="hero" className="hero modern-hero">
        <div className="container">
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <div className="fade-in-up">
                <h1 className="display-4 fw-bold mb-4">
                  Premium Quality<br />
                  <span className="text-warning">Potato Products</span>
                </h1>
                <p className="lead mb-4 opacity-75">
                  Leading manufacturer of high-quality dried potato products, 
                  serving global markets with premium flakes, powders, and milled products.
                </p>
                
                {/* Key Features */}
                <div className="row mb-4">
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                      <span className="small">ISO Certified</span>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                      <span className="small">Export Quality</span>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                      <span className="small">24/7 Support</span>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                      <span className="small">Fast Delivery</span>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex flex-wrap gap-3" data-aos-delay="200">
                  <a href="#manufacture" className="modern-btn modern-btn-primary hover-lift">
                    <i className="bi bi-info-circle me-2"></i>
                    Learn More
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=91QYV47fsBA" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="modern-btn modern-btn-outline hover-lift"
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
                  className="img-fluid rounded-4 shadow-lg float" 
                  alt="Fresh Potatoes" 
                  style={{ maxHeight: '500px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="scale-in stagger-1">
                <div className="display-6 fw-bold text-primary mb-2">15+</div>
                <p className="text-muted">Years Experience</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="scale-in stagger-2">
                <div className="display-6 fw-bold text-primary mb-2">50+</div>
                <p className="text-muted">Countries Served</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="scale-in stagger-3">
                <div className="display-6 fw-bold text-primary mb-2">1000+</div>
                <p className="text-muted">Happy Clients</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="scale-in stagger-4">
                <div className="display-6 fw-bold text-primary mb-2">24/7</div>
                <p className="text-muted">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairperson Section */}
      <div className="container my-5">
        <div className="modern-chairperson-card hover-lift">
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
                  {/* <img 
                    src={arrow} 
                    className="me-3 pulse" 
                    style={{ width: '40px', height: '40px' }} 
                    alt="Arrow" 
                  /> */}
                  <div>
                    <h5 className="modern-chairperson-title mb-1">Chairperson</h5>
                    <p className="modern-chairperson-subtitle">Chairman, SRAF</p>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  Leading our company with vision and dedication to provide 
                  the highest quality potato products to our customers worldwide.
                  Our commitment to excellence and innovation drives us to deliver
                  superior products that meet international standards.
                </p>
                <div className="row mb-3">
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-award text-warning me-2"></i>
                      <span className="small">Quality Excellence</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-globe text-info me-2"></i>
                      <span className="small">Global Reach</span>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-primary modern-btn-primary hover-lift">
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