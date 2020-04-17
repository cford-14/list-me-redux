import { vc } from './viewActionTypes';

export const changeShopToView = (shop) => {
    return {
        type: vc.CHANGE_SHOP_TO_VIEW,
        shop
    }
}