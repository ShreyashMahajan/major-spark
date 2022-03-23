import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import { ProductProvider } from "./context/productContext/productContext";
import { FilterProvider } from "./context/filterContext/filterContext";
import { CartProvider } from "./context/cartContext/cartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
      <CartProvider>
      <FilterProvider>
    <App />
    </FilterProvider>
    </CartProvider>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
