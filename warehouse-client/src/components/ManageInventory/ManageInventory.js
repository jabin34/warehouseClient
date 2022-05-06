import React from "react";
import { Table } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import "./ManageInventory.css";
import { FiPlusCircle, FiTrash2} from "react-icons/fi";

const ManageInventory = () => {
    const [data,setData] = useInventory();
   const  handleDelete = (id) =>{
     const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:4000/inventory/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("ok");
          const remaining = data.filter((item) => item._id !== id);
          setData(remaining);
        });
    }
   }
    let i=0;
  return (
    <div className="container p-1">
      <Table responsive bordered hover rounded>
        <thead>
          <tr className="">
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
        <tbody>
            { 
            data.map(item=><tr key={data._id}>
            <td>{++i}</td>
            <td>
            <img roundedCircle className="rounded align-middle"
            src={item.img} alt="img" width={30} height={30} /></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            
            <td>{ item.desc.length>15?item.desc.slice(0,15)+"...":item.desc }</td>
            <td>{item.supplier}</td>
            <td className="align-middle d-flex justify-content-around">
              <span className="p-2  border p-1 rounded"> <FiPlusCircle /></span>  
              <span className="text-danger border p-2 rounded" onClick={()=>{handleDelete(item._id)}}><FiTrash2/></span>
            </td>
          </tr>)}
          
         
        </tbody>
      </Table>
     
    </div>
  );
};

export default ManageInventory;
