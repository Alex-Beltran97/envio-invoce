import { IconButton, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import { getProductsById } from '../../../actions/products.action';
import { useInvoice } from "../../../context/InvoiceContext";
import { useFormInvoice } from "../../../hooks/useFormInvoice";

const ProductsRow = ({ id, product, price, amount, subTotal }) => {
  const [productName, setProductName] = useState();

  const { shoppingCart } = useInvoice();

  const getAProduct = async ()=>{
    try{
      const { data } = await getProductsById(product);
      setProductName(data.nameProduct);
    }catch(error){
      console.log(error);
    };
  };

  const { deleteElement, setInfoToEdit } = useInvoice();

  const filterShoppingCart = () =>{
    const result = shoppingCart.find(item=>item.id===id);
    setInfoToEdit(result);
  };

  useEffect(() => {
    getAProduct();
  }, [product]);

  return (<>
    <TableRow>
      <TableCell>{ productName }</TableCell>              
      <TableCell>{ price }</TableCell>              
      <TableCell>{ amount }</TableCell>              
      <TableCell>{ subTotal }</TableCell>              
      <TableCell>
        <IconButton onClick={ filterShoppingCart }>
          <IoCreateOutline />
        </IconButton>
        <IconButton onClick={ ()=>deleteElement(id) }>
          <IoTrashOutline />
        </IconButton>
      </TableCell>              
    </TableRow>
  </>);
};

export default ProductsRow;