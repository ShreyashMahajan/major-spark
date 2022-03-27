import wishListImg from '../../assets/images/wish_active.png';
import { useCart } from '../../context/cartContext/cartContext';
import { useWishList } from '../../context/wishContext/wishContext';

export const WishCard = () => {
    const { wishListState, wishListDispatch } = useWishList();
    const { wishList } = wishListState;
    const { cartDispatch } = useCart();

    return (
        <>
            {
                wishList.map(wishItem => {
                    return (
                        <div className="product--card " key={wishItem.id}>
                            <img src={wishItem.image} alt="swift car" className="product__img" />
                            <h3 className="product--name">{wishItem.name} </h3>
                            <p className="product--version">{wishItem.version} </p>
                            <div className="product-spec">
                                <p className="product-info">{wishItem.speed}</p>
                                <p className="product-info">{wishItem.engine_type}</p>
                                <p className="product-info">{wishItem.variant}</p>
                            </div>
                            <div className="product-price">
                                <p className="product-emi">{wishItem.emi}/month</p>
                                <p className="product-total">{wishItem.price}</p>
                            </div>
                            <p className="product--downpayment">Zero downpayment</p>
                            <div className="product-cta">
                                <button className="product__btn cart--remove" onClick={() => {
                                    {
                                        cartDispatch({ type: 'MOVE_TO_CART', payload: wishItem }),
                                            wishListDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: wishItem })
                                    }
                                }} >Move to cart</button>
                                <img src={wishListImg} alt="wishlist icon" className="wishlist__img--active product-wishlist" />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}