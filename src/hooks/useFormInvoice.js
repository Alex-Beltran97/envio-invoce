import { useState } from "react";
import { getProductsById } from "../actions/products.action";
import { useInvoice } from "../context/InvoiceContext";
import { useShop } from "../context/ShopContext";

const useFormInvoice = () => {
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [subTotal, setSubTtotal] = useState(0);

  const { customers, products } = useShop();
  
  const { setPurchaseDate, setPurchaser } = useInvoice();

  const handleDate = (value) =>{
    setDate(value);
    setPurchaseDate(value);
  };
  
  const handleCustomer = (value) =>{
    setCustomer(value);
    setPurchaser(value);
  };

  const getAProduct = async (id)=>{
    setAmount(0);
    setSubTtotal(0);
    setProduct(id);

    try{
      const { data } = await getProductsById(id);
      if(!id){
        setPrice(0);
        return
      };

      setPrice(data?.price);
    }catch(error){
      console.log(error);
    };
  };

  const multiplyPrice = (quantity) =>{
    setAmount(quantity);
    setSubTtotal(+price*+quantity);
  };  

  return {
    date,
    setDate:handleDate,
    customer,
    setCustomer:handleCustomer,
    customers,
    products,
    getAProduct,
    multiplyPrice,
    product,
    price,
    amount,
    subTotal
  };
};

export { useFormInvoice };