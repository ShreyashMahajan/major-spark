import "./App.css";
import './pages/productListing/productListing.css'
import { Home } from "./pages/homePage/home";
import { ProductListing } from "./pages/productListing/productListing";
import { CartPage } from "./pages/cartPage/cartPage";
import { Wishlist } from "./pages/wishList/wishList";
import { Login } from "./pages/authentication/login/login";
import { SignUp } from "./pages/authentication/signUp/signUp";
import { ForgotPass } from "./pages/authentication/forgotPass/forgotPass";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/productListing" element={<ProductListing />}/>
            <Route path="/forgotPassword" element={<ForgotPass/>} />
            <Route path="/signup" element={<SignUp/>} />
            </Routes>
    </div>
  );
}

export default App;
