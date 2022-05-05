import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import './ItemDetails.css';
const ItemDetails = () => {
    const{id} = useParams();
    const [data,setData] = useState([]);
    useEffect(()=>{
        const url =`http://localhost:4000/inventory/${id}`
        fetch(url) 
        .then(res=>res.json())
        .then(item=>setData(item));
    },[])
   

    return (
        <div className='container p-5 mt-3'>
         <Col >
      <Card className='border-0'>
        <Card.Img variant="top" src={data.img}  />
        <Card.Body>
          <div className='d-flex align-center justify-content-between align-items-center text-bold p-1'>
          <h6 className='fw-bold'>{data.name}</h6><span className='price'>${data.price}</span>
          </div>
          <div className='fw-light text-muted p-1'>{data.desc}</div>
         <div className='d-flex align-center justify-content-between align-items-center text-bold p-1'>
           <ul>
             <li>Quantity:{data.quantity}</li>
             <li>Supplier:{data.supplier}</li>
           </ul>
           <div className='btn-color border-0 p-1'>Update</div>
         </div>
         
        </Card.Body>
      </Card>
    </Col>
           
        </div>
    );
};

export default ItemDetails;