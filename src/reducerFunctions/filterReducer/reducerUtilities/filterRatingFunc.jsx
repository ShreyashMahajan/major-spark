export const filterByRating = (productData, type) => {
    if (productData.length !== 0) {
        switch (type) {
            case 'FOUR_AND_ABOVE':
                return productData.filter(item => item.rating >= 4);
            case 'THREE_STAR':
                return productData.filter(item => item.rating === 3);
            case 'TWO_STAR':
                return productData.filter(item => item.rating === 2);
            case 'ONE_STAR':
                return productData.filter(item => item.rating === 1);
            default:
                return productData;
        }

    } else {
        return productData;
    }
}
