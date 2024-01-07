import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import SideContent from "./SideContent";
import Products from "./Products";
import Testimonial from "./Testimonial";
import Cta from "./Cta";
import Service from "./Service";
import Blog from "./Blog";
import Footer from "./Footer";




function Hero() {
  return (
    <>
      <main>
        <Banner/>
        <Category/>
        <div className="product-container">
          <div className="container">
            <SideContent/>
            <Products/>
          </div>
        </div>
  
        <div>
          <div className="container">
            <div className="testimonials-box">
              
              <Testimonial/>
              <Cta/>
              <Service/>

            </div>
          </div>
        </div>
   
         <Blog/>
        
      </main>
      <Footer/>
    </>
  );
}

export default Hero;
