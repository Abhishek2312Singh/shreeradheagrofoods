import React from 'react'
import dish1 from '../assets/img/menu/freshpotato_round.png'
import dish2 from '../assets/img/menu/washing.png'
import dish3 from '../assets/img/menu/peeling.png'
import dish4 from '../assets/img/menu/cooking.png'
import dish5 from '../assets/img/menu/mashing.png'
import dish6 from '../assets/img/menu/drying.png'
import dish7 from '../assets/img/menu/flakes.png'
import dish8 from '../assets/img/menu/Potato-Powder.png'

function PotatoToFlakes() {
  
  return (
    <><section id="menu" className="menu section">

        <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-primary mb-3">
              Uses of Potato Flakes
            </h2>
            <p className="lead text-muted">
              Potato flakes are a versatile ingredient loved by both home cooks and the food industry. 
              They’re easy to use, have a long shelf life, and bring the natural taste of potatoes to countless dishes.
              <br/> "Potato flakes are more than just an ingredient — they’re a smart solution for taste, convenience, and innovation in food and beyond."
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="process-card text-center hover-lift">
                <div className="process-icon mb-3">
                  <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    {/* <i className="bi bi-factory text-white fs-1"></i> */}
                    <i className="fa-solid fa-industry" style={{fontSize:"35px"}}></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Food Industry</h5>
                <p className="text-muted small">
                  Widely used in ready-to-eat meals, dehydrated mixes, and frozen foods for taste, stability, and convenience.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="process-card text-center hover-lift">
                <div className="process-icon mb-3">
                  <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    {/* <i className="bi bi-droplet text-white fs-1"></i> */}
                    <i className="fa-solid fa-utensils" style={{fontSize:"35px"}}></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Everyday Cooking</h5>
                <p className="text-muted small">
                  Quickly prepare mashed potatoes, soups, and gravies, or use as a binder in cutlets, patties, and dumplings.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="process-card text-center hover-lift">
                <div className="process-icon mb-3">
                  <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    {/* <i className="bi bi-fire text-white fs-1"></i> */}
                    <i className="fa-solid fa-cookie-bite" style={{fontSize:"35px"}}></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Baking & Snacks</h5>
                <p className="text-muted small">
                  Adds softness and moisture to breads, biscuits, and pancakes, and is a key ingredient in crispy potato snacks.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="process-card text-center hover-lift">
                <div className="process-icon mb-3">
                  <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    {/* <i className="bi bi-box text-white fs-1"></i> */}
                    <i className="fa-solid fa-paw" style={{fontSize:"35px"}}></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Beyond the Kitchen</h5>
                <p className="text-muted small">
                 Nutritious additive for livestock and pet food. Also used in fermentation industries, and eco-friendly packaging as a sustainable resource.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container">
        
        <div className="tab-content" >

          <div className="tab-pane fade active show" id="menu-starters">

            <div className="tab-header text-center">
              <h3>Manufacturing Process</h3>
            </div>

            <div className="row gy-5">

              <div className="col-lg-4 menu-item">
                <a href={dish1} className="glightbox" aria-label="View Fresh Potato image"><img src={dish1} className="menu-img img-fluid" alt="Fresh Potato"/></a>
                <h4>Fresh Potato</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <a href={dish2} className="glightbox" aria-label="View Washing image"><img src={dish2} className="menu-img img-fluid" alt="Washing"/></a>
                <h4>Washing</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <a href={dish3} className="glightbox" aria-label="View Peeling image"><img src={dish3} className="menu-img img-fluid" alt="Peeling"/></a>
                <h4>Peeling</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <a href={dish4} className="glightbox" aria-label="View Cooking image"><img src={dish4} className="menu-img img-fluid" alt="Cooking"/></a>
                <h4>Cooking</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>
              <div className="col-lg-4 menu-item">
                <a href={dish5} className="glightbox" aria-label="View Mashing image"><img src={dish5} className="menu-img img-fluid" alt="Mashing"/></a>
                <h4>Mashing</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <a href={dish6} className="glightbox" aria-label="View Drying image"><img src={dish6} className="menu-img img-fluid" alt="Drying"/></a>
                <h4>Drying</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <a href={dish7} className="glightbox" aria-label="View Potato Flakes image"><img src={dish7} className="menu-img img-fluid" alt="Potato Flakes"/></a>
                <h4>Potato Flakes</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>
              <div className="col-lg-4 menu-item">
                <a href={dish8} className="glightbox" aria-label="View Milling image"><img src={dish8} className="menu-img img-fluid" alt="Milling"/></a>
                <h4>Milling</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section></>
  )
}

export default PotatoToFlakes