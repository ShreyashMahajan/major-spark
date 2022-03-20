import '../navbar/navbar.css';
import search from '../../assets/images/search.png';
import Cart from '../../assets/images/cart.png';
import wishlist from '../../assets/images/wishlist.png';
import logout from '../../assets/images/logout.png';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <NavLink to="/" className="link--home" > <h3 className='link--home nav__heading'>MajorSpark</h3> </NavLink>
                <div className="search-container">
                    <input type="search" name="searchBar" className="input__search" placeholder="search here" />
                    <button className="btn__search"><img src={search} alt="search" className="img--icon" /></button>
                </div>
                <div className="customer-info">
                    <NavLink to="/login"> <button className="btn--login">Login</button> </NavLink>
                    <NavLink to="/wishlist">
                        <div className="wishlist-box">
                            <div className="badge">
                                <img src={wishlist} alt="wishlist image" className="badge__img" />
                                <span className="badge__text">7</span>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/cart">
                        <div className="cart-box">
                            <div className="badge">
                                <img src={Cart} alt="Cart image" className="badge__img" />
                                <span className="badge__text">1</span>
                            </div>
                            <p className="text--cart">Cart</p>
                        </div>
                    </NavLink>
                    <a href="#" className="item--link">
                        <img src={logout} alt="Logout icon" className="badge__img" />
                    </a>
                </div>
                <div className="search-container search-container2">
                    <input type="search" name="searchBar" className="input__search" placeholder="search here" />
                    <NavLink to="/logout"><button className="btn__search"><img src={search} alt="search" className="img--icon" /></button></NavLink>
                </div>
            </nav>


        </>
    )
}