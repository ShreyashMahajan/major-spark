import { useFilter } from '../../../context/filterContext/filterContext';
import '../filterPrice/filterPrice.css';

export const FilterPrice = () => {
    const { dispatch, state } = useFilter();
    const { priceValue } = state;
    return (
        <div className="filter--price">
            <p className="filter__heading">Price</p>
            <input type="range" min="50000" max="160000" className="slider" value={priceValue}
                onChange={(e) => dispatch({ type: "PRICE_RANGE", priceValue: e.target.value })} id="filterRange" name='range' />
            <span> {priceValue}</span>
        </div>
    )
}