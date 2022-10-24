import { IconButton, TableCell, TableRow } from "@mui/material";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import AddEditCustomer from "./AddEditCustomer";
import DeleteCustomer from "./DeleteCustomer";

const CustomerRow = ({
  id,
  name,
  lastName,
  document,
  phoneNumber,
  email
}) => {
  return (<>
    <TableRow>
      <TableCell>{ id }</TableCell>
      <TableCell>{ name }</TableCell>
      <TableCell>{ lastName }</TableCell>
      <TableCell>{ document }</TableCell>
      <TableCell>{ phoneNumber }</TableCell>
      <TableCell>{ email }</TableCell>
      <TableCell>
        <AddEditCustomer id={ id }/>
        <DeleteCustomer
          id={ id }
          entity="customer"
          name={ `${ name } ${ lastName }` }
        />
      </TableCell>
    </TableRow>   
  </>)
};

export default CustomerRow;