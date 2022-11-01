import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  const selector = useSelector((state) => state.addCounterReducer);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="px-5 d-flex justify-content-between"
      >
        <section className=" d-flex align-items-center">
          <Navbar.Brand>{selector?.name}</Navbar.Brand>
          <div className="d-flex gap-3 ">
       
            <Link className="text-white" to="/">
           

            </Link>
          </div>
        </section>

      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
