import { useCart } from '../../context/cartContext/cartContext';
import { useWishList } from '../../context/wishContext/wishContext';
import deleteFromCart from '../../context/cartContext/cartContext';
import '../cartCard/cartCard.css';

export const CartCard = () => {
    const { cart, deleteFromCart, updateCartQuantity } = useCart();
    const { addToWishlist } = useWishList();

    return (
        cart.map(cartItem => {
            return (
                <div className="cart-product--card" key={cartItem.id}>
                    <img src={cartItem.image} alt="bike image" className="prod-cart__img" />
                    <div className="cart-product--info">
                        <p className="cart-product-name">{cartItem.name}</p>
                        <p className="cart-product--price"> {cartItem.price} </p>
                        <div className="product-qty">
                            <p className="product-qty__text">Quantity:</p>
                            <div className="product-qty-value">
                                <button className="btn-qty btn--minus" disabled={cartItem.qty < 2} onClick={() => updateCartQuantity(cartItem._id, false)}>-</button>
                                <input type="number" className="input-qty--value" value={cartItem.qty} min={1} max={5} />
                                <button className="btn-qty btn--plus" onClick={() => updateCartQuantity(cartItem._id, true)} >+</button>
                            </div>
                        </div>
                        <div className="cart__btn-container">
                            <button className="btn--cart cart--remove" onClick={() => deleteFromCart(cartItem._id)} >Remove From Cart</button>
                            <button className="btn--cart cart-to-wishList" onClick={() => {
                                deleteFromCart(cartItem._id),
                                    addToWishlist(cartItem)
                            }}>Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}