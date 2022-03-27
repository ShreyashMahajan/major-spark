import { useReducer } from "react"
import { useFilter } from "../../../context/filterContext/filterContext";
import { useProduct } from "../../../context/productContext/productContext";




export const FilterSort = () => {
    const { dispatch, state } = useFilter();
    const { sortbyrange } = state

    return (
        <div className="filter-sort">
            <p className="filter__heading">Sort By</p>
            <input type="radio" name="SORT" id="low-to-high" defaultValue="low-to-high" checked={sortbyrange === "LOW_TO_HIGH"} onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })} />
            <label htmlFor="low-to-high">Low to high</label>
            <br />
            <input type="radio" name="SORT" id="high-to-low" defaultValue="high-to-low" checked={sortbyrange === "HIGH_TO_LOW"} onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })} />
            <label htmlFor="high-to-low">High to low</label>
            <br />
        </div>
    )
}