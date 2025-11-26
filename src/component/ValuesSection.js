import React from 'react'
import { Link } from 'react-router-dom'
function ValuesSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="fade-in-up">
              <h2 className="display-5 fw-bold text-primary mb-4">
                Values and Sustainability
              </h2>
              <p className="lead mb-4">
                At Shri Radhe Agro Foods, we pride ourselves on our commitment to creating value at every stage 
                of the potato flakes production process. We believe in fostering close relationships with our farmers 
                and work hand in hand with them to continually improve the quality of their crops.
              </p>
              <p className="mb-4">
                To achieve this, we have enlisted the services of Agro Experts who provide invaluable training to our farmers, 
                helping them to adopt farming practices that are in line with global standards. This investment in our farmers 
                pays off in spades, as we are able to consistently produce high quality potatoes that meet the needs of our 
                customers throughout the year.
              </p>
              
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-leaf text-success me-2 fs-4"></i>
                    <span className="fw-semibold">Sustainable Farming</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-people text-success me-2 fs-4"></i>
                    <span className="fw-semibold">Farmer Partnership</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-award text-success me-2 fs-4"></i>
                    <span className="fw-semibold">Quality Standards</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-globe text-success me-2 fs-4"></i>
                    <span className="fw-semibold">Global Reach</span>
                  </div>
                </div>
              </div>
              
              <Link to="/aboutus" className="modern-btn modern-btn-primary hover-lift">
                <i className="bi bi-arrow-right text-white me-2" ></i>
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="fade-in-up" data-aos-delay="100">
              <div className="row g-3">
                <div className="col-6">
                  <div className="text-center p-3 bg-white rounded-3 shadow-sm hover-lift">
                    <i className="bi bi-recycle display-4 text-success mb-3"></i>
                    <h6 className="fw-bold text-primary">Eco-Friendly</h6>
                    <p className="small text-muted">Sustainable processing methods</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 bg-white rounded-3 shadow-sm hover-lift">
                    <i className="bi bi-heart-pulse display-4 text-danger mb-3"></i>
                    <h6 className="fw-bold text-primary">Health First</h6>
                    <p className="small text-muted">Nutritious and safe products</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 bg-white rounded-3 shadow-sm hover-lift">
                    <i className="bi bi-shield-check display-4 text-warning mb-3"></i>
                    <h6 className="fw-bold text-primary">Quality Assured</h6>
                    <p className="small text-muted">Certified food safety standards</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 bg-white rounded-3 shadow-sm hover-lift">
                    <i className="bi bi-graph-up display-4 text-info mb-3"></i>
                    <h6 className="fw-bold text-primary">Growth Focused</h6>
                    <p className="small text-muted">Continuous improvement</p>
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

export default ValuesSection
