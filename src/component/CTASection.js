import React from 'react'
import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="py-5 bg-gradient-primary text-white">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="fade-in-up">
              <h2 className="display-4 fw-bold mb-4">
                Ready to Experience Premium Quality?
              </h2>
              <p className="lead mb-5 opacity-75">
                Get in touch today and discover why we're the 
                preferred choice for premium potato flakes and milled products.
              </p>
              
              <div className="row g-4 justify-content-center">
                <div className="col-md-4">
                  <div className="cta-feature text-center">
                    <div className="cta-icon mb-3">
                      <i className="bi bi-telephone-fill display-4 text-warning"></i>
                    </div>
                    <h5 className="fw-bold mb-2">Call Us Now</h5>
                    <p className="small opacity-75 mb-3">Speak directly with our experts</p>
                    <a href="tel:+917500054446" className="btn btn-warning btn-lg w-100">
                      <i className="bi bi-telephone me-2"></i>
                      +91 7500054446
                    </a>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="cta-feature text-center">
                    <div className="cta-icon mb-3">
                      <i className="bi bi-envelope-fill display-4 text-warning"></i>
                    </div>
                    <h5 className="fw-bold mb-2">Send Inquiry</h5>
                    <p className="small opacity-75 mb-3">Get detailed product information</p>
                    <Link to="/contact" className="btn btn-warning btn-lg w-100">
                      <i className="bi bi-envelope me-2"></i>
                      Contact Us
                    </Link>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="cta-feature text-center">
                    <div className="cta-icon mb-3">
                      <i className="bi bi-box-seam display-4 text-warning"></i>
                    </div>
                    <h5 className="fw-bold mb-2">View Products</h5>
                    <p className="small opacity-75 mb-3">Explore our product range</p>
                    <Link to="/products" className="btn btn-warning btn-lg w-100">
                      <i className="bi bi-arrow-right me-2"></i>
                      Browse Products
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 pt-4 border-top border-white border-opacity-25">
                <div className="row g-4 justify-content-center">
                  <div className="col-md-3 col-6">
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="bi bi-truck text-warning me-2 fs-4"></i>
                      <span className="small">Fast Delivery</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="bi bi-shield-check text-warning me-2 fs-4"></i>
                      <span className="small">Quality Assured</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="bi bi-headset text-warning me-2 fs-4"></i>
                      <span className="small">24/7 Support</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="bi bi-globe text-warning me-2 fs-4"></i>
                      <span className="small">Global Export</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
