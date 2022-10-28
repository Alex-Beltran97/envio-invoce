import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useShop } from "../../../context/ShopContext";
import InvoiceRow from "./InvoiceRow";

const labels = [
  "Code",
  "Customers",
  "Date",
  "Total"
];

const TableInvoices = () => {

  const { invoices } = useShop();

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
          { invoices.map(item=>(
            <InvoiceRow
              key={ item.id }
              code={ item.code }
              customer={ item.customer }
              date={ item.date }
              total={ item.total }              
              data={ item }              
            />
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  </>)
};

export default TableInvoices;