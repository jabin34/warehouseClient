import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./MyItem.css";
const MyItem = () => {
  const [user] = useAuthState(auth);
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `https://pacific-tor-79361.herokuapp.com/myItem?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setItem(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [user]);
  return (
    <div className="container">
      <h3 className="text-center p-4">My Item :{item.length}</h3>

      {item.map((data) => (
        <Card className="m-2" body key={data._id}>
          <div className="d-flex align-items-center  justify-content-between">
            <div className="d-flex">
              <img
                className="rounded align-middle"
                src={data.img}
                width={120}
                height={80}
                alt="img"
              />
              <div className="mx-1">
                <h6 className="fw-bold">{data.name}</h6>
                <p className="m-0 font text-muted fw-bold">
                  Quantity: {data.quantity}
                </p>
                <p className=" m-0 font text-muted fw-bold">
                  Supplier: {data.supplier}
                </p>
                <p className=" m-0 font text-muted fw-bold">
                  Supplier: {data.desc}
                </p>
              </div>
            </div>

            <h4 className="color">${data.price}</h4>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MyItem;
