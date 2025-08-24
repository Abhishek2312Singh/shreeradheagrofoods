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

      
      <div className="container">
        <div className="tab-content" >

          <div className="tab-pane fade active show" id="menu-starters">

            <div className="tab-header text-center">
              <h3>Manufacturing Process</h3>
            </div>

            <div className="row gy-5">

              <div className="col-lg-4 menu-item">
                <a  className="glightbox"><img src={dish1} className="menu-img img-fluid" alt=""/></a>
                <h4>Fresh Potato</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <a className="glightbox"><img src={dish2} className="menu-img img-fluid" alt=""/></a>
                <h4>Washing</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <a className="glightbox"><img src={dish3} className="menu-img img-fluid" alt=""/></a>
                <h4>Peeling</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <a className="glightbox"><img src={dish4} className="menu-img img-fluid" alt=""/></a>
                <h4>Cooking</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>
              <div className="col-lg-4 menu-item">
                <a className="glightbox"><img src={dish5} className="menu-img img-fluid" alt=""/></a>
                <h4>Mashing</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <a className="glightbox"><img src={dish6} className="menu-img img-fluid" alt=""/></a>
                <h4>Drying</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <a className="glightbox"><img src={dish7} className="menu-img img-fluid" alt=""/></a>
                <h4>Potato Flakes</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
              </div>
              <div className="col-lg-4 menu-item">
                <a className="glightbox"><img src={dish8} className="menu-img img-fluid" alt=""/></a>
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