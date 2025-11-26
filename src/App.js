import './App.css';
import React, { useEffect } from 'react';
import Header from './component/Header';
import ScrollToTop from './component/ScrollToTop';
import './assets/css/main.css'
import './assets/css/modern-ui.css'
import './assets/css/quality-control.css'
import './assets/css/mobile-nav-fixes.css'
import useMobileDetection from './hooks/useMobileDetection';
// import './assets/img/favicon.png'
// import './assets/img/apple-touch-icon.png'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './component/Footer';
import DeveloperInfo from './component/DeveloperInfo';
import Contact from './component/Contact';
import PotatoToFlakes from './component/PotatoToFlakes';
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import Product from './component/Product';
import Products from './component/Products';
import PotatoFlakes from './component/PotatoFlakes';
import Milled from './component/Milled';
import AdminDashboard from './component/AdminDashboard';
// import ProtectedRoute from './component/ProtectedRoute';
import ValuesSection from './component/ValuesSection';
import CTASection from './component/CTASection';
import ResetPassword from './component/ResetPassword';

function App() {
  const { isMobile } = useMobileDetection();

  useEffect(() => {
    // Load mobile-optimized CSS only on mobile devices
    if (isMobile) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/src/assets/css/mobile-optimized.css';
      link.id = 'mobile-optimized-css';
      document.head.appendChild(link);
    } else {
      // Remove mobile CSS on desktop
      const mobileCSS = document.getElementById('mobile-optimized-css');
      if (mobileCSS) {
        mobileCSS.remove();
      }
    }
  }, [isMobile]);

  return (
    <>
    
    <BrowserRouter>
    <ScrollToTop />
    <Header title = "Shri Radhe Agro Foods"/>
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
             <PotatoFlakes title="Shri Radhe Agro Foods - Potato Flakes"/>
          </React.Fragment>}></Route>
        <Route path='milledProducts' element={
          <React.Fragment>
             <Milled/>
          </React.Fragment>}></Route>
        <Route path='admin' element={
          <AdminDashboard/>
        }></Route>
        <Route path='developer' element={
          <div className="container py-5">
            <DeveloperInfo />
          </div>
        }></Route>
        <Route path='resetpassword' element={
          <ResetPassword/>
        }></Route>
        <Route path='auth/resetpassword' element={
          <ResetPassword/>
        }></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
