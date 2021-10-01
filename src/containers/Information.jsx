import React, { useRef, useContext, createRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/components/Information.css";
import AppContext from "../context/AppContext";

function Information() {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = () => {
    //Capturamos toda la info
    const formData = new FormData(form.current);
    // prettier-ignore
    const buyer = {
      "name": formData.get("name"),
      "email": formData.get("email"),
      "address": formData.get("address"),
      "number": formData.get("number"),
      "city": formData.get("city"),
      "state": formData.get("state"),
      "country": formData.get("country"),
      "postalCode": formData.get("postalCode"),
      "phone": formData.get("phone"),
    }
    addToBuyer(buyer);
    history.push("/checkout/payment");
    //Desestruturamos la info en un arreglo con cada uno de los elementos
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information: </h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Full name" name="name" />
            <input type="text" placeholder="E-mail" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="Number" name="number" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Country" name="country" />
            <input
              type="text"
              placeholder="ZIP/Postal Code"
              name="postalCode"
            />
            <input type="text" placeholder="Phone" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Back</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Payment
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Orders:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>Item: {item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Information };
