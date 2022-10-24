import { Grid, InputLabel } from "@mui/material";
import { Field } from "formik";

const InputField = ({ name, type, label }) => {
  return (<>
    <Grid item xs={ 4 }>
      <InputLabel htmlFor={ name }>{ label }:</InputLabel>
      <Field type={type } name={ name } />
    </Grid>
  </>)
};

export default InputField;