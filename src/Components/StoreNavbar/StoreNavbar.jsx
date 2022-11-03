import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function StoreNavbar() {

  const { cartItem } = useSelector((state) => state.AddToCartReducer);

  console.log(cartItem, "cartItem");


  //logoutsection 
const navigate = useNavigate();
const user = localStorage.getItem("uid");

const logoutHandler =()=>{
  localStorage.removeItem("uid")
  navigate("/")
      // 
  };
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="px-5 d-flex justify-content-between">
        <section className=" d-flex align-items-center">
          <Navbar.Brand><h3>HNS STORE</h3></Navbar.Brand>
          <div className="d-flex gap-3 ">
  
            <Link className="text-white" to="/store">
              STORE
            </Link>
            <Link className="text-white addtocart" to="/addtocart">
              ADD TO CART
            </Link>
        
          </div>
        </section>

        <div className="text-white d-flex gap-2">
          <h4 className="text-white">Cart Items: </h4>
          <h4 className="text-white">{cartItem.length}</h4>
          <button className="btn btn-danger" onClick={logoutHandler}>
               Log Out
          </button>
        </div>
      </Navbar>
    </>
  );
}

export default StoreNavbar;
