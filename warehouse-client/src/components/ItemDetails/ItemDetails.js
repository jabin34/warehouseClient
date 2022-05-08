import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Form, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IoLogoDropbox } from "react-icons/io";
import { RiAccountPinBoxFill } from "react-icons/ri";
import "./ItemDetails.css";
const ItemDetails = () => {
  const [qty, setQty] = useState(0);
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `https://pacific-tor-79361.herokuapp.com/inventory/${id}`;
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
    //console.log(newQty);
    const url = `https://pacific-tor-79361.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQty }),
    })
      .then((res) => res.json())
      .then((result) => console.log("result"));
  };
  const qtyRef = useRef(qty);
  const addQuantity = () => {
    let addQty = qty;
    if (!addQty) {
      addQty = 0;
    }

    let newQty = parseInt(addQty) + parseInt(qtyRef.current.value);
    //console.log(qtyadd);
    setQty(newQty);
    const url = `https://pacific-tor-79361.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQty }),
    })
      .then((res) => res.json())
      .then((result) => console.log("result"));
  };
  return (
    <div className="container p-5 mt-3">
      <h2 className="text-center p-3">Product Details</h2>
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
                <div className="fw-light text-muted p-1 my-2 text-justify font-des">
                  {data.desc}
                </div>
                <div className="d-flex align-center justify-content-md-between  flex-md-row flex-column align-items-center text-bold py-3">
                  <div className="font-f">
                    <span className="logo-clr">
                      <IoLogoDropbox />
                    </span>{" "}
                    Quantity:<span className="clr">{qty}</span>
                  </div>
                  <div className="font-f">
                    <span className="logo-clr">
                      <RiAccountPinBoxFill />
                    </span>{" "}
                    Supplier:{data.supplier}
                  </div>
                </div>

                <div
                  className="btn-clr border-0 rounded text-center p-1"
                  onClick={() => quantityDecrease()}
                >
                  Delivered
                </div>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div className="col-md-6">
          <Col>
            <Card>
              <h4 className="text-center  text-bold p-1 ">Restock Item</h4>
              <Stack direction="horizontal" gap={4} className="p-2">
                <Form.Control
                  ref={qtyRef}
                  type="number"
                  className="me-auto p-1 w-75"
                  placeholder="Add your item here..."
                />
                <Button variant="secondary" onClick={() => addQuantity()}>
                  Add Quantity
                </Button>

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
