import React from 'react'
import bgImg from '../assets/img/menu/potatoFlakes.jpg'
import product1 from '../assets/img/menu/product1.png';

export default function PotatoFlakes() {
  return (
    <div>
      <div className='bg-container'  style={{
        backgroundImage: `url(${bgImg})`,
        objectFit: 'contain',
        backgroundSize: 'cover',
        height: '500px',
        width: '100%'
      }}>
       <h1 className="cover-text" style={{color: 'white', position: 'absolute', top: '50%', left:'45%'}} >Potato Flakes</h1>
    </div>
    <div className="card" style={{width: "auto"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product1} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Potato Flakes</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
