import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { collection, addDoc ,doc ,deleteDoc} from "firebase/firestore"; 
import { db } from "../../firebase";
import { AddtoCartAction, RemovetoCartAction,} from "../../store/Actions/product";
import { useState } from "react";


function CardCmp({ product, removeBtn }) {

  // const [productData ,setProductData ]=useState([])

  const dispatch = useDispatch();


  console.log("product", product);

      // create collection
      const dbCollection =collection(db,"WebCollection")
      // console.log(db,"db");

  const addToCart = async () => {
    dispatch(AddtoCartAction(product));
    // firestore database
    const obj={
      ProductData:product.title,
    };
   await addDoc(dbCollection,obj);
    // firestore database
    
    localStorage.setItem("id", product.id)
    console.log(product.id)

  };
  const removeToCart = () => {
    dispatch(RemovetoCartAction(product));
    // const id = productData[index].id;
    // const dbRef =doc(db,"StoreCollection",id)
    // await deleteDoc(dbRef);
    // productData.splice(index,1)
    // setProductData([...productData]);
  };


  // // 
  // const deleteTodo = async(index) => {
  //   const id = todoItem[index].id;
  //   const dbRef =doc(db,"todoCollection",id)
  //   await deleteDoc(dbRef);
  //   // console.log("delete todo", index);
  //   // splice 1st argument khn sy delete krna hai or 2 argument kitni value delete krni hai
  //   todoItem.splice(index, 1);
  //   setTodoItem([...todoItem]); 
  // };
  // 
  // {productData.map((product, index) => {

  return (
  
      <Card 
      style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        className="w-100"
        height={200}
        src={product.image}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>


      {removeBtn ? (
          <Button variant="primary" 
       onClick={()=>removeToCart()}>
            Remove to cart


          </Button>
                
              
        ) : (
          <Button variant="primary" className="addtoCart" onClick={addToCart}>
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}


export default CardCmp;
