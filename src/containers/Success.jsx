import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Success.css";
import { Map } from "../components/Map";
import { useGoogleAddress } from "../hooks/useGoogleAddress";

function Success() {
  const {
    state: { buyer },
  } = useContext(AppContext);
  const address = useGoogleAddress(buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`Thank you for your preference ${buyer.name}!!`}</h2>
        <span>Your package will arrive in 3 days at :</span>
        <div className="Success-map">
          <Map address={address} />
        </div>
      </div>
    </div>
  );
}

export { Success };
