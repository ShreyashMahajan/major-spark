import '../cartPage/cartPage.css';

import { Navbar } from "../../components/navbar/navbar"
import { useCart } from '../../context/cartContext/cartContext';
import { CartCard } from '../../components/cartCard/cartCard';

export const CartPage = () => {
  const { cart, cartTotal } = useCart();

  const totalPrice = cartTotal(cart);
  console.log('get total price', totalPrice)

  return (
    <div className='mainCart'>
      <Navbar />
      <main className="main-container">
        <div className="cart--box">
          <h1 className="cart__heading">My Cart</h1>
          <div className="cart-container">
            <div className="cart-productList">

              <CartCard />

            </div>
            <div className="cart--price-details">
              <p className="cart-price__heading">PRICE DETAILS</p>
              <div className="cart-price-cont">
                <p className="cart-price__text">Price (2 items) </p>
                <p className="cart-price-value">{totalPrice.totalPrice}</p>
              </div>
              <div className="delivery-charge-detail">
                <p className="delivery-charge-text">Delivery Charge</p>
                <p className="delivery-charge--value"> {totalPrice.totalPrice ? 1000 : 0} </p>
              </div>
              <div className="cart--total">
                <p className="cart-price__heading">TOTAL AMOUNT</p>
                <p className="cart-total--value">{totalPrice.totalPrice ? totalPrice.totalPrice + 1000 : 0}</p>
              </div>
              <button className="btn-place-order">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}