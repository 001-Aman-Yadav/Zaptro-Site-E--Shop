import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Datacontext = createContext(null);

export const Dataprovider = ({ children }) => {
  const [data, setdata] = useState([]);

  // ✅ Fetch Products
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res)

      // DummyJSON me products array andar hota hai
      setdata(res.data.products);

    } catch (error) {
      console.log("API Error:", error);
    }
  };

  // ✅ Auto call on load
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Datacontext.Provider value={{ data, setdata }}>
      {children}
    </Datacontext.Provider>
  );
};