import { vc } from './viewActionTypes';
import { viewInitialState } from  './viewInitialState';

export default (state=viewInitialState, action) => {
    switch (action.type) {
        case vc.CHANGE_SHOP_TO_VIEW:
            return Object.assign({}, state, {
                shop: action.shop
            })
        default:
            return state
    }
}


