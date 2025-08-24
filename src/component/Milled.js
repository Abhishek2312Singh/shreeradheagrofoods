import React from 'react'
import bgImg from '../assets/img/menu/milled_bg.webp'
import product from '../assets/img/menu/milled-product.png'

const Milled = () => {
  return (
    <div>
      <div className='bg-container'  style={{
        backgroundImage: `url(${bgImg})`,
        objectFit: 'contain',
        backgroundSize: 'cover',
        height: '500px',
        width: '100%'
      }}>
       <h1 className="cover-text" style={{color: 'white', position: 'absolute', top: '50%', left:'45%'}} >Milled Products</h1>
    </div>
    <div className="card" style={{width: "auto"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product} className="img-fluid rounded-start" style={{width: '300px',marginLeft:'40px'}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">Milled</h3>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Milled
