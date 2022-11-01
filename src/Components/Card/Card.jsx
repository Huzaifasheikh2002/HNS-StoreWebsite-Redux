import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase";
import { AddtoCartAction, RemovetoCartAction,} from "../../store/Actions/product";
import { async } from "@firebase/util";

function CardCmp({ product, removeBtn }) {
  const dispatch = useDispatch();
  console.log("product", product);

      // create collection
      const dbCollection =collection(db,"StoreWebCollection")
      // console.log(db,"db");

  const addToCart = async () => {
    dispatch(AddtoCartAction(product));
    // firestore database
    const obj={
      StoreWebValue:product.title,
    };
   await addDoc(dbCollection,obj);
    // firestore database
    
    localStorage.setItem("id", product.id)
    console.log(product.id)

  };
  const removeToCart = () => {
    dispatch(RemovetoCartAction(product));
  };


  return (
    <Card style={{ width: "100%" }}>
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
          <Button variant="primary" onClick={removeToCart}>
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
