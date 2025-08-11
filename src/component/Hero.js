import React from 'react'
import banner from '../assets/img/menu/potato.jpg'
import photo from '../assets/img/people/chairperson.jpg'
import arrow from '../assets/img/menu/profile-down-arrow.svg'

function Hero() {
  return (
    <>
      <section id="hero" className="hero section light-background">

        <div className="container">
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Enjoy Your Healthy<br />Delicious Food</h1>
              <p data-aos-delay="100">Full Discription</p>
              <div className="d-flex" data-aos-delay="200">
                <a href="#manufacture" className="btn-get-started underline">Know More</a>
                <a href="https://www.youtube.com/watch?v=91QYV47fsBA" target='_blank' className="glightbox btn-watch-video d-flex align-items-center underline"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 hero-img">
              <img src={banner} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>

      </section>

      <div className="card mb-3">
        <div class="row g-0" >
          <div class="col-md-4">
            <img src={photo} class="my-card img-fluid rounded-start" style={{height: '490px', width: '400px',objectFit:'contain'}} alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <img src={arrow} class="img-fluid rounded-start" style={{display: 'block', height: 'auto', maxWidth: '100%'}} alt="..." />
              <h5 class="card-title" style={{}}>chairperson</h5>
              <p class="card-text">Chairman, SRAF </p>
              <button type="button" class="btn btn-outline-secondary">View Profile</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero