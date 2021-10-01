import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import AppContext from "../context/AppContext";
import "../styles/components/Payment.css";
import pass from "../pass";

function Payment({ history }) {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);
  const clientID = pass.paypalPaymentClientID;

  const paypalOptions = {
    clientId: clientID,
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    //Cuando recibimos el success nos manda un status, lo validamos si es complete
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      //Funcion para agregar la orden al estado para poderla ver
      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order summary</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log("Start Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export { Payment };
