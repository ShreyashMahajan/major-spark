import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/homePage/home";
import { ProductListing } from "./pages/productListing/productListing";


function App() {
  return (
    <div className="App">
         
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route path="/productListing" element={<ProductListing />}/>
          </Routes>
    </div>
  );
}

export default App;
