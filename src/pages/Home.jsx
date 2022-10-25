import { Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import CardTotal from "../components/Home/CardTotal";
import FormInvoice from "../components/Home/FormInvoice/FormInvoice";
import TablePorducts from "../components/Home/TableProducts/TablePorducts";
import { useInvoice } from "../context/InvoiceContext";

const Home = () => {  
  const [totalPrice, setTotalPrice] = useState(0);

  const { shoppingCart, purchaseDate, purchaser, forEdit } = useInvoice();

  const getTotalPrice = ()=>{
    const subTotals = shoppingCart.map(item=>item?.subTotal);

    if(subTotals.length>0){
      const result = subTotals.reduce((amount,item)=>amount+item);
      setTotalPrice(result);
    };
  };

  useEffect(() => {
    getTotalPrice();
  }, [shoppingCart]);

  return (<>
    <Stack spacing={ 4 }>
      <FormInvoice forEdit={ forEdit } />
      {shoppingCart.length>0 &&
        <Fragment>
          <CardTotal date={ purchaseDate } customer={ purchaser } totalPrice={ totalPrice } />
          <TablePorducts data={ shoppingCart } />
        </Fragment>
      }
    </Stack>
  </>)
};

export default Home