import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
       <div className='img-container position-relative'>
        <img className='w-100 back-drop' src='https://i.ibb.co/Vwbb0cv/slider-bg01.jpg' alt='pic'/>
        <div className="top-left">
            <span className='text-uppercase txt-color d-none d-md-block'>Best auto service</span>
            <h1 className='fw-bold'>Professional Service Provide</h1>
            <p className='fw-bold'>Find the Perfect Car With Our Car Finder Tool</p>
        </div>
       </div>
         
    );
};

export default Banner;