export const filterByPrice = (dataList, price) => {
    if (dataList.length !== 0) {
        return dataList.filter(item => item.price <= price);
    }
    return dataList;
}
