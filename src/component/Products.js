import React from 'react'
import bgImg from '../assets/img/menu/Cover.jpg'
import farmFresh from '../assets/img/menu/farmFresh.jpg'
import Product from './Product'

export default function Products() {
  return (
    <>
      <div className='bg-container' style={{
        backgroundImage: `url(${bgImg})`,
        objectFit: 'contain',
        backgroundSize: "cover",
        height: "500px",
        width: '100%'
      }}>
        <h1 className="cover-text" style={{ color: 'white', position: 'absolute', top: '45%', left: '45%' }} >Our Products</h1>
      </div>
      <Product />
      <div className='bg-container' style={{
        backgroundImage: `url(${farmFresh})`,
        objectFit: 'contain',
        backgroundSize: "cover",
        height: "1300px",
        width: '100%',
        position: "relative",
        filter: 'brightness(40%)'
      }}>

        <h1 className='cover-heading' style={{ color: 'white', fontSize: '3.75rem', fontWeight: 900, position: 'absolute', top: '5%', left: '20%' }} >Quality Control</h1>
        <div className="cover-points" style={{ color: 'white', fontSize: '1.25rem', position: 'absolute', top: '15%', left: '5%', width:'40%' }} >
          <span>Raw Material Quality Control (Before processing)</span>
          <ul>
            <li>Variety & maturity → Right potato type with proper starch content.</li>
            <li>Visual inspection → No rot, sprouting, green skin (indicates solanine).</li>
            <li>Size & uniformity → Helps in even drying.</li>
            <li>Moisture content → Usually 75–80% in fresh potatoes.</li>
            <li>Defect count → Foreign matter, stones, soil, or other plant debris.</li>
          </ul>
          <span>Process Control (During manufacturing)</span>
          <ul>
            <li>Washing & peeling check → No dirt or peel residues.</li>
            <li>Blanching control → Time/temperature to inactivate enzymes.</li>
            <li>Drying parameters → Proper temperature and airflow to prevent case hardening or microbial growth.</li>
            <li>Moisture monitoring → Target final moisture for stability (often 6–8% for flakes/powder).</li>
            <li>Hygiene & sanitation → Prevent contamination.</li>
          </ul>
          <span> Finished Product Testing (After drying)</span>
          <ul>
            <li>Moisture content → Low enough to prevent spoilage.</li>
            <li>Color measurement → L*, a*, b* values for consistency.</li>
            <li>Flavor & aroma → No burnt, moldy, or foreign tastes.</li>
            <li>Texture → Crispness for chips, free-flowing powder for granules.</li>
            <li>Bulk density → Consistency in packing.</li>
            <li>Microbiological safety → Total plate count, yeast & mold, coliforms.</li>
            <li>Chemical safety → Residual pesticides, acrylamide level for chips</li>
          </ul>
          <span> Packaging & Storage QC</span>
          <ul>
            <li>Sealing integrity → No leaks.</li>
            <li>Oxygen/moisture barrier check → Packaging films.</li>
            <li>Shelf-life testing → Accelerated and real-time.</li>
            <li>Label verification → Nutritional facts, batch number, manufacturing date.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
