import { shopsC } from './shopsActionTypes';

export const addShop = shop => {
    return {
        type: shopsC.ADD_NEW_SHOP,
        shop
    }
};

export const deleteShopFromShops = shop => {
    return {
        type: shopsC.DELETE_SHOP,
        shop
    }
};

