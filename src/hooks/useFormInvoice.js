import { useEffect, useState } from "react";
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
  const [elementId, setElementId] = useState("");

  const { customers, products } = useShop();
  
  const { setPurchaseDate, setPurchaser, infoToEdit } = useInvoice();

  const resetForm = () =>{
    setProduct("");
    setPrice(0);
    setAmount(0);
    setSubTtotal(0);
  };

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

  const editValues = (values) =>{
    const { product, price, amount, subTotal, id } = values;

    setElementId(id);
    setProduct(product);
    setPrice(price);
    setAmount(amount);
    setSubTtotal(subTotal);
  };

  useEffect(() => {
    if(infoToEdit?.id){
      editValues(infoToEdit)
    };
  }, [infoToEdit]);

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
    subTotal,
    resetForm,
    elementId,
    setElementId
  };
};

export { useFormInvoice };