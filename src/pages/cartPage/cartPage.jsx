import '../cartPage/cartPage.css';

import { Navbar } from "../../components/navbar/navbar"

export const CartPage = () => {
  return (
    <div className='mainCart'>
      <Navbar />
      <main className="main-container">
        <div className="cart--box">
          <h1 className="cart__heading">My Cart</h1>
          <div className="cart-container">
            <div className="cart-productList">
              <div className="cart-product--card">
                <img src="/images/home-page/bike-electric.webp" alt="bike image" className="prod-cart__img" />
                <div className="cart-product--info">
                  <p className="cart-product-name">Lorem Spark 2021</p>
                  <p className="cart-product--price">70,000</p>
                  <div className="product-qty">
                    <p className="product-qty__text">Quantity:</p>
                    <div className="product-qty-value">
                      <button className="btn-qty btn--minus">-</button>
                      <input type="number" className="input-qty--value" defaultValue={1} min={1} max={5} />
                      <button className="btn-qty btn--plus">+</button>
                    </div>
                  </div>
                  <div className="cart__btn-container">
                    <button className="btn--cart cart--remove">Remove From Cart</button>
                    <button className="btn--cart cart-to-wishList">Move to Wishlist</button>
                  </div>
                </div>
              </div>
              <div className="cart-product--card">
                <img src="/images/home-page/bike-electric.webp" alt="bike image" className="prod-cart__img" />
                <div className="cart-product--info">
                  <p className="cart-product-name">Lorem Spark 2021</p>
                  <p className="cart-product--price">70,000</p>
                  <div className="product-qty">
                    <p className="product-qty__text">Quantity:</p>
                    <div className="product-qty-value">
                      <button className="btn-qty btn--minus">-</button>
                      <input type="number" className="input-qty--value" defaultValue={1} min={1} max={5} />
                      <button className="btn-qty btn--plus">+</button>
                    </div>
                  </div>
                  <div className="cart__btn-container">
                    <button className="btn--cart cart--remove">Remove From Cart</button>
                    <button className="btn--cart cart-to-wishList">Move to Wishlist</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart--price-details">
              <p className="cart-price__heading">PRICE DETAILS</p>
              <div className="cart-price-cont">
                <p className="cart-price__text">Price (2 items) </p>
                <p className="cart-price-value">79,999</p>
              </div>
              <div className="delivery-charge-detail">
                <p className="delivery-charge-text">Delivery Charge</p>
                <p className="delivery-charge--value">1,000</p>
              </div>
              <div className="cart--total">
                <p className="cart-price__heading">TOTAL AMOUNT</p>
                <p className="cart-total--value">84,999</p>
              </div>
              <button className="btn-place-order">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}