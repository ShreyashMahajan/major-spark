import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { cartReducer } from '../../reducerFunctions/cartReducer/cartReducer.jsx'

const CartContext = createContext(null);


const CartProvider = ({ children }) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, { cartList: [] });

    return <CartContext.Provider value={{ cartDispatch, cartState }}>
        {children}
    </CartContext.Provider>
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };