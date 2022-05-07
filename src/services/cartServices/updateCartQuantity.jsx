import fetchDataFromApi from "../../shared/utilities/fetchDataFromApi";

export const updateCartQuantityService = async (productId, increment = true) => {
    const response = await fetchDataFromApi({
        url: `/api/user/cart/${productId}`,
        method: 'post',
        body: {
            action: {
                type: increment ? 'increment' : 'decrement'
            }
        },
        propertyName: 'cart'
    })

    return response;
}