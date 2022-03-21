import { useReducer } from "react"




export const FilterSort = () => {
    const { dispatch } = useFilter();

    return (
        <div className="filter-sort">
            <p className="filter__heading">Sort By</p>
            <input type="radio" name="SORT" id="low-to-high" defaultValue="low-to-high" onClick={() => dispatch({ type: "SORT", payload: "Low_To_High" })} />
            <label htmlFor="low-to-high">Low to high</label>
            <br />
            <input type="radio" name="SORT" id="high-to-low" defaultValue="high-to-low" onClick={() => dispatch({ type: "SORT", payload: "High_To_Low" })} />
            <label htmlFor="high-to-low">High to low</label>
            <br />
        </div>
    )
}