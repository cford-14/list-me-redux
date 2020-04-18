import { cc } from './contactActionTypes';
import { contactInitialState } from './contactInitialState';

export default (state=contactInitialState, action) => {
    switch (action.type) {
        case cc.ADD_SHARE_DATA:
            return Object.assign([], state, (
                [
                    ...state,
                    {
                        shop: action.shop,
                        shareName: action.shareName,
                        shareEmail: action.shareEmail,
                        shareMobile: action.shareMobile,
                        shareStatus: action.shareStatus
                    }
                ]
            ))
        default:
            return state
    }
}