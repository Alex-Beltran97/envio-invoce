import { Button, Grid, Stack } from "@mui/material";
import { useInvoice } from "../../../context/InvoiceContext";
import { useFormInvoice } from "../../../hooks/useFormInvoice";
import FieldsForm from "./FieldsForm";
import { v4 as uuidV4 } from 'uuid';

const FormInvoice = ({}) => {
  const {
    date,
    setDate,
    customer,
    setCustomer,
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
  } = useFormInvoice();

  const tools = {
    date,
    setDate,
    customer,
    setCustomer,
    customers,
    products,
    getAProduct,
    multiplyPrice,
    product,
    price,
    amount,
    subTotal
  };

  const editBuy = (data,dataToSend) =>{
    let modifyingCart = [...data];

    const position = data.findIndex(item=>item.id===elementId);

    modifyingCart[position] = dataToSend;

    return modifyingCart;
  };

  const { shoppingCart, setshoppingCart, infoToEdit, setInfoToEdit } = useInvoice();

  const handleSubmit = (e) =>{
    e.preventDefault();

    const dataToSend = {
      id:uuidV4(),
      product,
      price:+price,
      amount:+amount,
      subTotal:+subTotal
    };
    
    resetForm();

    let newShoppingCart; 
    
    if(infoToEdit?.id){
      newShoppingCart = editBuy(shoppingCart, dataToSend); 

      setshoppingCart([...newShoppingCart]);

      setInfoToEdit({});
      setElementId("");
      return
    };

    setshoppingCart([...shoppingCart, dataToSend]);

    
  }; 

  return (<>
    
    <form onSubmit={ handleSubmit } style={{ width:"100%" }} id="form">
      <Grid container spacing={ 4 }>
        <FieldsForm tools={ tools } />
        <Grid item xs={ 2 } alignSelf="center" justifyContent="center">
          <Button variant="contained" type="submit">Submit</Button>
        </Grid>
      </Grid>
    </form>
  </>)
};

export default FormInvoice;