import React from "react";
import { Button, Table } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import "./ManageInventory.css";
import { FiPlusCircle } from "react-icons/fi";
import { ImBin, ImCog } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ManageInventory = () => {
  const [data, setData] = useInventory();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://pacific-tor-79361.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((result) => {
          //console.log("ok");
          const remaining = data.filter((item) => item._id !== id);
          setData(remaining);
          toast("Item Deleted Successfully!!!");
        });
    }
  };
  const handleAddItem = () => {
    navigate("/additem");
  };
  let i = 0;
  return (
    <div className="container p-1">
      <h3 className="text-center">Manage Item</h3>
      <div className="d-flex justify-content-end pb-4 pt-2">
        <Button
          className="d-flex align-items-center justify-content-between bt-color border-0"
          onClick={handleAddItem}
        >
          <FiPlusCircle />
          <span className="px-2">Add Item</span>
        </Button>
      </div>

      <Table responsive bordered hover rounded>
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Supplier</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="fs-6 align-middle">
          {data.map((item) => (
            <tr key={data._id} class="text-center">
              <td>{++i}</td>
              <td>
                <img
                  className="rounded-circle shadow-sm align-middle "
                  src={item.img}
                  alt="img"
                  width={30}
                  height={30}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>

              <td>
                {item.desc.length > 15
                  ? item.desc.slice(0, 15) + "..."
                  : item.desc}
              </td>
              <td>{item.supplier}</td>
              <td className="align-middle d-flex justify-content-around">
                <span className=" p-2 rounded shadow-sm">
                  {" "}
                  <ImCog />
                </span>
                <span
                  className="text-danger p-2 rounded shadow-sm"
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                >
                  <ImBin />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventory;
