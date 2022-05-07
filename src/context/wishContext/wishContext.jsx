import { useReducer } from "react";
import { useEffect } from "react";
const { createContext } = require("react");
const { useContext } = require("react");
import { useNavigate } from "react-router-dom";
import { getWishListDataService, addToWishlistService, removerFromWishlistService } from '../../services/wishlistServices/wishListServices.jsx';
import { useAuth } from "../authContext.js";


const WishContext = createContext(null);

const wishListReducerFunc = (state, action) => {
    switch (action.type) {
        case 'UPDATE_WISHLIST':
            return { ...state, wishList: action.payload.wishlist };
        case 'UPDATE_STATUS':
            return { ...state, status: action.payload.status };
        default:
            return state;
    }
}

const WishListProvider = ({ children }) => {
    const [wishListState, wishListDispatch] = useReducer(wishListReducerFunc, { wishList: [], status: 'IDLE' });
    const { status, wishList } = wishListState;
    const navigate = useNavigate();
    const { isUserLoggedIn } = useAuth();

    const findProductOccurence = (_id) => wishList.some((item) => item._id === _id);


    useEffect(() => {
        if (status !== 'IDLE') return;
        (async function () {
            wishListDispatch({ type: 'UPDATE_STATUS', payload: { status: 'PENDING' } });
            const { data, success } = await getWishListDataService();
            if (success) {
                wishListDispatch({
                    type: 'UPDATE_WISHLIST', payload: { wishlist: data.wishlist },
                });

                wishListDispatch({ type: 'UPDATE_STATUS', payload: { status: 'SUCCESS' } });
                return;
            }

            wishListDispatch({ type: 'UPDATE_STATUS', payload: { status: 'FAILED' } });
        })();
    }, []);

    const addToWishlist = async (product) => {
        if (isUserLoggedIn) {
            if (findProductOccurence(product._id)) {
                navigate('/wishlist')
            } else {
                const { data, success, message } = await addToWishlistService(product);
                if (success) {
                    wishListDispatch({
                        type: 'UPDATE_WISHLIST',
                        payload: { wishlist: data.wishlist },
                    });
                    return true;
                }
                return false;
            }
        } else {
            navigate('/login')
        }
    };

    const deleteFromWishlist = async (_id) => {
        const { data, success, message } = await removerFromWishlistService(_id);
        if (success) {
            wishListDispatch({
                type: 'UPDATE_WISHLIST',
                payload: { wishlist: data.wishlist },
            });
            return true;
        }
        return false;
    }

    return (
        <WishContext.Provider
            value=
            {{
                wishListState,
                wishListDispatch,
                addToWishlist,
                deleteFromWishlist,
                wishList,

            }}>
            {children}
        </WishContext.Provider>
    )
}

const useWishList = () => useContext(WishContext);

export { useWishList, WishListProvider };