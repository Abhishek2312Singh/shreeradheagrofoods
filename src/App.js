import './App.css';
import React  from 'react';
import Header from './component/Header';
import './assets/css/main.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/img/favicon.png'
import './assets/img/apple-touch-icon.png'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './component/Footer';
import Contact from './component/Contact';
import PotatoToFlakes from './component/PotatoToFlakes';
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import Product from './component/Product';
import Products from './component/Products';
import PotatoFlakes from './component/PotatoFlakes';
import Milled from './component/Milled';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header title = "SRAF - Home"/>
      <Routes>
        <Route exact path='/'element={
        <React.Fragment>
          <Hero/>
          <PotatoToFlakes/>
          <Product/>
        </React.Fragment>
        } />
        <Route path='aboutus' element={
          <React.Fragment>
            <AboutUs/>
          </React.Fragment>
        }></Route>
        <Route path='contact' element={
          <React.Fragment>
             <Contact/>
          </React.Fragment>}></Route>
        <Route path='products' element={
          <React.Fragment>
             <Products/>
          </React.Fragment>}></Route>
        <Route path='potatoFlakes' element={
          <React.Fragment>
             <PotatoFlakes title="SRAF - Potato Flakes"/>
          </React.Fragment>}></Route>
        <Route path='milledProducts' element={
          <React.Fragment>
             <Milled/>
          </React.Fragment>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
