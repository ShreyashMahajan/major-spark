export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SORT':
            return { ...state, sortbyrange: action.payload };
        case 'RATING':
            return { ...state, sortByRating: action.payload };
        case 'CATEGORY_SCOOTER':
            return { ...state, category: { ...state["category"], isScooter: !state.category.isScooter } };
        case 'CATEGORY_BIKE':
            return { ...state, category: { ...state["category"], isBike: !state.category.isBike } };
        case 'PRICE_RANGE':
            return { ...state, sortByPriceRange: action.type, priceValue: action.priceValue };
        case 'CLEAR':
            return {
                ...state, sortByPriceRange: "", sortbyrange: '', sortByRating: '',
                category: { ...state["category"], isBike: false, isScooter: false }, priceValue: 160000,

            };
        case 'SEARCH':
            return { ...state, sortBySearch: action.type, searchItem: action.payload };
        case 'FROM_CATEGORY_SCOOTER':
            return { ...state, category: { ...state["category"], isScooter: action.payload } };
        case 'FROM_CATEGORY_BIKE':
            return { ...state, category: { ...state["category"], isBike: action.payload } };
        default:
            return state;
    }
}