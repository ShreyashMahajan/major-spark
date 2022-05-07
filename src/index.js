import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import { ProductProvider } from "./context/productContext/productContext";
import { FilterProvider } from "./context/filterContext/filterContext";
import { CartProvider } from "./context/cartContext/cartContext";
import { WishListProvider } from "./context/wishContext/wishContext";
import { AuthProvider } from "./context/authContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <ProductProvider>
    <CartProvider>
    <WishListProvider>
      <FilterProvider>
       <App />
    </FilterProvider>
    </WishListProvider>
    </CartProvider>
    </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
