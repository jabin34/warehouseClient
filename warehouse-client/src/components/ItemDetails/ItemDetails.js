
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";

import "./ItemDetails.css";
const ItemDetails = () => {
  const [qty, setQty] = useState(0);
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `http://localhost:4000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((item) => {
        setData(item);
        setQty(item.quantity);
      });
  }, [id]);

  const quantityDecrease = () => {
    let newQty = qty - 1;
    if (newQty <= 0) {
      newQty = 0;
      setQty(0);
    } else {
      setQty(newQty);
    }
    console.log(newQty);
    const url = `http://localhost:4000/inventory/${id}`;
    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQty }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  const addQuantity = () =>{
      
  }
  return (
    <div className="container p-5 mt-3">
      <div className="row">
        <div className="col-md-6">
          <Col>
            <Card className="border-0">
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <div className="d-flex align-center justify-content-between align-items-center text-bold p-1">
                  <h6 className="fw-bold">{data.name}</h6>
                  <span className="price">${data.price}</span>
                </div>
                <div className="fw-light text-muted p-1">{data.desc}</div>
                <div className="d-flex align-center justify-content-between align-items-center text-bold p-1">
                  <ul>
                    <li>Quantity:{qty}</li>
                    <li>Supplier:{data.supplier}</li>
                  </ul>
                  <div
                    className="btn-color border-0 p-1"
                    onClick={() => quantityDecrease()}
                  >
                    Delivered
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div className="col-md-6">
          <Col>
            <Card>
              <h4 className="text-center  text-bold ">Restock Item</h4>
              <Stack direction="horizontal" gap={4}>
                <Form.Control
                type="number"
                  className="me-auto"
                  placeholder="Add your item here..."
                />
                <Button variant="secondary" onClick={()=>addQuantity()}>Add Quantity</Button>
                <div className="vr" />
                {/* <Button variant="outline-danger">Reset</Button> */}
              </Stack>
            </Card>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
