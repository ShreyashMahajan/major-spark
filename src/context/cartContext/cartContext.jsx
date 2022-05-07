import { useContext, createContext, useReducer, useEffect } from "react";
import { cartReducer } from '../../reducerFunctions/cartReducer/cartReducer.jsx'
import { useAuth } from "../authContext.js";
import { getCartDataService } from '../../services/cartServices/getCartData';
import { addToCartService } from '../../services/cartServices/addToCartService';
import { removerFromCartService } from '../../services/cartServices/removeFromCartService';
import { updateCartQuantityService } from '../../services/cartServices/updateCartQuantity';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartContext = createContext(null);


const CartProvider = ({ children }) => {

    const navigate = useNavigate();
    const { isUserLoggedIn } = useAuth();

    useEffect(() => {
        if (status !== 'IDLE') return;
        (async function () {
            const { data, success, message } = await getCartDataService();

            if (success) {
                cartDispatch({ type: 'UPDATE_CART', payload: { cart: data.cart } });
                cartDispatch({ type: 'UPDATE_STATUS', payload: { status: 'SUCCESS' } })
            } else {
                cartDispatch({ type: 'UPDATE_STATUS', payload: { status: 'FAILED' } })
            }
        })();
    }, []);

    const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [], status: 'IDLE' });
    const { cart, status } = cartState;

    const findProductOccurence = (_id) => cart.some((item) => item._id === _id);

    const cartTotal = (cartItem) => {
        return cartItem.reduce(
            (prev, curr) => {
                return {
                    ...prev,
                    totalPrice: curr.price * curr.qty + prev.totalPrice
                }
            }, { totalPrice: 0 }
        )
    }

    const addToCart = async (item) => {
        if (!isUserLoggedIn) {
            navigate('/login')
        } else {
            if (findProductOccurence(item._id)) {
                navigate('/cart');
            } else {
                const { data, success } = await addToCartService(item);
                if (success) {
                    cartDispatch({ type: 'UPDATE_CART', payload: { cart: data.cart } });
                    toast.success("Added to Cart")
                    return true;
                }
                return false;
            }
        }

    }

    const updateCartQuantity = async (_id, increment) => {
        const { data, success } = await updateCartQuantityService(_id, increment);
        if (success) {
            cartDispatch({ type: 'UPDATE_CART', payload: { cart: data.cart } });
            return true;
        }
        return false;
    };

    const deleteFromCart = async (_id) => {
        const { data, success } = await removerFromCartService(_id);
        if (success) {
            cartDispatch({ type: 'UPDATE_CART', payload: { cart: data.cart } });
            return true;
        }
        return false;
    }

    return <CartContext.Provider
        value={{
            cartDispatch,
            cartState,
            cart,
            findProductOccurence,
            addToCart,
            updateCartQuantity,
            deleteFromCart,
            cartTotal,
        }}>
        {children}
    </CartContext.Provider>
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };