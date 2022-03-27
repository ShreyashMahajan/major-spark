import { useFilter } from '../../context/filterContext/filterContext';
import './productCard.css'

export const ProductCard = () => {
    const { finalFilteredData } = useFilter();

    return (
        <>
            {
                finalFilteredData.map((item) => {
                    return (
                        <div className="product--card">
                            <div>
                                <img src={item.image} alt="swift car" className="product__img" />
                                <h3 className="product--name">{item.name}</h3>
                                <p className="product--version">{item.version}</p>
                                <div className="product-spec">
                                    <p className="product-info">{item.speed}</p>
                                    <p className="product-info">{item.engine_type}</p>
                                    <p className="product-info">{item.variant}</p>
                                </div>
                                <div className="product-price">
                                    <p className="product-emi">₹{item.emi}/month</p>
                                    <p className="product-total">{item.price}</p>
                                </div>
                                <p className="product--downpayment">Zero downpayment</p>
                                <div className="product-cta">
                                    <button className="product__btn" onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: item })}>Buy
                                        Now</button>
                                    <img src="/images/home-page/wishlist-black.png" alt="" className="product-wishlist" />
                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </>


    )
}
