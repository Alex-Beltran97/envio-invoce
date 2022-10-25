import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCustomersById } from "../../actions/customers.action";

const labels = ["DATE","Customer","Total"];

const CardTotal = ({ date, customer=0, totalPrice }) => {
  const [customerName, setCustomerName] = useState("");

  const getACustomer = async ()=>{
    try{
      const { data } = await getCustomersById(customer);
      setCustomerName(`${ data.name } ${ data.lastName }`);
    }catch(error){
      console.log(error);
    };
  };

  useEffect(() => {
    getACustomer();
  }, [customer]);

  return (<>
    <Paper elevation={ 4 }>
      <center>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                { labels.map((item,index)=>(
                  <ColumnHead key={ index }  label={ item } />
                )) }
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{ date }</TableCell>
                <TableCell>{ customerName }</TableCell>
                <TableCell>
                  <Typography fontWeight={ 700 }>${ totalPrice }</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </center>
    </Paper>
  </>)
};

const ColumnHead = ({ label }) =>(<>
  <TableCell>
    <Typography fontWeight={ 700 }>{ label }:</Typography>
  </TableCell>
</>);

export default CardTotal;