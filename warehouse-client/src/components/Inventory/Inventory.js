import React from 'react';
import useInventory from '../../hooks/useInventory';
import './Inventory.css';
const Inventory = () => {
    const[data] = useInventory();
    return (
        <div className='d-flex gap-3'>
            {data.map(item=><h1>{item.name}</h1>)}
        </div>
    );
};

export default Inventory;