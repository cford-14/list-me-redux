import { shopsC } from './shopsActionTypes';
import { shopsInitialState } from './shopsInitialState';

export default (state=shopsInitialState, action) => {
    switch (action.type) {
        case shopsC.ADD_NEW_SHOP:
            return Object.assign({}, state, {
                shopsList: state.shopsList.concat(action.shop),
                checkList: {...state.checkList, 
                            [action.shop]: false
                        }
            }) 
        case shopsC.DELETE_SHOP:
            return Object.assign({}, state, {
                shopsList: state.shopsList.filter(shop => shop !== action.shop)
            })
        default:
            return state
    }
};

