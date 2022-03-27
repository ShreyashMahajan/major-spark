import { useReducer } from "react";
const { createContext } = require("react");
const { useContext } = require("react");
import { findOccuringItem } from '../../reducerFunctions/cartReducer/cartReducerUtility/cartReducerUtility.jsx'


const WishContext = createContext(null);

const wishListReducerFunc = (state, action) => {
    switch (action.type) {
        case 'ADD_WISHLIST':
            if (state.wishList.length === 0) {
                return { ...state, wishList: [...state.wishList, action.payload] };
            } else {
                let productOccurence = findOccuringItem(state.wishList, action.payload);
                if (productOccurence) {
                    return state;
                } else {
                    return { ...state, wishList: [...state.wishList, action.payload] };
                }
            }
        case 'MOVE_TO_WISHLIST':
            let productOccurence = findOccuringItem(state.wishList, action.payload);
            if (productOccurence) {
                return state;
            } else {
                return { ...state, wishList: [...state.wishList, action.payload] };
            }
        case 'REMOVE_FROM_WISHLIST':
            let wishListAfterRemove = state.wishList.filter(wishItem => wishItem._id !== action.payload._id);
            return { ...state, wishList: wishListAfterRemove };
        default:
            return state;
    }
}

const WishListProvider = ({ children }) => {
    const [wishListState, wishListDispatch] = useReducer(wishListReducerFunc, { wishList: [] });

    console.log("items in wishlist", wishListState.wishList);

    return (
        <WishContext.Provider value={{ wishListState, wishListDispatch }}>
            {children}
        </WishContext.Provider>
    )
}

const useWishList = () => useContext(WishContext);

export { useWishList, WishListProvider };