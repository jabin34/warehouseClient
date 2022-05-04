import React from 'react';
import Inventory from '../Inventory/Inventory';
import './Home.css';
const Home = () => {
    return (
        <div className='container p-4' >
            home
            <div className='m-2'>
            <Inventory></Inventory>
            </div>
            
        </div>
    );
};

export default Home;