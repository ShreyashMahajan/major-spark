import '../cartPage/cartPage.css';

import { Navbar } from "../../components/navbar/navbar"
import { useCart } from '../../context/cartContext/cartContext';
import { CartCard } from '../../components/cartCard/cartCard';

export const CartPage = () => {
  const { cartState } = useCart();

  const totalReducer = (prev, curr) => ({ ...prev, total: prev.total + curr.price * curr.quantity })
  const total = cartState.cartList.reduce(totalReducer, { total: 0 });
  console.log("total price ", total);

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
                <p className="cart-price-value">{total.total}</p>
              </div>
              <div className="delivery-charge-detail">
                <p className="delivery-charge-text">Delivery Charge</p>
                <p className="delivery-charge--value"> {total.total ? 1000 : 0} </p>
              </div>
              <div className="cart--total">
                <p className="cart-price__heading">TOTAL AMOUNT</p>
                <p className="cart-total--value">{total.total ? total.total + 1000 : 0}</p>
              </div>
              <button className="btn-place-order">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}