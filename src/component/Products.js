import React from 'react'
import bgImg from '../assets/img/menu/Cover.jpg'
import Product from './Product'

export default function Products() {
  console.log('Products component rendered') // Debug log
  
  return (
    <div className="products-page">
      {/* Hero Cover Section */}
      <div className='modern-cover-section' style={{
        backgroundImage: `url(${bgImg})`,
      }}>
        <div className="modern-cover-content">
          <h1 className="modern-cover-title">Our Products</h1>
          <p className="lead opacity-75">Discover our premium potato product range</p>
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
            <div className="card h-100 modern-product-card">
              <img src={require('../assets/img/menu/product1.png')} className="card-img-top" alt="Potato Flakes" />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title modern-product-title">Potato Flakes</h3>
                <p className="card-text modern-product-description">
                  Premium quality potato flakes perfect for instant mashed potatoes, 
                  soups, and various culinary applications.
                </p>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-success">Premium Quality</span>
                  </div>
                  <a href="/potatoFlakes" className="btn btn-primary modern-btn-primary w-100">
                    Learn More <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mb-4">
            <div className="card h-100 modern-product-card">
              <img src={require('../assets/img/menu/milled-product.png')} className="card-img-top" alt="Milled Products" />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title modern-product-title">Milled Products</h3>
                <p className="card-text modern-product-description">
                  Finely milled potato products ideal for baking, 
                  thickening agents, and industrial applications.
                </p>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-info">Versatile</span>
                  </div>
                  <a href="/milledProducts" className="btn btn-primary modern-btn-primary w-100">
                    Learn More <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quality Control Section */}
      <section className="modern-quality-section">
        <div className="container">
          <div className="modern-quality-content">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold text-white mb-3">Quality Control</h2>
              <p className="lead text-white opacity-75">Our commitment to excellence at every step</p>
            </div>
            
            <div className="modern-quality-grid">
              <div className="modern-quality-card">
                <h3>Raw Material Quality Control</h3>
                <p className="text-white-50 mb-3">Before processing</p>
                <ul>
                  <li>Variety & maturity → Right potato type with proper starch content</li>
                  <li>Visual inspection → No rot, sprouting, green skin (indicates solanine)</li>
                  <li>Size & uniformity → Helps in even drying</li>
                  <li>Moisture content → Usually 75–80% in fresh potatoes</li>
                  <li>Defect count → Foreign matter, stones, soil, or other plant debris</li>
                </ul>
              </div>
              
              <div className="modern-quality-card">
                <h3>Process Control</h3>
                <p className="text-white-50 mb-3">During manufacturing</p>
                <ul>
                  <li>Washing & peeling check → No dirt or peel residues</li>
                  <li>Blanching control → Time/temperature to inactivate enzymes</li>
                  <li>Drying parameters → Proper temperature and airflow to prevent case hardening</li>
                  <li>Moisture monitoring → Target final moisture for stability (6–8%)</li>
                  <li>Hygiene & sanitation → Prevent contamination</li>
                </ul>
              </div>
              
              <div className="modern-quality-card">
                <h3>Finished Product Testing</h3>
                <p className="text-white-50 mb-3">After drying</p>
                <ul>
                  <li>Moisture content → Low enough to prevent spoilage</li>
                  <li>Color measurement → L*, a*, b* values for consistency</li>
                  <li>Flavor & aroma → No burnt, moldy, or foreign tastes</li>
                  <li>Texture → Crispness for chips, free-flowing powder for granules</li>
                  <li>Bulk density → Consistency in packing</li>
                  <li>Microbiological safety → Total plate count, yeast & mold, coliforms</li>
                  <li>Chemical safety → Residual pesticides, acrylamide level for chips</li>
                </ul>
              </div>
              
              <div className="modern-quality-card">
                <h3>Packaging & Storage QC</h3>
                <p className="text-white-50 mb-3">Final quality assurance</p>
                <ul>
                  <li>Sealing integrity → No leaks</li>
                  <li>Oxygen/moisture barrier check → Packaging films</li>
                  <li>Shelf-life testing → Accelerated and real-time</li>
                  <li>Label verification → Nutritional facts, batch number, manufacturing date</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
