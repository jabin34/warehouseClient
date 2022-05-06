import { useEffect, useState } from "react";

const useInventory = () =>{
const [data,setData] = useState([]);
useEffect(()=>{
    fetch('http://localhost:4000/inventory')
    .then(res=>res.json())
    .then(item =>setData(item))
},[]);
return [data,setData];
}
export default useInventory;