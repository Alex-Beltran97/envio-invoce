import { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export const useInvoice = () =>{
  const context = useContext(InvoiceContext);
  if(context) return context;
};

export const InvoiceProvider = ({ children }) => {
  const [purchaseDate, setPurchaseDate] = useState("");
  const [purchaser, setPurchaser] = useState("");
  const [shoppingCart, setshoppingCart] = useState([]);
  const [infoToEdit, setInfoToEdit] = useState({});

  const deleteElement = (id) =>{
    const result = shoppingCart.filter(item=>item.id!==id);
    setshoppingCart([...result]);
  };  

  return (<>
    <InvoiceContext.Provider value={{
      purchaseDate, setPurchaseDate,
      purchaser, setPurchaser,
      shoppingCart, setshoppingCart,
      deleteElement,
      infoToEdit, setInfoToEdit
    }}>
      { children }
    </InvoiceContext.Provider>
  </>);
};
