import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import { ProductProvider } from "./context/productContext/productContext";
import { FilterProvider } from "./context/filterContext/filterContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
      <FilterProvider>
       <App />
    </FilterProvider>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
