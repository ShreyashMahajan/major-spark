import { findOccuringItem, getUpdatedCartValue } from '../cartReducer/cartReducerUtility/cartReducerUtility.jsx';



export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.cartList.length === 0) {
                return { ...state, cartList: [...state.cartList, { ...action.payload, quantity: 1 },] };
            } else {
                let productOccurence = findOccuringItem(state.cartList, action.payload);

                if (productOccurence) {
                    let newCartValue = getUpdatedCartValue(state.cartList, productOccurence, "INCREASE");
                    return { ...state, cartList: newCartValue };
                } else {
                    return { ...state, cartList: [...state.cartList, { ...action.payload, quantity: 1 }] };
                }
            }
        case 'REMOVE_FROM_CART':
            let cartValueAfterRemove = state.cartList.filter(cartItem => cartItem._id !== action.payload._id);
            return { ...state, cartList: cartValueAfterRemove };
        case 'BTN_INCREASE':
            let cartAfterBtnIncrease = state.cartList.map(cartItem => {
                if (cartItem._id === action.payload._id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                } else {
                    return cartItem;
                }
            })
            return { ...state, cartList: cartAfterBtnIncrease };
        case 'BTN_DECREASE':
            let cartAfterBtnDecrease = state.cartList.map(cartItem => {
                if (cartItem._id === action.payload._id) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 }
                } else {
                    return cartItem;
                }
            })
            return { ...state, cartList: cartAfterBtnDecrease };
        case 'MOVE_TO_CART':
            let productOccurence = findOccuringItem(state.cartList, action.payload);
            if (productOccurence) {
                let newCartValue = getUpdatedCartValue(state.cartList, productOccurence, "INCREASE");
                return { ...state, cartList: newCartValue };
            } else {
                return { ...state, cartList: [...state.cartList, { ...action.payload, quantity: 1 }] };
            }
        default:
            return state;
    }

}