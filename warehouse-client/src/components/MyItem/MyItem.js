import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItem.css';
const MyItem = () => {
    const [user] = useAuthState(auth);
    const[item,setItem] = useState([]);
    const navigate = useNavigate();
   
    useEffect(()=>{
    const  getItems = async() =>{
        const email = user?.email;
        const url = `http://localhost:4000/myItem?email=${email}`;
        try{
            const{data} = await axios.get(url,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('token')}`
                }
            }) ;
            setItem(data);
        }catch(error){
       console.log(error.message);
       if(error.response.status===401 ||error.response.status===403){
           signOut(auth);
           navigate('/login');
        }
    }
}
    getItems();  
    },[user]);
    return (
        <div>
           Myitem {item.length}
        </div>
    );
};

export default MyItem;