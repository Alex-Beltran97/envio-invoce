import { Grid, InputLabel } from "@mui/material";
import { Field } from "formik";

const SelectField = ({ name, label, children }) => {
  return (<>
    <Grid item xs={ 4 }>
      <InputLabel htmlFor={ name }>{ label }:</InputLabel>
        { children }
    </Grid>
  </>)
};

export default SelectField;