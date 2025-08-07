import React from 'react'
import banner from '../assets/img/menu/potato.jpg'
function Hero() {
  return (
    <>
    <section id="hero"  className= "hero section light-background">

      <div  className= "container">
        <div  className= "row gy-4 justify-content-center justify-content-lg-between">
          <div  className= "col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1  >Enjoy Your Healthy<br/>Delicious Food</h1>
            <p   data-aos-delay="100">We are team of talented designers making websites with Bootstrap</p>
            <div  className= "d-flex"   data-aos-delay="200">
              <a href="#manufacture"  className= "btn-get-started underline">Now More</a>
              <a href="https://www.youtube.com/watch?v=91QYV47fsBA" target='_blank' className= "glightbox btn-watch-video d-flex align-items-center underline"><i  className= "bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
          <div  className= "col-lg-5 order-1 order-lg-2 hero-img">
            <img src={banner}  className= "img-fluid animated" alt=""/>
          </div>
        </div>
      </div>

    </section>

    </>
  )
}

export default Hero