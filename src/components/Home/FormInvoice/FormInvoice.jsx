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
    subTotal
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

  const { shoppingCart, setshoppingCart  } = useInvoice();

  const handleSubmit = (e) =>{
    e.preventDefault();

    const dataToSend = {
      id:uuidV4(),
      product,
      price:+price,
      amount:+amount,
      subTotal:+subTotal
    };

    setshoppingCart([...shoppingCart, dataToSend]);
  }; 

  return (<>
    <form onSubmit={ handleSubmit } style={{ width:"100%" }}>
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