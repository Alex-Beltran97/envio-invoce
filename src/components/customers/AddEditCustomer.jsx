import { Button, IconButton, Modal, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import FormCustomer from "./FormCustomer";

const AddEditCustomer = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = ()=>setOpen(e=>!e);

  return (<>
    {!id?
      <Button variant="contained" onClick={ handleOpen }>Add Curtomers</Button>
      :
      <IconButton onClick={ handleOpen }>
        <IoCreateOutline />
      </IconButton>
    }
    <Modal
      open={ open }
      onClose={ handleOpen }
    >
      <Paper style={ style }>
        <Typography variant="h5" textAlign="center">{ !id?"Add":"Edit" } Customer</Typography>
        <FormCustomer id={ id }/>
      </Paper>
    </Modal>
  </>)
};

const style = {
  position:"absolute",
  width:"32%",
  top:"12%",
  left:"30%",
  padding:"1.5rem"
};

export default AddEditCustomer;