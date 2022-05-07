import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleInventory.css';
import {IoLogoDropbox } from "react-icons/io";
import {RiAccountPinBoxFill} from "react-icons/ri";
const SingleInventory = ({item}) => {
  const navigate = useNavigate();
  //console.log(item);
  const {_id,name,img,desc,price,quantity,supplier} = item;
  const inventoryDetails =(id)=>{
   navigate(`inventory/${id}`);
  }
    return (
      
      <Col >
      <Card className='border-0 '>
        <Card.Img variant="top" src={img}  />
        <Card.Body>
          <div className='d-flex flex-md-row flex-column align-center justify-content-between align-items-center text-bold p-1'>
          <h6 className='fw-bold border-2 p-2 border-bottom border-warning'>{name}</h6><span className='price'>${price}</span>
          </div>
          <div className='fw-light text-muted p-1 my-2 text-justify font-des'>{desc}</div>
          <div className='d-flex align-center justify-content-md-between  flex-md-row flex-column align-items-center text-bold py-3'>

           <div className='font-f'><span className='logo-clr'><IoLogoDropbox/></span> Quantity:<span className='clr'>{quantity}</span></div>
           <div className='font-f'><span className='logo-clr'><RiAccountPinBoxFill/></span> Supplier:{supplier}</div>
           
         </div>
         <div className='btn-clr border-0 rounded text-center p-1' onClick={()=>{inventoryDetails(_id)}}>UPDATE</div>
        </Card.Body>
      </Card>
    </Col>
            
        
       
    );
};

export default SingleInventory;