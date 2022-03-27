import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { useProduct } from "../productContext/productContext";
import { filterReducer } from '../../reducerFunctions/filterReducer/filterReducer.jsx';
import { sortDataByRange } from '../../reducerFunctions/filterReducer/reducerUtilities/filterSortFunc';
import { filterByRating } from '../../reducerFunctions/filterReducer/reducerUtilities/filterRatingFunc';
import { filterByPrice } from '../../reducerFunctions/filterReducer/reducerUtilities/filterPriceFunc';
import { filterDataByCategory } from '../../reducerFunctions/filterReducer/reducerUtilities/filterCategoryFunc';



const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
    const { productList } = useProduct();
    const [state, dispatch] = useReducer(filterReducer, { sortbyrange: "", sortByRating: "", priceValue: 160000, category: { isBike: false, isScooter: false } });

    const sortedData = sortDataByRange(productList, state.sortbyrange);
    const filteredData = filterByRating(sortedData, state.sortByRating);
    const filterDataByPrice = filterByPrice(filteredData, state.priceValue);
    const dataByCategory = filterDataByCategory(filterDataByPrice, state.category.isBike, state.category.isScooter);
    const finalFilteredData = [...dataByCategory];
    return (
        <FilterContext.Provider value={{ dispatch, state, finalFilteredData }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };