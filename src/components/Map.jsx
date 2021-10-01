import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import pass from "../pass";

function Map({ address }) {
  const googleKey = pass.googleMapsAPI;
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: address.lat,
    lng: address.lng,
  };

  return (
    <LoadScript googleMapsApiKey={googleKey}>
      <GoogleMap
        MapStyle={mapStyles}
        mapContainerStyle={mapStyles}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export { Map };
