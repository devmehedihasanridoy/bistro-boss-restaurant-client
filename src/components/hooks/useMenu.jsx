import React, { useEffect, useState } from "react";

const useMenu = () => {
  //
  const [menuData, setMenuData] = useState([]);
  const [loading , setloading] = useState(true);
  //
  useEffect(() => {
    fetch("http://localhost:5000/dishes")
      .then((res) => res.json())
      .then((data) => setMenuData(data));
      setloading(false)
  }, []);

  return [menuData , loading];
};

export default useMenu;
