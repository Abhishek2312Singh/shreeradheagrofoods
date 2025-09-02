import React, { useState } from 'react'
import bgImg from '../assets/img/menu/potatoFlakes.jpg'
import product1 from '../assets/img/menu/product1.png';
import LazyImage from './LazyImage'
import useMobileDetection from '../hooks/useMobileDetection'

export default function PotatoFlakes(props) {
  const { isMobile } = useMobileDetection();
  
  useState(()=>{
    document.title = props.title || "Potato Flakes - Shri Radhe Agro Foods";
    
    // Add meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium quality potato flakes for industrial and commercial use. Leading exporter from Mathura, India. Bulk orders available.');
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://shriradheagrofoods.com/potatoFlakes';
  })
  return (
    <div>
      <div 
        className='bg-container'  
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed'
        }}
      >
        <h1 className="cover-text">Potato Flakes</h1>
      </div>
    <div className="card product-card" style={{width: "auto"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <LazyImage 
        src={product1} 
        className="img-fluid rounded-start" 
        style={{width: isMobile ? '100%' : 'auto'}} 
        alt="Potato Flakes"
      />
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
