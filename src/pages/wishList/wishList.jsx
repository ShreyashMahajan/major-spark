import { Navbar } from "../../components/navbar/navbar"
import '../wishList/wishList.css'

export const Wishlist = () => {
  return (
    <div className="wish-container">
      <Navbar />
      <main className="main-container">
        <div className="category-wrapper">
          <h2 className="category__heading">My Wishlist</h2>
          <div className="category-section">
            <div className="product--card ">
              <img src="/images/home-page/bike-electric.webp" alt="swift car" className="product__img" />
              <h3 className="product--name">2021 Lorem </h3>
              <p className="product--version">VDI BS VI span </p>
              <div className="product-spec">
                <p className="product-info">100 km/hr</p>
                <p className="product-info">Automatic</p>
                <p className="product-info">Electric</p>
              </div>
              <div className="product-price">
                <p className="product-emi">₹4,333/month</p>
                <p className="product-total">75,000</p>
              </div>
              <p className="product--downpayment">Zero downpayment</p>
              <div className="product-cta">
                <button className="product__btn cart--remove">Move to cart</button>
                <img src="/images/wish_active.png" alt="wishlist icon" className="wishlist__img--active product-wishlist" />
              </div>
            </div>
            <div className="product--card ">
              <img src="/images/home-page/bike-electric.webp" alt="swift car" className="product__img" />
              <h3 className="product--name">2021 Lorem </h3>
              <p className="product--version">VDI BS VI span </p>
              <div className="product-spec">
                <p className="product-info">100 km/hr</p>
                <p className="product-info">Automatic</p>
                <p className="product-info">Electric</p>
              </div>
              <div className="product-price">
                <p className="product-emi">₹4,333/month</p>
                <p className="product-total">75,000</p>
              </div>
              <p className="product--downpayment">Zero downpayment</p>
              <div className="product-cta">
                <button className="product__btn cart--remove">Move to cart</button>
                <img src="/images/wish_active.png" alt="wishlist icon" className="wishlist__img--active product-wishlist" />
              </div>
            </div>
            <div className="product--card ">
              <img src="/images/home-page/bike-electric.webp" alt="swift car" className="product__img" />
              <h3 className="product--name">2021 Lorem </h3>
              <p className="product--version">VDI BS VI span </p>
              <div className="product-spec">
                <p className="product-info">100 km/hr</p>
                <p className="product-info">Automatic</p>
                <p className="product-info">Electric</p>
              </div>
              <div className="product-price">
                <p className="product-emi">₹4,333/month</p>
                <p className="product-total">75,000</p>
              </div>
              <p className="product--downpayment">Zero downpayment</p>
              <div className="product-cta">
                <button className="product__btn cart--remove">Move to cart</button>
                <img src="/images/wish_active.png" alt="wishlist icon" className="wishlist__img--active product-wishlist" />
              </div>
            </div>
          </div>
          <button className="btn-view-all">View all</button>
        </div>
      </main>

    </div>
  )
}