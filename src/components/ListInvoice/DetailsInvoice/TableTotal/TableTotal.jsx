import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCustomersById } from "../../../../actions/customers.action";

const labels = [
  "Code",
  "DATE",
  "Customer",
  "Total"
];

const TableTotal = ({ data }) => {
  const [customer, setCustomer] = useState("");

  const getACustomer = async () =>{
    try{
      const result = await getCustomersById(data.customer);
      setCustomer(`${ result.data?.name } ${ result.data?.lastName }`);
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    getACustomer();
  }, []);

  return (<>
     <TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            { labels.map((item,index)=>(
              <TableCell key={ index }>
                <Typography fontWeight={ 700 }>{ item }:</Typography>
              </TableCell>
            )) }
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography>{ data.code }</Typography>
            </TableCell>
            <TableCell>
              <Typography>{ data.date }</Typography>
            </TableCell>
            <TableCell>
              <Typography>{ customer }</Typography>
            </TableCell>
            <TableCell>
              <Typography>{ data.total }</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </>)
};

export default TableTotal;