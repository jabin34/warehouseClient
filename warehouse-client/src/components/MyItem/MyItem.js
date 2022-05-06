import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css';
const MyItem = () => {
    const [user] = useAuthState(auth);
    const[item,setItem] = useState([]);
   
    useEffect(()=>{
    const  getItems = async() =>{
        const email = user?.email;
        const url = `http://localhost:4000/myItem?email=${email}`;
        const{data} = await axios.get(url) ;
        setItem(data);
    };
    getItems();  
    },[user])
    return (
        <div>
           Myitem {item.length}
        </div>
    );
};

export default MyItem;