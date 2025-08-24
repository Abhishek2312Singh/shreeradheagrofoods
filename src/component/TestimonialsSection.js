import React from 'react'

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Anil Bansal",
      company: "Food Industry Expert",
      content: "It's rare to see a company grow across generations with such integrity. Shri Radhe Agro Food has set a benchmark in every sector they've entered. Truly dependable and forward-thinking.",
      rating: 5
    },
    {
      id: 2,
      name: "Pooja Sharma",
      company: "Restaurant Chain Owner",
      content: "We have partnered with Shri Radhe Agro Food recently, and the quality of their potato flakes is excellent. They bring the same professionalism and commitment that made them leaders in the industry.",
      rating: 5
    },
    {
      id: 3,
      name: "Rajeev Mehra",
      company: "Food Manufacturer",
      content: "Shri Radhe Agro Food' legacy is truly inspiring. Their growth from a small unit to a diversified powerhouse reflects unmatched dedication and vision. We've trusted their products for years.",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`bi ${index < rating ? 'bi-star-fill text-warning' : 'bi-star text-muted'}`}
      ></i>
    ))
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-primary mb-3">
            What People Say About Us
          </h2>
          <p className="lead text-muted">
            Don't just take our word for it - hear from our valued customers and partners
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6">
              <div className="testimonial-card hover-lift h-100">
                <div className="testimonial-content p-4">
                  <div className="testimonial-rating mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="testimonial-text mb-4">
                    <i className="bi bi-quote text-primary fs-1 me-2 opacity-25"></i>
                    {testimonial.content}
                  </blockquote>
                  
                  <div className="testimonial-author">
                    <div className="d-flex align-items-center">
                      <div className="author-avatar me-3">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                          <span className="fw-bold fs-5">{testimonial.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                        <p className="text-muted small mb-0">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="#contact" className="btn btn-outline-primary btn-lg">
            <i className="bi bi-chat-quote me-2"></i>
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
