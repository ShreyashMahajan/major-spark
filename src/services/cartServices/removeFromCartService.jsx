import fetchDataFromApi from "../../shared/utilities/fetchDataFromApi";

export const removerFromCartService = async (productId) => {
    const response = await fetchDataFromApi({
        url: `/api/user/cart/${productId}`,
        method: 'delete',
        propertyName: 'cart'
    })

    return response;
}