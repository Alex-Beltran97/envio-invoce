import { Button, Stack } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormInputs from "./FormInputs";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { getCustomersById, putCustomer } from "../../actions/customers.action";


const validationSchema = Yup.object().shape({
  name:Yup.string().required("Field is required!"),
  lastName:Yup.string().required("Field is required!"),
  document:Yup.string().required("Field is required!"),
  indicative:Yup.string().required("Field is required!"),
  phoneNumber:Yup.string().required("Field is required!"),
  email:Yup.string().required("Field is required!").email("Please enter a valid email!")
});

const FormCustomer = ({ id }) => {
  const [initialValue, setInitialValue] = useState({
    id:"",
    name:"",
    lastName:"",
    document:0,
    indicative:0,
    phoneNumber:0,
    email:""
  });

  const getCustomerById = async () =>{
    try{
      const { data } = await getCustomersById(id);

      const { phoneNumber, ...otherData } = data;

      const separatePhone = (data) =>{
        if(data.includes("+")){
          return data.split(" ");
        };

        return +data
      };

      const hasIndicative = phoneNumber.includes("+");

      const dataToSend = {
        ...otherData,
        indicative:hasIndicative?+separatePhone(phoneNumber)[0].replace("+",""):0,
        phoneNumber:hasIndicative?+separatePhone(phoneNumber)[1]:separatePhone(phoneNumber),
      };

      setInitialValue(dataToSend);

    }catch(error){
      console.log(error);
    };
  };

  const createCustomer = async (values) =>{
    try{
      const { id, indicative, phoneNumber, ...otherData } = values;

      console.log({
        phoneNumber:`+${ indicative } ${ phoneNumber }`,
        ...otherData
      });

    }catch(error){
      console.log(error);
    }
  }; 

  const editCustomerFn = async (values)=>{
    const { id, indicative, phoneNumber, ...otherData } = values;

    const dataToSend = {
      phoneNumber:`+${ indicative } ${ phoneNumber }`,
      ...otherData
    };

    try{
      const data = await putCustomer(id, dataToSend);
      console.log(data);
    }catch(error){
      console.log(error);
    };
  };

  useEffect(() => {
    if(id){
      getCustomerById();
      return 
    };

  }, []);

  return (<>
    <Formik
      initialValues={ initialValue }

      enableReinitialize

      validationSchema={ validationSchema }

      onSubmit={(values)=>{
        if(id){
          editCustomerFn(values);
          return
        };

        createCustomer(values);
        
      }}
    >
      {()=>(
        <Form>
          <Stack spacing={ 1 }>
            <FormInputs
              type="text"
              name="name"
              label="Name"
            />
            <FormInputs
              type="text"
              name="lastName"
              label="Last Name"
            />
            <FormInputs
              type="number"
              name="document"
              label="Document Number"
            />
            <FormInputs
              type="number"
              name="indicative"
              label="Indicative"
            />
            <FormInputs
              type="number"
              name="phoneNumber"
              label="Phone Number"
            />
            <FormInputs
              type="email"
              name="email"
              label="Email"
            />
            <Button variant="contained" type="submit">Send</Button>
          </Stack>
        </Form>
      )}
    </Formik>
  </>)
};

export default FormCustomer