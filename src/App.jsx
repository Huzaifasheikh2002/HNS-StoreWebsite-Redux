import "./App.css";
import { Route, Routes } from "react-router-dom";
import Store from "./Screens/Store/Store";
import AddToCart from "./Screens/AddToCart/AddToCart";

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<Home />} /> */}
        <Route path="/" element={<Store />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
    </>
  );
}

export default App;
