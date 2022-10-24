import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Curstomers from "./pages/Curstomers";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (<>
    <Container>
      <Routes>
        <Route path="/"  element={ <Home /> } />
        <Route path="/home"  element={ <Home /> } />
        <Route path="/customers"  element={ <Curstomers /> } />
        <Route path="*"  element={ <PageNotFound /> } />
      </Routes>
    </Container>
  </>)
};

export default App;