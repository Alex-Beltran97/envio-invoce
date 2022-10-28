import { IconButton, Modal, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import TableProdInvoice from "./TableTotal/TableProdInvoice";
import TableTotal from "./TableTotal/TableTotal";


const DetailsModal = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(e=>!e);

  return (<>
    <Tooltip title="Detail">
      <IconButton onClick={ handleOpen }>
        <IoEyeSharp />
      </IconButton>
    </Tooltip>
    <Modal
      open={ open }
      onClose={ handleOpen }
    >
      <Paper style={ style }>
        <Typography variant="h5" textAlign="center" fontWeight={ 700 }>Invoice Detail</Typography>
        <Stack spacing={ 2 }>
          <TableTotal data={ data } />
          <TableProdInvoice data={ data } />
        </Stack>
      </Paper>
    </Modal>
  </>)
};

const style = {
  position:"absolute",
  width:"68%",
  top:"8%",
  left:"16%",
  padding:"1.5rem"
}

export default DetailsModal