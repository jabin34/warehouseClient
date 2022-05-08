import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { MdAddCircle } from "react-icons/md";
const AddItem = () => {
  const [user] = useAuthState(auth);
  const nameRef = useRef("");
  const priceRef = useRef("");
  const descRef = useRef("");
  const imgRef = useRef("");
  const supplierRef = useRef("");
  const quantityRef = useRef("");
  //console.log(user.email);
  const handleAddItem = (e) => {
    e.preventDefault();
    const email = user.email;
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const desc = descRef.current.value;
    const img = imgRef.current.value;
    const supplier = supplierRef.current.value;
    const qty = quantityRef.current.value;
    const data = {
      email: email,
      name: name,
      price: price,
      desc: desc,
      img: img,
      supplier: supplier,
      quantity: qty,
    };
    fetch("https://pacific-tor-79361.herokuapp.com/inventory", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        if (result.insertedId) {
          toast("Item added Successfully!!!");
          e.target.reset();
        }
      });
  };
  return (
    <div className="container p-3 border mt-5 rounded shadow-sm ">
      <h3 className="text-center">Add New Item</h3>
      <Form className="mt-5 w-50 mx-auto  max-vw-100 " onSubmit={handleAddItem}>
        <Row className="mb-3">
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              disabled
              value={user?.email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              placeholder="Enter product name"
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            ref={priceRef}
            type="number"
            placeholder="Enter product price"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            ref={descRef}
            type="text"
            placeholder="Add Description..."
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Add Image link..."
            required
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Supplier's Name</Form.Label>
            <Form.Control
              ref={supplierRef}
              type="text"
              placeholder="Supplier's Name"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              ref={quantityRef}
              type="number"
              placeholder="Enter product quantity"
              required
            />
          </Form.Group>
        </Row>

        <Button
          className="btn-color border-0 d-flex align-items-center justify-content-between px-5"
          type="submit"
        >
          <MdAddCircle></MdAddCircle>
          <span>Add </span>
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
