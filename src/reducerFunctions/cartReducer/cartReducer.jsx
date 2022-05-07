import { findOccuringItem, getUpdatedCartValue } from '../cartReducer/cartReducerUtility/cartReducerUtility.jsx';



export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CART': {
            return { ...state, cart: action.payload.cart };
        }
        case 'UPDATE_STATUS': {
            return { ...state, status: action.payload.status };
        }
        default:
            return state;
    }

}