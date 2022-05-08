import { useEffect, useState } from "react";

const useInventory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://pacific-tor-79361.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((item) => setData(item));
  }, []);
  return [data, setData];
};
export default useInventory;
