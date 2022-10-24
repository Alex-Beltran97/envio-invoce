import { createContext, useContext, useEffect, useState } from "react";
import { getCustomers } from "../actions/customers.action";

const ShopContext = createContext();

const useShop = () =>{
  const context = useContext(ShopContext);
  if(context) return context;
};

const ShopProvider = ({ children })=>{
  const [customers, setCustomers] = useState([]);

  const getCustomersData = async ()=>{
    try{
      const { data } = await getCustomers();
      setCustomers(data);
    }catch(error){
      console.log(error);
    };
  };

  useEffect(() => {
    getCustomersData();
  }, []);

  return(<>
    <ShopContext.Provider value={{
      customers,
      getCustomersData
    }}>
      { children }
    </ShopContext.Provider>
  </>)
};

export { useShop, ShopProvider }
