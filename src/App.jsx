import "./App.css";
import { Route, Routes } from "react-router-dom";
import Store from "./Screens/Store/Store";
import AddToCart from "./Screens/AddToCart/AddToCart";
import LoginPage from "./Screens/LoginPage";
import SignupPage from "./Screens/SignupPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<Home />} /> */}
        <Route path="/store" element={<Store/>} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </>
  );
}

export default App;
