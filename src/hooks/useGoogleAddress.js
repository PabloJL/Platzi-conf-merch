import { useState, useEffect } from "react";
import axios from "axios";
import pass from "../pass";
//axios nos permite trabajar con solicitudes y peticiones a apis o recursos en la nube
const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API_KEY = pass.googleMapsAPI;
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export { useGoogleAddress };
