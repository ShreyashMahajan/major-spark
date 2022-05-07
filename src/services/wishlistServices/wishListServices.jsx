import fetchDataFromApi from '../../shared/utilities/fetchDataFromApi';

export const getWishListDataService = async () => {
    return await fetchDataFromApi({
        url: '/api/user/wishlist',
        method: 'post',
        propertyName: 'wishlist'
    });
};

export const addToWishlistService = async (product) => {
    return await fetchDataFromApi({
        url: '/api/user/wishlist',
        method: 'post',
        body: { product },
        propertyName: 'wishlist'
    });
};


export const removerFromWishlistService = async (_id) => {
    return await fetchDataFromApi({
        url: `/api/user/wishlist/${_id}`,
        method: 'delete',
        propertyName: 'wishlist'
    })
}
