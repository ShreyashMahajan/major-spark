import { useFilter } from "../../../context/filterContext/filterContext";


export const FilterCategory = () => {
    const { state, dispatch } = useFilter();
    const { category } = state;
    const { isBike, isScooter } = category;


    return (
        <div className="filter--category">
            <p className="filter__heading">Category</p>
            <input type="checkbox" id="item-one" defaultValue="bike" checked={isBike} onChange={(e) => dispatch({ type: "CATEGORY_BIKE" })} />
            <label htmlFor="item-one">Bike</label><br />
            <input type="checkbox" id="item-two" defaultValue="scooter" checked={isScooter} onChange={(e) => dispatch({ type: "CATEGORY_SCOOTER" })} />
            <label htmlFor="item-two">Scooter</label>
        </div>
    )
}