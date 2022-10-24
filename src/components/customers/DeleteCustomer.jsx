import { Button, IconButton, Modal, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { IoAlertCircleOutline, IoTrashOutline } from "react-icons/io5";
import { deleteCustomer } from '../../actions/customers.action';
import { useShop } from "../../context/ShopContext";

const DeleteCustomer = ({ id, entity, name }) => {
  const [open, setOpen] = useState(false);
  
  const { getCustomersData } = useShop();

  const handleOpen = ()=>setOpen(e=>!e);
  
  const deleteCustomerFn = async () =>{
    try{
      const data = await deleteCustomer(id);
      getCustomersData();
      console.log(data);
    }catch(error){
      console.log(error);
    };
  };

  return (<>
    <IconButton onClick={ handleOpen }>
      <IoTrashOutline />
    </IconButton>
    <Modal
      open={ open }
      onClose={ handleOpen }
    > 
      <Paper style={ style } >
        <Typography variant="h5" textAlign="center">Delete Customer</Typography>
        <Typography variant="h5" textAlign="center">
          <IoAlertCircleOutline style={{ fontSize:"8rem" }}/>
        </Typography>
        <Typography variant="subtitle2" textAlign="center">Are you sure to delete the {`${ entity } ${ name }`}?</Typography>
        <Stack direction="row" spacing={ 2 } alignItems="center" justifyContent="center">
          <Button variant="contained" onClick={ deleteCustomerFn }>Confirm</Button>
          <Button variant="contained" onClick={ handleOpen }>Cancel</Button>
        </Stack>
      </Paper>
    </Modal>
  </>)
};

const style = {
  position:"Absolute",
  width:"48%",
  top:"16%",
  left:"30%",
  padding:"1.5rem"
};

export default DeleteCustomer;