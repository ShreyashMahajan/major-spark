
export const filterBySearch = (productData, searchItem) => {
    if (searchItem) {
        return productData.filter(productItem =>
            productItem.name.toLowerCase().includes(searchItem.toLowerCase()));
    }
    return productData;

}

