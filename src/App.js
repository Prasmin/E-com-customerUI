import "./App.css";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import CustomerLayout from "./pages/layout/CustomerLayout";
import Product from "./pages/products/Product";

function App() {
  return (
    <div>
      <Browser>
        <Routes>
          <Route path="/" element={<CustomerLayout />} />
          <Route path="products" element={<Product />} />
        </Routes>
      </Browser>
    </div>
  );
}

export default App;
