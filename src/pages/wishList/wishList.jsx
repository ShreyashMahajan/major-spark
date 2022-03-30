import { Navbar } from "../../components/navbar/navbar";
import { WishCard } from "../../components/wishCard/wishCard"

import '../wishList/wishList.css'

export const Wishlist = () => {
  return (
    <div className="wish-container">
      <Navbar />
      <main className="main-container">
        <div className="category-wrapper">
          <h2 className="category__heading">My Wishlist</h2>
          <div className="category-section">
            <WishCard />
          </div>
          <button className="btn-view-all">View all</button>
        </div>
      </main>

    </div>
  )
}