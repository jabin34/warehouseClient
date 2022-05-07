import React from "react";
import useInventory from "../../hooks/useInventory";
import "./Inventory.css";
import SingleInventory from "../SingleInventory/SingleInventory";
import { Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Inventory = () => {
  const [data] = useInventory();
  //console.log(data);
  return (
    <div className="mt-4">
       <h3 className="fw-bold border-4 p-2 border-bottom border-warning mb-5">Inventory</h3>
      <Row xs={1} md={3} className="g-4 ">
        {data.map((item) => (
          <SingleInventory key={item._id} item={item} />
        ))}
      </Row>
     <div className="d-flex p-3 justify-content-center "> <Link to="/manage">show more</Link></div>
    </div>
  );
};

export default Inventory;
