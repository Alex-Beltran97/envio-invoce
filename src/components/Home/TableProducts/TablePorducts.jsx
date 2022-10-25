import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ProductsRow from "./ProductsRow";

const labels = ["Product", "Price", "Amount", "SubTotal", "Action"];

const TablePorducts = ({ data }) => {
  return (<>
    <TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            { labels.map((item, index)=>(
              <TableCell key={ index }>
                <Typography fontWeight={ 700 }>{ item }</Typography>
              </TableCell>
            )) }
          </TableRow>
        </TableHead>
        <TableBody>
          { data.map(item=>(
            <ProductsRow 
              key={ item.id }  
              id={ item.id }  
              product={ item.product }
              price={ item.price }
              amount={ item.amount }
              subTotal={ item.subTotal }
            />
          )) }          
        </TableBody>
      </Table>
    </TableContainer>
  </>)
};

export default TablePorducts;