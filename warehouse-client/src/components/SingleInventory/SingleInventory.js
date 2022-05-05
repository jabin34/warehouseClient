import React from 'react';
import { Card, Col} from 'react-bootstrap';
import './SingleInventory.css';
const SingleInventory = ({item}) => {
  console.log(item);
  const {name,img,desc,price,quantity,supplier} = item;
    return (
      
      <Col >
      <Card className='border-0'>
        <Card.Img variant="top" src={img}  />
        <Card.Body>
          <div className='d-flex align-center justify-content-between align-items-center text-bold p-1'>
          <h6 className='fw-bold'>{name}</h6><span className='price'>${price}</span>
          </div>
          <div className='fw-light text-muted p-1'>{desc}</div>
         <div className='d-flex align-center justify-content-between align-items-center text-bold p-1'>
           <ul>
             <li>Quantity:{quantity}</li>
             <li>Supplier:{supplier}</li>
           </ul>
           <div className='btn-color border-0 p-1'>Update</div>
         </div>
         
        </Card.Body>
      </Card>
    </Col>
            
        
       
    );
};

export default SingleInventory;