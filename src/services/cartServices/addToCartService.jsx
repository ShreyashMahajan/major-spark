import fetchDataFromApi from '../../shared/utilities/fetchDataFromApi';

export const addToCartService = async (product) => {
    const response = await fetchDataFromApi({
        url: '/api/user/cart',
        method: 'post',
        body: { product },
        propertyName: 'cart'
    })

    return response;
};