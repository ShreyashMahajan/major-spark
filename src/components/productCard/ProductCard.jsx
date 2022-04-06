import { useCart } from '../../context/cartContext/cartContext.jsx'
import { useFilter } from '../../context/filterContext/filterContext';
import './productCard.css'
import wishListNotActiveImg from '../../assets/images/wishlist-black.png';
import { useWishList } from '../../context/wishContext/wishContext';

export const ProductCard = () => {
    const { finalFilteredData } = useFilter();
    const { cartDispatch } = useCart();
    const { wishListDispatch } = useWishList();

    return (
        <>
            {
                finalFilteredData.map((item) => {
                    return (
                        <div className="product--card" key={item.id}>
                            <div>
                                <img src={item.image} alt="swift car" className="product__img" />
                                <h3 className="product--name">{item.name}</h3>
                                <p className="product--version">{item.version}</p>
                                <div className="product-spec">
                                    <p className="product-info">{item.speed} kmph</p>
                                    <p className="product-info">{item.engine_type}</p>
                                    <p className="product-info">{item.variant}</p>
                                </div>
                                <div className="product-price">
                                    <p className="product-emi">₹{item.price}</p>
                                    <p className="product-total">{item.price}/month</p>
                                </div>
                                <p className="product--downpayment">Zero downpayment</p>
                                <div className="product-cta">
                                    <button className="product__btn" onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: item })}>Buy
                                        Now</button>
                                    <img src={wishListNotActiveImg} onClick={() => wishListDispatch({ type: 'ADD_WISHLIST', payload: item })} alt="" className="product-wishlist" />                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </>


    )
}
