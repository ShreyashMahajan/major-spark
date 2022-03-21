

export const FilterCategory = () => {
    const { dispatch } = useFilter();
    return (
        <div className="filter--category">
            <p className="filter__heading">Category</p>
            <input type="checkbox" id="item-one" defaultValue="bike" onClick={(e) => dispatch({ type: "CATEGORY_BIKE", showBike: e.target.checked })} />
            <label htmlFor="item-one">Bike</label><br />
            <input type="checkbox" id="item-two" defaultValue="scooter" onClick={(e) => dispatch({ type: "CATEGORY_SCOOTER", showScooter: e.target.checked })} />
            <label htmlFor="item-two">Scooter</label>
        </div>
    )
}