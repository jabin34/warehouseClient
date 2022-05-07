import React from 'react';
import Banner from '../Banner/Banner';
import CarSearch from '../CarSearch/CarSearch';
import Feature from '../Feature/Feature';
import Inventory from '../Inventory/Inventory';
import './Home.css';
const Home = () => {
    return (
        <div className=''>
            
            <Banner/>
           <CarSearch/>
            <div className='mx-auto p-5'>
            <Inventory></Inventory>
            </div>
            <Feature/>
            
        </div>
    );
};

export default Home;