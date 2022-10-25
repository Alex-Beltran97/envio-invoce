import { Button } from '@mui/material';
import React, { useState } from 'react'
import { getProductsById } from '../actions/products.action';
import { useShop } from '../context/ShopContext';

const Home = () => {  
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [subTotal, setSubTtotal] = useState(0);

  const { customers, products } = useShop();

  const getAProduct = async (id)=>{
    setAmount(0);
    setSubTtotal(0);
    setProduct(id);

    try{
      const { data } = await getProductsById(id);
      if(!id){
        setPrice(0);
        return
      };

      setPrice(data?.price);
    }catch(error){
      console.log(error);
    };
  };

  const multiplyPrice = (quantity) =>{
    setAmount(quantity);
    setSubTtotal(+price*+quantity);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    console.log({
      product,
      price,
      amount,
      subTotal
    });
  }; 
  
  return (<>
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" onChange={ e=>setDate(e.target.value) } value={ date } />
      </div>
      <div>
        <label htmlFor="customer">Customer:</label>
        <select name="customer" onChange={ e=>setCustomer(e.target.value)  } value={ customer }>
          <option value="">Choose one</option>
          { customers.map(item=>(
            <option key={ item.id } value={ item.id }>{ `${ item.name } ${ item.lastName }` }</option>
          )) }
        </select>
      </div>
      <div>
        <label htmlFor="product">Product:</label>
        <select name="product" onChange={ e=>getAProduct(e.target.value)  } value={ product }>
          <option value="">Choose one</option>
          { products.map(item=>(
            <option key={ item.id } value={ item.id }>{ `${ item.nameProduct }` }</option>
          )) }
        </select>
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" value={ price } disabled />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" name="amount" onChange={ e=>multiplyPrice(e.target.value)  } value={ amount } min={ 0 } />
      </div>
      <div>
        <label htmlFor="subTotal">SubTotal:</label>
        <input type="number" name="subTotal" value={ subTotal } disabled />
      </div>
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  </>)
};

export default Home