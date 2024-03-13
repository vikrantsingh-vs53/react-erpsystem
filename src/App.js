import Navbar from "./components/navbar";
import Dashboard from './components/dashboard';
import Product from "./components/product";
import Orders from "./components/orders";
import { Route,Routes } from "react-router-dom";

function App() {
  
  return (
    <>
     <Navbar />
     <div className="container">
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />}  />
        <Route path="/orders" element={<Orders />}  />
       </Routes>
     </div>
     </>
  )
}

export default App
