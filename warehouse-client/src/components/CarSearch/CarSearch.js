import React from "react";
import "./CarSearch.css";
import { AiFillCar } from "react-icons/ai";
import { Button, Card, Form } from "react-bootstrap";
const CarSearch = () => {
  return (
    <div className="container mx-auto ">
      <Card>
        <div className="d-flex justify-content-start p-1 mx-3">
          <div className="text-orange font-size ">
            <AiFillCar />
          </div>
          <h4 className="fw-bold p-1 ">
            LOOKING FOR A <span className="text-orange">CAR?</span>
          </h4>
        </div>
        <div className="d-flex flex-md-row justify-content-between p-2 flex-sm-column flex-column ">
          <div className="p-3">
              
            <p className="fw-bold font-sear">MAKERS OF VEHICLE</p>
            <Form.Select aria-label="Default select example ">
              <option>Select Model</option>
              <option value="1">Mercedes-Benz</option>
              <option value="2">Volkswagen</option>
              <option value="3">Aston-Martin</option>
              <option value="4">Lamborghini</option>
              <option value="5">Koenigsegg</option>
            </Form.Select>
          </div>
          <div className="p-3 ">
              
              <p className="fw-bold font-sear">MISSING MODEL</p>
              <Form.Select aria-label="Default select example  " className="">
              <option>Select Model</option>
              <option value="">Volkswagen SC20</option>
                <option value="">Honda CBR9</option>
                <option value="">Aston K35l8</option>
                <option value="">BMW SC20</option>
                <option value="">Toyota T86LM</option>
                
            </Form.Select>
          
          </div>
          <div className="p-3"> 
          <p className="fw-bold font-sear">VEHICLE STATUS</p>
          <Form.Select aria-label="Default select example  " className="">
              <option>Select Model</option>
              <option value="">SORN Status</option>
                <option value="">Fuel Type</option>
                <option value="">Last Log Book</option>
                <option value="">MOT Expires</option>
                <option value="">Vehicle TAX</option>
            </Form.Select>
        </div>
          <div className=" p-3">
              <p className="fw-bold font-sear">ANY MODEL</p>
              <Form.Select aria-label="Default select example  " className="">
              <option value="">BMW 7 Series</option>
                <option value="">Mercedes-Benz</option>
                <option value="">Volkswagen</option>
                <option value="">Aston-Martin</option>
                <option value="">Lamborghini</option>
                <option value="">Koenigsegg</option>

            </Form.Select>
              </div>
          <div className="p-3"><p></p><Button className="p-3 m-1 btn-color border-0">SELECT VEHICLE</Button> </div>
        </div>
      </Card>
    </div>
  );
};

export default CarSearch;
