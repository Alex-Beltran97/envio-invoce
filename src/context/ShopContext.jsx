import { createContext, useContext, useEffect, useState } from "react";
import { getCustomers } from "../actions/customers.action";
import { getInvoices } from "../actions/invoices.action";
import { getProducts } from "../actions/products.action";

const ShopContext = createContext();

const useShop = () =>{
  const context = useContext(ShopContext);
  if(context) return context;
};

const ShopProvider = ({ children })=>{
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [invoices, setInvoices] = useState([]);

  const getCustomersData = async ()=>{
    try{
      const { data } = await getCustomers();
      setCustomers(data);
    }catch(error){
      console.log(error);
    };
  };

  const getProductsData = async () =>{
    try{
      const { data } = await getProducts();
      setProducts(data);
    }catch(error){
      console.log(error)
    };
  };
  
  const getInvoicesData = async () =>{
    try{
      const { data } = await getInvoices();
      setInvoices(data);
    }catch(error){
      console.log(error)
    };
  };

  useEffect(() => {
    getCustomersData();
    getProductsData();
    getInvoicesData();
  }, []);

  return(<>
    <ShopContext.Provider value={{
      customers, getCustomersData,
      invoices, getInvoicesData,
      products
    }}>
      { children }
    </ShopContext.Provider>
  </>)
};

export { useShop, ShopProvider }
