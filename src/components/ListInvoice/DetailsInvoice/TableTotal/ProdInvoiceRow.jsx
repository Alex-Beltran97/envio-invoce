import { TableCell, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProductsById } from "../../../../actions/products.action";

const ProdInvoiceRow = ({ product:idProduct, price, amount, subTotal }) => {
  const [product, setProduct] = useState("");

  const getAProduct = async () =>{
    try{
      const { data } = await getProductsById(idProduct);
      setProduct(data?.nameProduct);
    }catch(error){
      console.log(error);
    };
  };

  useEffect(() => {
    getAProduct();
  }, []);

  return (<>
    <TableRow>
      <TableCell>
        <Typography>{ product }</Typography>
      </TableCell>
      <TableCell>
        <Typography>{ price }</Typography>
      </TableCell>
      <TableCell>
        <Typography>{ amount }</Typography>
      </TableCell>
      <TableCell>
        <Typography>{ subTotal }</Typography>
      </TableCell>
    </TableRow>
  </>)
};

export default ProdInvoiceRow;