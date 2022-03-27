

const findOccuringItem = (itemList, currentItem) => {
    return itemList.find(cartItem => cartItem._id === currentItem._id);
}

const getUpdatedCartValue = (itemList, occuringItem, type) => {
    let newCartValue;
    if (type === "INCREASE") {
        newCartValue = itemList.map(cartItem => {
            if (cartItem._id === occuringItem._id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
                return cartItem;
            }
        })
    } else {
        newCartValue = itemList.map(cartItem => {
            if (cartItem._id === occuringItem._id) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else {
                return cartItem;
            }
        })
    }
    return newCartValue;
}

export { findOccuringItem, getUpdatedCartValue };