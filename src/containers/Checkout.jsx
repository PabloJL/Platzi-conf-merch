import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Checkout.css";
import { MdDelete } from "react-icons/md";
import AppContext from "../context/AppContext";

function Checkout() {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Order List:</h3> : <h3>No orders</h3>}
        {cart.map((item, i) => (
          <div className="Checkout-item" key={i}>
            <div className="Checkout-element">
              <h4>Item name: {item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item, i)}>
              <MdDelete title="delete" size="1.4rem" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Payment</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export { Checkout };
