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

      {/* Newsletter Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="fade-in-up">
                <div className="mb-4">
                  <i className="bi bi-envelope-paper display-1 text-warning mb-3"></i>
                                     <h2 className="display-5 fw-bold mb-3">Stay Updated with Shree Radhe Agro Foods</h2>
                  <p className="lead opacity-75 mb-4">
                    Subscribe to our newsletter for the latest industry insights, 
                    product updates, and exclusive offers delivered to your inbox.
                  </p>
                </div>
                
                <div className="newsletter-form">
                  <div className="row g-3 justify-content-center">
                    <div className="col-md-8">
                      <div className="input-group input-group-lg">
                        <input 
                          type="email" 
                          className="form-control form-control-lg" 
                          placeholder="Enter your email address"
                          aria-label="Email address"
                          aria-describedby="newsletter-submit"
                        />
                        <button 
                          className="btn btn-warning btn-lg px-4" 
                          type="button" 
                          id="newsletter-submit"
                        >
                          <i className="bi bi-send me-2"></i>
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <p className="small opacity-75">
                      <i className="bi bi-shield-check me-2"></i>
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
                </div>

                {/* Newsletter Benefits */}
                <div className="row mt-5 g-4">
                  <div className="col-md-4">
                    <div className="scale-in stagger-1">
                      <div className="d-flex flex-column align-items-center">
                        <div className="bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                          <i className="bi bi-lightning text-dark fs-4"></i>
                        </div>
                        <h6 className="fw-semibold">Latest Updates</h6>
                        <p className="small opacity-75">Get notified about new products and innovations first</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="scale-in stagger-2">
                      <div className="d-flex flex-column align-items-center">
                        <div className="bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                          <i className="bi bi-gift text-dark fs-4"></i>
                        </div>
                        <h6 className="fw-semibold">Exclusive Offers</h6>
                        <p className="small opacity-75">Access to special discounts and promotional deals</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="scale-in stagger-3">
                      <div className="d-flex flex-column align-items-center">
                        <div className="bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                          <i className="bi bi-graph-up text-dark fs-4"></i>
                        </div>
                        <h6 className="fw-semibold">Industry Insights</h6>
                        <p className="small opacity-75">Stay informed about potato industry trends and news</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                         </div>
           </div>
         </div>
       </section>

       {/* Activities Section */}
       <Activities />
     </>
   )
 }

export default Hero