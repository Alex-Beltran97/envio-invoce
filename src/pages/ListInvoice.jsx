import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TableInvoices from "../components/ListInvoice/TableInvoices/TableInvoices";

const ListInvoice = () => {
  const navigation = useNavigate();

  return (<>
    <Container style={{ marginTop:"1rem" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">List Invoice</Typography>
        <Button variant="contained" onClick={ ()=>navigation("/") }>New Invoice</Button>
      </Stack>
      <TableInvoices />
    </Container>
  </>)
};

export default ListInvoice;