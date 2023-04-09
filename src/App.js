import "./App.css";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import CustomerLayout from "./pages/layout/CustomerLayout";

function App() {
  return (
    <div>
      <Browser>
        <Routes>
          <Route path="/" element={<CustomerLayout />} />
        </Routes>
      </Browser>
    </div>
  );
}

export default App;
