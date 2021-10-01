import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../containers/Home";
import { Checkout } from "../containers/Checkout";
import { Information } from "../containers/Information";
import { Payment } from "../containers/Payment";
import { Success } from "../containers/Success";
import { NotFound } from "../containers/NotFound";
import { Layout } from "../components/Layout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            {/*switch es el children de layout*/}
            <Route exact path="/" component={Home}></Route>{" "}
            {/*Exacta, con path especifico aquí  es el index y un componente*/}
            <Route exact path="/checkout" component={Checkout}></Route>
            <Route
              exact
              path="/checkout/information"
              component={Information}
            ></Route>
            <Route exact path="/checkout/payment" component={Payment}></Route>
            <Route exact path="/checkout/success" component={Success}></Route>
            <Route component={NotFound}></Route>{" "}
            {/*Ruta 404 cuando sucede un error*/}
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  ); //Para encapsular la navegación, switch para mostrar el que coincida con la ruta que elijo.
} //Rutas que voy a manejar con route

export { App };
