

export const FilterRating = () => {
    const { dispatch } = useFilter();
    return (
        <div className="filter--rating">
            <p className="filter__heading">Rating</p>
            <input type="radio" name="rating" id="four-and-above" defaultValue="four-and-above" onClick={() => dispatch({ type: "RATING", payload: "FOUR_AND_ABOVE" })} />
            <label htmlFor="four-and-above">4 stars and above</label>
            <br />
            <input type="radio" name="rating" id="three-star" defaultValue="three-star" onClick={() => dispatch({ type: "RATING", payload: "THREE_STAR" })} />
            <label htmlFor="three-star">3 stars</label>
            <br />
            <input type="radio" name="rating" id="two-star" defaultValue="two-star" onClick={() => dispatch({ type: "RATING", payload: "TWO_STAR" })} />
            <label htmlFor="two-star">2 stars</label>
            <br />
            <input type="radio" name="rating" id="one-star" defaultValue="one-star" onClick={() => dispatch({ type: "RATING", payload: "ONE_STAR" })} />
            <label htmlFor="one-star">1 star</label>
        </div>
    )
}