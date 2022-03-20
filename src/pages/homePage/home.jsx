import '../homePage/home.css'
import { Navbar } from "../../components/navbar/navbar"
import eBike from '../../assets/images/bike-electric.webp';
import scooter from '../../assets/images/scooter.png';
import wishlist from '../../assets/images/wishlist.png';
import { Footer } from "../../components/footer/footer";
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <main className="main-container">
                <header className="hero">
                    <img src={eBike} alt="" className="hero__img" />
                    <div className="hero-detail-container">
                        <h1 className="hero__heading">Buy bikes at Most affordable prices</h1>
                        <p className="hero--text">Just one click away</p>
                        <Link to="/productListing"> <button className="hero--btn">Shop Now</button> </Link>
                    </div>
                </header>
                <div className="category-wrapper">
                    <h2 className="category__heading">Categories</h2>
                    <div className="category-section">
                        <div className="category--card">
                            <img src={scooter} alt="" className="category--card__image" />
                            <div className="category--card-content">
                                <h1 className="category--card__heading">Scooters</h1>
                                <Link to="/productListing"> <button className="category--card-btn">Buy
                                    Now</button></Link>
                            </div>
                        </div>
                        <div className="category--card">
                            <img src={eBike} alt="" className="category--card__image" />
                            <div className="category--card-content">
                                <h1 className="category--card__heading">Bikes</h1>
                                <Link to="/productListing"> <button className="category--card-btn">Buy
                                    Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-wrapper">
                    <h2 className="category__heading">Popular Scooters</h2>
                    <div className="category-section">
                        <div className="product--card ">
                            <img src={scooter} alt="swift car" className="product__img" />
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
                                <a href="/cart_page/cart_page.html"> <button className="product__btn">Buy Now</button> </a>
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                        <div className="product--card ">
                            <img src={scooter} alt="swift car" className="product__img" />
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
                                <a href="/cart_page/cart_page.html"> <button className="product__btn">Buy Now</button> </a>
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                        <div className="product--card ">
                            <img src={scooter} alt="swift car" className="product__img" />
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
                                <a href="/cart_page/cart_page.html"> <button className="product__btn">Buy Now</button> </a>
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                    </div>
                    <a href="/product_listing/product_listing.html"> <button className="btn-view-all">View all</button> </a>
                </div>
                <div className="category-wrapper">
                    <h2 className="category__heading">Popular Bikes</h2>
                    <div className="category-section">
                        <div className="product--card ">
                            <img src={eBike} alt="swift car" className="product__img" />
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
                                <a href="/cart_page/cart_page.html"> <button className="product__btn">Buy Now</button> </a>
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                        <div className="product--card ">
                            <img src={eBike} alt="swift car" className="product__img" />
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
                                <a href="/cart_page/cart_page.html"> <button className="product__btn">Buy Now</button> </a>
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                        <div className="product--card ">
                            <img src={eBike} alt="swift car" className="product__img" />
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
                                <a href="/cart_page/cart_page.html"> <button className="product__btn">Buy Now</button> </a>
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                    </div>
                    <a href="/product_listing/product_listing.html"> <button className="btn-view-all">View all</button> </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}