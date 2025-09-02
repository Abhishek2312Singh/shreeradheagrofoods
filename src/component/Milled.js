import React, { useEffect } from 'react'
import bgImg from '../assets/img/menu/milled_bg.webp'
import product from '../assets/img/menu/milled-product.png'
import LazyImage from './LazyImage'
import useMobileDetection from '../hooks/useMobileDetection'

const Milled = () => {
  const { isMobile } = useMobileDetection();
  
  useEffect(() => {
    document.title = "Milled Products - Shri Radhe Agro Foods";
    
    // Add meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'High-quality milled potato products for food industry. Premium dehydrated potato flour and processed products from Mathura, India.');
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://shriradheagrofoods.com/milledProducts';
  }, []);
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
        <h1 className="cover-text">Milled Products</h1>
      </div>
    <div className="card product-card" style={{width: "auto"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <LazyImage 
        src={product} 
        className="img-fluid rounded-start" 
        style={{width: isMobile ? '100%' : '300px', marginLeft: isMobile ? '0' : '40px'}} 
        alt="Milled Products"
      />
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
