import React from 'react'
import bgImg from '../assets/img/menu/Cover.jpg'
import Product from './Product'

export default function Products() {
  return (
    <>
    <div className='bg-container'  style={{
        backgroundImage: `url(${bgImg})` ,
        objectFit: 'contain',
        backgroundSize: "cover",
        height: "500px",
        width: '100%'
      }}>
       <h1 className="cover-text" style={{color: 'white', position: 'absolute', top: '45%', left:'45%'}} >Our Products</h1>
    </div>
      <Product/>
    </>
  )
}
