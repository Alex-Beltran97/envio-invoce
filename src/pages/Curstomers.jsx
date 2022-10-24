import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import AddEditCustomer from "../components/customers/AddEditCustomer";
import CustomerRow from "../components/customers/CustomerRow";
import { useShop } from "../context/ShopContext";

const titles = ["ID","Name","Last Name", "Document", "Phone Number", "Email", "Actions"];

const Curstomers = () => {
  
  const { customers } = useShop();

  return (<>
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="h4">Customers</Typography>
      <AddEditCustomer />
    </Stack>
    <TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            { titles.map((item,index)=>(
              <ItemHeader key={ index } label={ item } />
            )) }
          </TableRow>
        </TableHead>
        <TableBody>
          { customers.map(item=>(
            <CustomerRow 
              key={item.id} 
              id={ item.id }
              name={ item.name }
              lastName={ item.lastName }
              document={ item.document }
              phoneNumber={ item.phoneNumber }
              email={ item.email }
            />
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  </>)
};

const ItemHeader = ({ label }) =>(<TableCell>
  <Typography fontWeight={700}>{ label }</Typography>
</TableCell>);

export default Curstomers;