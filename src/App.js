import './App.css';
import React  from 'react';
import Header from './component/Header';
import ScrollToTop from './component/ScrollToTop';
import './assets/css/main.css'
import './assets/css/modern-ui.css'
import './assets/css/quality-control.css'
import './assets/css/mobile-nav-fixes.css'
// import './assets/img/favicon.png'
// import './assets/img/apple-touch-icon.png'
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
import Admin from './component/Admin';
import ProtectedRoute from './component/ProtectedRoute';
import ValuesSection from './component/ValuesSection';
import CTASection from './component/CTASection';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <ScrollToTop />
    <Header title = "Shri Radhe Agro Food"/>
      <Routes>
        <Route exact path='/'element={
        <React.Fragment>
          <Hero/>
          <ValuesSection/>
          <PotatoToFlakes/>
          <Product/>
          <CTASection/>
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
             <PotatoFlakes title="Shri Radhe Agro Food - Potato Flakes"/>
          </React.Fragment>}></Route>
        <Route path='milledProducts' element={
          <React.Fragment>
             <Milled/>
          </React.Fragment>}></Route>
        {/* <Route path='admin' element={
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }></Route> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
