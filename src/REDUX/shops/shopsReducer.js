import { shopsC } from './shopsActionTypes';
import { shopsInitialState } from './shopsInitialState';

export default (state=shopsInitialState, action) => {
    switch (action.type) {
        case shopsC.ADD_NEW_SHOP:
            return Object.assign({}, state, {
                shopsList: state.shopsList.concat(action.shop)
            }) 
        case shopsC.DELETE_SHOP:
            return Object.assign({}, state, {
                shopsList: state.shopsList.filter((shop) => {
                    return shop !== action.shop
                })
            })
        default:
            return state
    }
};