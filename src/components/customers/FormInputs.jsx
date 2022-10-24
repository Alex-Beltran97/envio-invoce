import { InputLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { ErrorMessage, Field } from "formik";

const FormInputs = ({type, name, label}) => {
  return (<>
    <Stack spacing={ 1 }>
      <InputLabel htmlFor={ name }>{ label }:</InputLabel>
      <Field type={ type } name={ name } />
      <ErrorMessage name={ name } />
    </Stack>
  </>)
};

export default FormInputs;