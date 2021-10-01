import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "../styles/components/Header.css";
import AppContext from "../context/AppContext";

function Header() {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <header className="Header">
      <Link to="/">
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FaShoppingBasket title="checkout" size="2rem" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
}

export { Header };
