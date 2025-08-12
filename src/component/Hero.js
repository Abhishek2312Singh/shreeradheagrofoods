import React from 'react'
import banner from '../assets/img/menu/potato.jpg'
import photo from '../assets/img/people/chairperson.jpg'
import arrow from '../assets/img/menu/profile-down-arrow.svg'
import Activities from './Activities'

function Hero() {
  return (
    <>
      <section id="hero" className="hero modern-hero">
        <div className="container">
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <div className="fade-in-up">
                <h1 className="display-4 fw-bold mb-4">
                  Delectable and<br />
                  <span className="text-warning">Nutritious Food</span>
                </h1>
                <p className="lead mb-4 opacity-75">
                  Welcome to Shree Radhe Agro Foods, the leading potato-to-flakes producing company. 
                  We have emerged as one of India's foremost manufacturers of premium potato products, 
                  serving global markets with state-of-the-art infrastructure and unwavering commitment to quality.
                </p>
                
                {/* Key Features */}
                <div className="row mb-4">
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-award-fill text-success me-2 fs-5"></i>
                      <span className="small">Premium Quality</span>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-globe text-success me-2 fs-5"></i>
                      <span className="small">Global Export</span>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-shield-check text-success me-2 fs-5"></i>
                      <span className="small">Food Grade Certified</span>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-truck text-success me-2 fs-5"></i>
                      <span className="small">Fast Delivery</span>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex flex-wrap gap-3" data-aos-delay="200">
                  <a href="#manufacture" className="modern-btn modern-btn-primary hover-lift">
                    <i className="bi bi-info-circle me-2"></i>
                    Learn More
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

      {/* What are Potato Flakes Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="fade-in-up">
                <h2 className="display-5 fw-bold text-primary mb-4">
                  What are Potato Flakes?
                </h2>
                <p className="lead mb-4">
                  Potato flakes are dehydrated and processed potato products made from cooked and mashed potatoes 
                  that have been dried and ground into flakes. They are a convenient and quick way to prepare 
                  mashed potatoes and are used in various food products including soups, stews, and baked goods.
                </p>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-clock text-warning me-2"></i>
                      <span>Long Shelf Life</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-lightning text-warning me-2"></i>
                      <span>Easy Preparation</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-heart text-warning me-2"></i>
                      <span>Nutritious</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle text-warning me-2"></i>
                      <span>Consistent Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="fade-in-up" data-aos-delay="100">
                <img 
                  src={banner} 
                  className="img-fluid rounded-4 shadow-lg" 
                  alt="Potato Flakes Process" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-primary mb-3">
              Inside the Making of Perfect Potato Flakes
            </h2>
            <p className="lead text-muted">
              At Shree Radhe Agro Foods, cutting-edge technology meets decades of expertise to create flawless potato flakes. 
              Freshly harvested potatoes are cleaned, peeled, steamed, mashed, and dried under strict quality control.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="process-card text-center hover-lift">
                <div className="process-icon mb-3">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-seed text-white fs-1"></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Agriculture</h5>
                <p className="text-muted small">
                  Our journey starts on trusted farms, where potatoes are grown with care using responsible farming practices.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="process-card text-center hover-lift">
                <div className="process-icon mb-3">
                  <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-droplet text-white fs-1"></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Washing</h5>
                <p className="text-muted small">
                  Potatoes go through high-pressure water jets that remove dirt and impurities for spotless processing.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="process-card text-center hover-lift">
                <div className="process-icon mb-3">
                  <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-fire text-white fs-1"></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Boiling</h5>
                <p className="text-muted small">
                  Peeled potatoes are steamed under high pressure to cook evenly while locking in nutrients.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="process-card text-center hover-lift">
                <div className="process-icon mb-3">
                  <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-box text-white fs-1"></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Drying</h5>
                <p className="text-muted small">
                  Mashed potatoes are gently dried in advanced dryers to form golden flakes with consistent texture.
                </p>
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
                  <div>
                    <h5 className="modern-chairperson-title mb-1">Chairperson</h5>
                    <p className="modern-chairperson-subtitle">Chairman, Shree Radhe Agro Foods</p>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  Leading our company with vision and dedication to provide 
                  the highest quality potato products to our customers worldwide.
                  Our commitment to excellence and innovation drives us to deliver
                  superior products that meet international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Activities Section */}
      <Activities />
    </>
  )
}

export default Hero