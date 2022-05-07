import React from 'react';
import './Footer.css';
import logo from'../../assets/carlogo.png';
import {BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
    return (
     
<footer class="text-center text-lg-start bg-dark text-muted mt-5">
  
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
   
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
  
    <div>
      <a href="#" class="me-4 text-reset">
       <BsFacebook/>
      </a>
      <a href="#" class="me-4 text-reset">
        <BsTwitter/>
      </a>
      <a href="#" class="me-4 text-reset">
        <BsGoogle/>
      </a>
      <a href="#" class="me-4 text-reset">
        <BsInstagram/>
      </a>
      <a href="#" class="me-4 text-reset">
        <BsLinkedin/>
      </a>
      <a href="#" class="me-4 text-reset">
        <BsGithub/>
      </a>
    </div>
   
  </section>
  

 
  <section class="">
    <div class="container text-center text-md-start mt-5">
     
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
          <img
        src={logo}
        width="140"
        height="50"
        className="d-inline-block align-top"
        alt="car logo"
      />
          </h6>
          <p>
          We  supply quality car and accessories to the general public and automotive industry.
          </p>
        </div>
       

      
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">JAGUER M1 HYBRID</a>
          </p>
          <p>
            <a href="#!" class="text-reset">AUDI NEW BOM 800</a>
          </p>
          <p>
            <a href="#!" class="text-reset">MERCEDEZ BENZ EI8</a>
          </p>
          <p>
            <a href="#!" class="text-reset">BMW 8-Series 4-Door</a>
          </p>
        </div>
       

        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Inventory</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        

       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> JAPAN, TOKYO 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            isratjabinesha@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 81 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 81 234 567 89</p>
        </div>
       
      </div>
      
    </div>
  </section>
 

 
  <div class="text-center p-4" style={{' background-color': 'rgba(0, 0, 0, 0.05)'}}>
    © 2022 Copyright:
    <a class="text-reset fw-bold" href="#">isratjabiN</a>
  </div>
 
</footer>

    );
};

export default Footer;