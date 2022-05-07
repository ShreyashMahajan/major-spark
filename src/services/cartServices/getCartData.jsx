import fetchDataFromApi from "../../shared/utilities/fetchDataFromApi"

export const getCartDataService = async () => {
    const response = await fetchDataFromApi({
        url: '/api/user/cart',
        method: 'get',
        propertyName: 'cart'
    })
    return response;
}