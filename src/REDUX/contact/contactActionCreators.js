import { cc } from './contactActionTypes';

export const addShareData = (shop, shareName, shareEmail, shareMobile, shareStatus) => {
    return {
        type: cc.ADD_SHARE_DATA,
        shop,
        shareName,
        shareEmail,
        shareMobile,
        shareStatus
    }
}