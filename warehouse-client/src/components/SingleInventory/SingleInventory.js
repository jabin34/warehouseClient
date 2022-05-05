import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleInventory.css';
const SingleInventory = ({item}) => {
  const navigate = useNavigate();
  console.log(item);
  const {_id,name,img,desc,price,quantity,supplier} = item;
  const inventoryDetails =(id)=>{
   navigate(`inventory/${id}`);
  }
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
           <div className='btn-color border-0 p-1' onClick={()=>{inventoryDetails(_id)}}>Update</div>
         </div>
         
        </Card.Body>
      </Card>
    </Col>
            
        
       
    );
};

export default SingleInventory;