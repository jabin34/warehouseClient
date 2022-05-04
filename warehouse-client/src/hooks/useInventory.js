import { useEffect, useState } from "react";

const useInventory = () =>{
const [data,setData] = useState([]);
useEffect(()=>{
    fetch('inventory.json')
    .then(res=>res.json())
    .then(item =>setData(item))
},[]);
return [data];
}
export default useInventory;