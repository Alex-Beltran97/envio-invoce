import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardTotal from "../components/Home/CardTotal";
import FormInvoice from "../components/Home/FormInvoice/FormInvoice";
import TablePorducts from "../components/Home/TableProducts/TablePorducts";
import { useInvoice } from "../context/InvoiceContext";
import { v4 as uuidV4 } from "uuid";
import { postInvoices } from "../actions/invoices.action";

const Home = () => {  
  const [totalPrice, setTotalPrice] = useState(0);

  const { shoppingCart, purchaseDate, purchaser, forEdit } = useInvoice();

  const getTotalPrice = ()=>{
    const subTotals = shoppingCart.map(item=>item?.subTotal);

    if(subTotals.length>0){
      const result = subTotals.reduce((amount,item)=>amount+item,0);
      setTotalPrice(result);
    };
  };

  const saveInvoice = async () =>{
    const dataToSend = {
      code: uuidV4(),
      customer: purchaser,
      date: purchaseDate,
      total: totalPrice,
      products:[...shoppingCart]
    };

    try{
      const data = await postInvoices(dataToSend)
      console.log(data);
    }catch(error){
      console.log(error);
    };
  };

  useEffect(() => {
    getTotalPrice();
  }, [shoppingCart]);

  return (<>
    <Stack spacing={ 4 }>
      <FormInvoice forEdit={ forEdit } />
      <Box style={{ height:"32rem" }}>
        {shoppingCart.length>0 &&
          <Stack style={{ height:"100%" }} justifyContent="space-between" spacing={ 2 }>
            <CardTotal date={ purchaseDate } customer={ purchaser } totalPrice={ totalPrice } />
            <TablePorducts data={ shoppingCart } />
            <Typography textAlign="end">
              <Button variant="contained" onClick={ saveInvoice }>Save Invoice</Button>
            </Typography>
          </Stack>
        }
      </Box>
    </Stack>
  </>)
};

export default Home