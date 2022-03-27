import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { cartReducer } from '../../reducerFunctions/cartReducer/cartReducer.jsx'

const CartContext = createContext(null);


const CartProvider = ({ children }) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, { cartList: [] });
    console.log("cart list", cartState.cartList);

    const totalReducer = (prev, curr) => ({ ...prev, total: prev.total + curr.price * curr.quantity })
    const total = cartState.cartList.reduce(totalReducer, { total: 0 });
    console.log("total price ", total);

    return <CartContext.Provider value={{ cartDispatch, cartState, total }}>
        {children}
    </CartContext.Provider>
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };