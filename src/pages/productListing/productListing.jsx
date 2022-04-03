import '../productListing/productListing.css';

import { FilterCategory } from "../../components/filterCategory/filterCategory/filterCategory"
import { FilterPrice } from "../../components/filterCategory/filterPrice/filterPrice"
import { FilterRating } from "../../components/filterCategory/filterRating/filterRating"
import { FilterSort } from "../../components/filterCategory/filterSort/filterSort"
import { Footer } from "../../components/footer/footer"
import { Navbar } from "../../components/navbar/navbar"
import { ProductCard } from "../../components/productCard/ProductCard"
import { useFilter } from '../../context/filterContext/filterContext';



export const ProductListing = () => {

    const { dispatch } = useFilter();

    return (
        <div className="product-container">
            <Navbar showSearch={true} />
            <aside className="sidebar">
                <div className="product-filter-container">
                    <div className="filter-content">
                        <p className="filter--text">Filters</p>
                        <p className="filter--clear" onClick={() => dispatch({ type: "CLEAR" })} >Clear</p>
                    </div>
                    <FilterPrice />
                    <FilterCategory />
                    <FilterRating />
                    <FilterSort />

                </div>
            </aside>

            <main className="main-container">
                <div className="category-wrapper">
                    <h2 className="category__heading">Show vehicles</h2>
                    <div className="category-section">
                        <ProductCard />
                    </div>
                </div>
            </main>


            <Footer />
        </div>
    )
}