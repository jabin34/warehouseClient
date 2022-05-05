import React from 'react';
import useInventory from '../../hooks/useInventory';
import './Inventory.css';

import SingleInventory from '../SingleInventory/SingleInventory';
import { Row } from 'react-bootstrap';
const Inventory = () => {
    const[data] = useInventory();
    return (
        <div className=''>
            <Row xs={1} md={3} className="g-4 " >
            {data.map(item =>
       <SingleInventory item={item}/>
    
)}</Row>
        </div>
    );
};

export default Inventory;