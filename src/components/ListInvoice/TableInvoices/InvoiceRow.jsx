import { TableCell, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCustomersById } from "../../../actions/customers.action";
import DetailsModal from "../DetailsInvoice/DetailsModal";

const InvoiceRow = ({ data, code, customer:customerId, date, total }) => {
  const [customer, setCustomer] = useState("");

  const getACustomer = async () =>{
    try{
      const { data } = await getCustomersById(customerId);
      setCustomer(`${ data?.name } ${ data?.lastName }`);
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    getACustomer();
  }, []);

  return (<>
    <TableRow>
      <TableCell>
        <Typography>{ code }</Typography>
      </TableCell>
      <TableCell>
        <Typography>{ customer }</Typography>
      </TableCell>
      <TableCell>
        <Typography>{ date }</Typography>
      </TableCell>
      <TableCell>
        <Typography>{ total }</Typography>
      </TableCell>
      <TableCell>
        <DetailsModal data={ data }/>
      </TableCell>
    </TableRow>
  </>)
};

export default InvoiceRow;