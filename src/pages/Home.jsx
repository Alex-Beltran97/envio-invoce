import { Button, Grid, InputLabel, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { getCustomers } from "../actions/customers.action";
import { getProducts } from "../actions/products.action";
import { getProviders } from "../actions/providers.action";
import InputField from "../components/Home/InputField";

const Home = () => {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  const getCustomersData = async ()=>{
    try{
      const { data } = await getCustomers();
      setCustomers(data);
    }catch(error){
      console.log(error);
    };
  };
  
  const getProductsData = async ()=>{
    try{
      const { data } = await getProducts();
      setProducts(data);
    }catch(error){
      console.log(error);
    };
  };

  useEffect(() => {
    getCustomersData();
    getProductsData();
  }, []);

  return (<>
    <h1>Home</h1>
    <Formik
      initialValues={{
        date:"",
        customer:"",
        product:"",
        price:"",
        amount:"",
        subTotal:"",
      }}

      onSubmit={(values)=>{
        console.log(values);
      }}
    >
      { ()=>(
        <Form>
          <Grid container>
            <Grid item xs={ 10 }>
              <Grid container>
                <InputField
                  name="date"
                  label="Date"
                  type="date"
                />
                <Grid item xs={ 4 }>
                  <InputLabel htmlFor="customer">Customer:</InputLabel>
                  <Field as="select" name="customer">
                    <option value="">Choose one</option>
                    { customers.map(item=>(
                      <option key={ item.id } value={ item.id }>{ `${ item.name } ${ item.lastName }` }</option>
                    )) }
                  </Field>
                </Grid>
           
                <Grid item xs={ 4 }>
                  <InputLabel htmlFor="product">Product:</InputLabel>
                  <Field as="select" name="product">
                    <option value="">Choose one</option>
                    { products.map(item=>(
                      <option key={ item.id } value={ item.id }>{ `${ item.nameProduct }` }</option>
                    )) }
                  </Field>
                </Grid>              
                <InputField
                  name="price"
                  label="Price"
                  type="number"
                />
                <InputField
                  name="amount"
                  label="Amount"
                  type="number"
                />
                <InputField
                  name="subTotal"
                  label="SubTotal"
                  type="number"
                />
              </Grid>
            </Grid>
            <Grid item xs={ 2 }>
              <Button variant="contained" type="submit">Send</Button>
            </Grid>
          </Grid>
        </Form>
      ) }
    </Formik>
  </>)
};

export default Home;