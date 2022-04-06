import '../homePage/home.css'
import { Navbar } from "../../components/navbar/navbar"
import wishlist from '../../assets/images/wishlist.png';
import { Footer } from "../../components/footer/footer";
import { Link, NavLink } from 'react-router-dom';
import { useFilter } from '../../context/filterContext/filterContext';
import tork_Kratos from '../../assets/images/backendImage/tork_Kratos.webp';
import scooter from '../../assets/images/scooter.png';
import ebike from '../../assets/images/bike-electric.webp';
import { useProduct } from '../../context/productContext/productContext';

export const Home = () => {
    const { dispatch } = useFilter();
    const { categoryList } = useProduct();

    return (
        <div className="home-container">
            <Navbar />
            <main className="main-container">
                <header className="hero">
                    <img src={tork_Kratos} alt="" className="hero__img" />
                    <div className="hero-detail-container">
                        <h1 className="hero__heading">Buy bikes at Most affordable prices</h1>
                        <p className="hero--text">Just one click away</p>
                        <Link to="/productListing"> <button className="hero--btn">Shop Now</button> </Link>
                    </div>
                </header>
                <div className="category-wrapper">
                    <h2 className="category__heading">Categories</h2>
                    <div className="category-section">

                        {
                            categoryList.map(categoryItem => {
                                return (
                                    <NavLink to='/productListing'>
                                        <div className="category--card" onClick={() => dispatch({ type: categoryItem.type, payload: true })}>
                                            <img src={categoryItem.image} alt="ather" className="category--card__image" />
                                            <div className="category--card-content">
                                                <h1 className="category--card__heading">{categoryItem.categoryName}</h1>
                                                <button className="category--card-btn">Buy
                                                    Now</button>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="category-wrapper">
                    <h2 className="category__heading">Popular Scooters</h2>
                    <div className="category-section">
                        <div className="product--card ">
                            <img src={scooter} alt="scooter" className="product__img" />
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
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                        <div className="product--card ">
                            <img src={scooter} alt="scooter" className="product__img" />
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
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                        <div className="product--card ">
                            <img src={scooter} alt="scooter" className="product__img" />
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
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                    </div>
                    <NavLink to='/productListing'><button className="btn-view-all">View all</button></NavLink>
                </div>
                <div className="category-wrapper">
                    <h2 className="category__heading">Popular Bikes</h2>
                    <div className="category-section">
                        <div className="product--card ">
                            <img src={ebike} alt="scooter" className="product__img" />
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
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                        <div className="product--card ">
                            <img src={ebike} alt="scooter" className="product__img" />
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
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                        <div className="product--card ">
                            <img src={ebike} alt="scooter" className="product__img" />
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
                                <img src={wishlist} alt="" className="product-wishlist" />
                            </div>
                        </div>
                    </div>
                    <NavLink to='/productListing'><button className="btn-view-all">View all</button> </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}