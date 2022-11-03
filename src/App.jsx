import "./App.css";
import { Route, Routes } from "react-router-dom";
import Store from "./Screens/Store/Store";
import AddToCart from "./Screens/AddToCart/AddToCart";
import Login from './Screens/Login';
import SignUp from './Screens/Signup';
import ProtectedRoute from './ProtectedRoute';
// import Website from './Screens/Websitemya';

function App() {
  return (
    <>
 <Routes>
        {/* <Route path="/todo" element={<Todo/>}></Route> */}
        <Route index element={<Login/>}></Route> 

        <Route path='/signup'element={<SignUp />}></Route>  

        <Route element={<ProtectedRoute/>}>
            <Route path="/store" element={<Store/>} ></Route>
           <Route path="/addtocart" element={<AddToCart />}></Route>

        </Route>

        {/* <Route path="/website" element={<Website/>}></Route> */}
</Routes>
{/*  */}
          {/* main todo jisme login signup hai */}
    {/* End main todo jisme login signup hai */}
    </>
  );
}

export default App;





