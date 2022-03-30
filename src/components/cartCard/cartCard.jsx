import { useCart } from '../../context/cartContext/cartContext';
import { useWishList } from '../../context/wishContext/wishContext';
import '../cartCard/cartCard.css';

export const CartCard = () => {
    const { cartState, cartDispatch } = useCart();
    const { cartList } = cartState;
    const { wishListDispatch } = useWishList();
    return (
        cartList.map(cartItem => {
            return (
                <div className="cart-product--card" key={cartItem.id}>
                    <img src={cartItem.image} alt="bike image" className="prod-cart__img" />
                    <div className="cart-product--info">
                        <p className="cart-product-name">{cartItem.name}</p>
                        <p className="cart-product--price"> {cartItem.price} </p>
                        <div className="product-qty">
                            <p className="product-qty__text">Quantity:</p>
                            <div className="product-qty-value">
                                <button className="btn-qty btn--minus" onClick={() => cartDispatch({ type: 'BTN_DECREASE', payload: cartItem })}>-</button>
                                <input type="number" className="input-qty--value" value={cartItem.quantity} min={1} max={5} />
                                <button className="btn-qty btn--plus" onClick={() => cartDispatch({ type: 'BTN_INCREASE', payload: cartItem })} >+</button>
                            </div>
                        </div>
                        <div className="cart__btn-container">
                            <button className="btn--cart cart--remove" onClick={() => cartDispatch({ type: 'REMOVE_FROM_CART', payload: cartItem })} >Remove From Cart</button>
                            <button className="btn--cart cart-to-wishList" onClick={() => {
                                wishListDispatch({ type: 'MOVE_TO_WISHLIST', payload: cartItem }),
                                    cartDispatch({ type: 'REMOVE_FROM_CART', payload: cartItem })
                            }}>Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}