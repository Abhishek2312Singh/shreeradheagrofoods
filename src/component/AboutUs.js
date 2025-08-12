import React, { useEffect } from 'react'
import about1 from '../assets/img/menu/potato.jpg'
import about from '../assets/img/about.jpg'
import about2 from '../assets/img/about-2.jpg'
import './AboutUs.css'

function AboutUs() {
    useEffect(() => {
        document.title = "Shree Radhe Agro Foods - About Us"
    })
    
    return (
        <>
            {/* Hero Section */}
            <section className="about-hero modern-hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 fade-in-up">
                            <h1 className="display-4 fw-bold mb-4">
                                About <span className="text-warning">Shree Radhe Agro Foods</span>
                            </h1>
                            <p className="lead mb-4">
                                Leading manufacturer of premium dried potato products, serving global markets 
                                with quality, innovation, and sustainability at our core.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="d-flex align-items-center me-4">
                                    <i className="bi bi-award text-warning fs-3 me-2"></i>
                                    <span className="fw-semibold">ISO Certified</span>
                                </div>
                                <div className="d-flex align-items-center me-4">
                                    <i className="bi bi-globe text-info fs-3 me-2"></i>
                                    <span className="fw-semibold">Global Export</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-shield-check text-success fs-3 me-2"></i>
                                    <span className="fw-semibold">Quality Assured</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div className="fade-in-up" data-aos-delay="100">
                                <img 
                                    src={about} 
                                    className="img-fluid rounded-4 shadow-lg float" 
                                    alt="About Shree Radhe Agro Foods" 
                                    style={{ maxHeight: '500px', objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="slide-in-left">
                                <h2 className="display-5 fw-bold text-primary mb-4">Our Story</h2>
                                <p className="lead text-muted mb-4">
                                    Founded with a vision to revolutionize the potato processing industry, 
                                    Shree Radhe Agro Foods has grown from a small family business to a leading global supplier 
                                    of premium dried potato products.
                                </p>
                                <p className="mb-4">
                                    Our journey began with a simple mission: to provide the highest quality 
                                    potato products while maintaining the nutritional value and authentic taste 
                                    that consumers love. Today, we serve customers across 50+ countries, 
                                    maintaining the same commitment to excellence that started our company.
                                </p>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            <span>Premium Quality Products</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            <span>Sustainable Practices</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            <span>Global Standards</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            <span>Innovation Focus</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="slide-in-right">
                                <img 
                                    src={about1} 
                                    className="img-fluid rounded-4 shadow-lg hover-lift" 
                                    alt="Potato Processing" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="scale-in stagger-1">
                                <div className="bg-white p-4 rounded-4 h-100 hover-lift shadow-sm">
                                    <div className="text-center mb-4">
                                        <i className="bi bi-bullseye text-primary display-1"></i>
                                    </div>
                                    <h3 className="text-center mb-3">Our Mission</h3>
                                    <p className="text-muted text-center">
                                        To provide the highest quality dried potato products while maintaining 
                                        nutritional value, ensuring food safety, and contributing to global 
                                        food security through sustainable and innovative processing methods.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="scale-in stagger-2">
                                <div className="bg-white p-4 rounded-4 h-100 hover-lift shadow-sm">
                                    <div className="text-center mb-4">
                                        <i className="bi bi-eye text-success display-1"></i>
                                    </div>
                                    <h3 className="text-center mb-3">Our Vision</h3>
                                    <p className="text-muted text-center">
                                        To become the world's most trusted and innovative supplier of potato 
                                        products, leading the industry in quality, sustainability, and 
                                        customer satisfaction while expanding our global footprint.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold text-primary mb-3">Our Core Values</h2>
                        <p className="lead text-muted">The principles that guide everything we do</p>
                    </div>
                    
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center scale-in stagger-1 process-step">
                                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                    <i className="bi bi-award text-white fs-2"></i>
                                </div>
                                <h5>Quality Excellence</h5>
                                <p className="text-muted small">Maintaining the highest standards in every product we produce</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center scale-in stagger-2 process-step">
                                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                    <i className="bi bi-recycle text-white fs-2"></i> 
                                </div>
                                <h5>Sustainability</h5>
                                <p className="text-muted small">Committed to environmental responsibility and sustainable practices</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center scale-in stagger-3 process-step">
                                <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                    <i className="bi bi-lightbulb text-white fs-2"></i>
                                </div>
                                <h5>Innovation</h5>
                                <p className="text-muted small">Continuously improving our processes and product offerings</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center scale-in stagger-4 process-step">
                                <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                    <i className="bi bi-people text-white fs-2"></i>
                                </div>
                                <h5>Customer Focus</h5>
                                <p className="text-muted small">Putting our customers' needs at the heart of our business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="slide-in-left">
                                <h2 className="display-5 fw-bold text-primary mb-4">Why Choose Shree Radhe Agro Foods?</h2>
                                <p className="lead text-muted mb-4">
                                    We stand out in the industry for our commitment to quality, 
                                    innovation, and customer satisfaction.
                                </p>
                                
                                <div className="row gy-3">
                                    <div className="col-12">
                                        <div className="d-flex align-items-start">
                                            <i className="bi bi-check-circle-fill text-success fs-4 me-3 mt-1"></i>
                                            <div>
                                                <h6 className="fw-semibold">Advanced Technology</h6>
                                                <p className="text-muted small">State-of-the-art processing facilities with cutting-edge drying technology</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="d-flex align-items-start">
                                            <i className="bi bi-check-circle-fill text-success fs-4 me-3 mt-1"></i>
                                            <div>
                                                <h6 className="fw-semibold">Quality Assurance</h6>
                                                <p className="text-muted small">Rigorous quality control processes and international certifications</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="d-flex align-items-start">
                                            <i className="bi bi-check-circle-fill text-success fs-4 me-3 mt-1"></i>
                                            <div>
                                                <h6 className="fw-semibold">Global Reach</h6>
                                                <p className="text-muted small">Serving customers worldwide with reliable logistics and support</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="d-flex align-items-start">
                                            <i className="bi bi-check-circle-fill text-success fs-4 me-3 mt-1"></i>
                                            <div>
                                                <h6 className="fw-semibold">Sustainable Sourcing</h6>
                                                <p className="text-muted small">Partnering with local farmers and promoting sustainable agriculture</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="slide-in-right">
                                <img 
                                    src={about2} 
                                    className="img-fluid rounded-4 shadow-lg hover-lift" 
                                    alt="Quality Control" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Statistics */}
            {/* <section className="py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 mb-4">
                            <div className="scale-in stagger-1">
                                <div className="display-6 fw-bold text-primary mb-2">15+</div>
                                <p className="text-muted">Years of Excellence</p>
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
                                <p className="text-muted">Satisfied Customers</p>
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
            </section> */}

            {/* Call to Action */}
            <section className="py-5 bg-primary text-white">
                <div className="container text-center">
                    <div className="fade-in-up">
                        <h2 className="display-5 fw-bold mb-4">Ready to Partner With Us?</h2>
                        <p className="lead mb-4 opacity-75">
                            Be part of our family--your success is our story. 
                        </p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <a href="/contact" className="btn btn-primary-light btn-lg hover-lift">
                                <i className="bi bi-envelope text-white me-2"></i>
                                Get in Touch
                            </a>
                            <a href="/products" className="info btn btn-primary-light btn-lg hover-lift">
                                <i className="bi bi-box me-2"></i>
                                View Products
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs