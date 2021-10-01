import { useState } from "react";
import initialState from "../initialState";

function useInitialState() {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state, // Que tiene el estado, no sé pero lo traigo y regreso
      cart: [...state.cart, payload], // Traer lo que trae cart del estado y agregale lo del payload, lo que yo le mando
    });
  };
  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (_item, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  // const removeFromCart = (payload) => {
  //   setState({
  //     ...state,
  //     cart: state.cart.filter((items) => items.id != payload.id), //Quitar el item, de los items dentro del cart filtramos por id y tiene que ser diferente del paylad
  //   });
  // };
  return { addToCart, removeFromCart, state, addToBuyer, addNewOrder };
}

export default useInitialState;
