import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import bgImg from '../assets/img/menu/Cover.jpg'

export default function Products() {
  console.log('Products component rendered') // Debug log
  
  return (
    <div className="products-page">
      {/* Hero Cover Section */}
      <div className='modern-cover-section' style={{
        backgroundImage: `url(${bgImg})`,
      }}>
        <div className="modern-cover-content">
          <h1 className="modern-cover-title text-white">Our Products</h1>
          <p className="lead opacity-75 text-white">Discover our premium potato product range</p>
        </div>
      </div>
      
      {/* Products Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-primary mb-3">Featured Products</h2>
          <p className="lead text-muted">Explore our high-quality potato products</p>
        </div>
        
        {/* Product Grid */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card h-100 modern-product-card hover-lift">
              <img src={require('../assets/img/menu/product1.png')} className="card-img-top" alt="Potato Flakes" />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title modern-product-title">Potato Flakes</h3>
                <p className="card-text modern-product-description">
                  Premium quality potato flakes perfect for instant mashed potatoes, 
                  soups, and various culinary applications. Made from carefully selected
                  potatoes using advanced drying technology.
                </p>
                <div className="mt-auto">
                  <div className="row mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-thermometer-half text-success me-2"></i>
                        <span className="small">Low Temperature Drying</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-clock text-info me-2"></i>
                        <span className="small">Long Shelf Life</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-success">Premium Quality</span>
                    <span className="badge bg-warning">Export Grade</span>
                  </div>
                  <Link to="/potatoFlakes" className="btn btn-primary modern-btn-primary w-100 hover-lift">
                    Learn More <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mb-4">
            <div className="card h-100 modern-product-card hover-lift">
              <img src={require('../assets/img/menu/milled-product.png')} className="card-img-top" alt="Milled Products" />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title modern-product-title">Milled</h3>
                <p className="card-text modern-product-description">
                  Finely milled potato products ideal for baking, 
                  thickening agents, and industrial applications. Perfect
                  for food manufacturers and commercial kitchens.
                </p>
                <div className="mt-auto">
                  <div className="row mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-gear text-success me-2"></i>
                        <span className="small">Fine Grinding</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-shield-check text-info me-2"></i>
                        <span className="small">Consistent Quality</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-info">Versatile</span>
                    <span className="badge bg-warning">Industrial Grade</span>
                  </div>
                  <Link to="/milledProducts" className="btn btn-primary modern-btn-primary w-100 hover-lift">
                    Learn More <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-primary mb-3">Our Process</h2>
            <p className="lead text-muted">From farm to finished product</p>
          </div>
          
                    
          <div className="row">
            

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center scale-in stagger-1 process-step">
                <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px',backgroundColor: 'blue'}}>
                  <i className="bi bi-basket2-fill text-white fs-2"></i>
                </div>
                <h5>Raw Selection</h5>
                <p className="text-muted small">Thorough cleaning and peeling using advanced technology</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center scale-in stagger-2 process-step">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-droplet text-white fs-2"></i>
                </div>
                <h5>Washing & Peeling</h5>
                <p className="text-muted small">Thorough cleaning and peeling using advanced technology</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center scale-in stagger-3 process-step">
                <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-thermometer-half text-white fs-2"></i>
                </div>
                <h5>Drying Process</h5>
                <p className="text-muted small">Low-temperature drying to preserve nutrients and flavor</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center scale-in stagger-4 process-step">
                <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="bi bi-box text-white fs-2"></i>
                </div>
                <h5>Packaging</h5>
                <p className="text-muted small">Quality packaging ensuring long shelf life and freshness</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quality Control Section */}
      {/* <h1 className="">Our Products</h1> */}
      <section className="quality-control-section">
      <h1 className="modern-cover-title text-white" style={{textAlign: 'center', marginBottom: '20px'}}>Quality Control</h1>
        <div className="container">
          <div className="text-center mb-5">
            <p className="lead text-white opacity-75">Our commitment to excellence at every step</p>
          </div>
          
          <div className="quality-control-cards">
            <div className="quality-control-card">
              <div className="quality-control-icon">
                <i className="bi bi-search"></i>
              </div>
              <h3 className="quality-control-title">Raw Material Quality Control</h3>
              <p className="quality-control-description">Before processing</p>
              <ul className="quality-control-features">
                <li>Variety & maturity → Right potato type with proper dry matter</li>
                <li>Visual inspection → No rot, sprouting, green skin (indicates solanine)</li>
                <li>Size & uniformity → Helps in even drying</li>
                <li>Defect count → Foreign matter, stones, soil, or other plant debris</li>
              </ul>
            </div>
            
            <div className="quality-control-card">
              <div className="quality-control-icon">
                <i className="bi bi-gear"></i>
              </div>
              <h3 className="quality-control-title">Process Control</h3>
              <p className="quality-control-description">During manufacturing</p>
              <ul className="quality-control-features">
                <li>Washing & peeling check → No dirt or peel residues</li>
                <li>Blanching → Time/temperature to inactivate enzymes</li>
                <li>Drying → Proper temperature and airflow to prevent case hardening</li>
                <li>Moisture monitoring → Target final moisture for stability (6–8%)</li>
                <li>Hygiene & sanitation → Prevent contamination</li>
              </ul>
            </div>
            
            <div className="quality-control-card">
              <div className="quality-control-icon">
                <i className="bi bi-flask"></i>
              </div>
              <h3 className="quality-control-title">Finished Product Testing</h3>
              <p className="quality-control-description">After drying</p>
              <ul className="quality-control-features">
                <li>Moisture content → Low enough to prevent spoilage</li>
                <li>Texture → Crispness for chips, free-flowing powder for granules</li>
                <li>Bulk density → Consistency in packing</li>
                <li>Microbiological safety → Total plate count, yeast & mold, coliforms</li>
                <li>Chemical safety → Residual pesticides, acrylamide level for chips</li>
              </ul>
            </div>
            
            <div className="quality-control-card">
              <div className="quality-control-icon">
                <i className="bi bi-box-seam"></i>
              </div>
              <h3 className="quality-control-title">Packaging & Storage QC</h3>
              <p className="quality-control-description">Final quality assurance</p>
              <ul className="quality-control-features">
                <li>Sealing integrity → No leaks</li>
                <li>Oxygen/moisture barrier check → Packaging films</li>
                <li>Shelf-life testing → Accelerated and real-time</li>
                <li>Label verification → Nutritional facts, batch number, manufacturing date</li>
              </ul>
            </div>
          </div>
          
          {/* Quality Control Stats */}
          <div className="quality-control-stats">
            <div className="quality-stat">
              <div className="quality-stat-number">99.9%</div>
              <div className="quality-stat-label">Quality Assurance</div>
            </div>
            <div className="quality-stat">
              <div className="quality-stat-number">24/7</div>
              <div className="quality-stat-label">Monitoring</div>
            </div>
            <div className="quality-stat">
              <div className="quality-stat-number">ISO</div>
              <div className="quality-stat-label">Certified</div>
            </div>
            <div className="quality-stat">
              <div className="quality-stat-number">100%</div>
              <div className="quality-stat-label">Traceable</div>
            </div>
          </div>
          
          {/* Quality Control CTA */}
          <div className="quality-control-cta">
            <Link to="/contact" className="quality-control-btn">
              Get Quality Report <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-primary mb-3">Certifications & Standards</h2>
            <p className="lead text-muted">Meeting international quality standards</p>
          </div>
          
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="scale-in stagger-1">
                <div className="bg-light p-4 rounded-3 h-100 hover-lift certification-card">
                  <i className="bi bi-award text-primary display-1 mb-3"></i>
                  <h5>ISO 22000</h5>
                  <p className="text-muted">Food Safety Management System</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="scale-in stagger-2">
                <div className="bg-light p-4 rounded-3 h-100 hover-lift certification-card">
                  <i className="bi bi-shield-check text-success display-1 mb-3"></i>
                  <h5>HACCP</h5>
                  <p className="text-muted">Hazard Analysis Critical Control Point</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="scale-in stagger-3">
                <div className="bg-light p-4 rounded-3 h-100 hover-lift certification-card">
                  <i className="bi bi-globe text-info display-1 mb-3"></i>
                  <h5>Export Quality</h5>
                  <p className="text-muted">International Export Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
