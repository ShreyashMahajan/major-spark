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
import Mockman from "mockman-js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RequiresAuth } from "./components/requireAuth/requireAuth";


function App() {
  return (
    <div className="App">
        <ToastContainer position="bottom-center" autoClose={2000}/>
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={
              <RequiresAuth>
               <Wishlist />
            </RequiresAuth>
            } />
            <Route path="/cart" element={
              <RequiresAuth>
               <CartPage />
            </RequiresAuth>
            } />
            <Route path="/productListing" element={<ProductListing />}/>
            <Route path="/forgotPassword" element={<ForgotPass/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/mock" element={<Mockman/>}/>
            </Routes>
    </div>
  );
}

export default App;
