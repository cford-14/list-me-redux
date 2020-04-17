
//REDUCERS
import { constants } from './listActionTypes';
import { listInitialState } from  './listInitialState';

export default (state=listInitialState, action) => {
    switch (action.type) {
        case constants.ADD_ITEM:
            console.log(state);
            return Object.assign([], state, (
                [ 
                    ...state,  
                        {
                            itemNumber: action.itemNumber,
                            checked: false,
                            item: action.item,
                            quantity: action.quantity,
                            units: action.units,
                            notes: action.notes,
                            stores: action.stores
                        }
                    ]
                )
            )
        case constants.TOGGLE_CHECK:
            return Object.assign({}, state, {
                masterList: state.masterList.map((listItem) => {
                    return listItem.id === action.id ?
                    Object.assign({}, {checked: !listItem.checked}) : listItem
                })
            })
        case constants.REMOVE_CHECKED:
            return Object.assign({}, state, {
                masterList: state.masterList.filter((listItem)=> {
                    return listItem.checked === true 
                })
            })
        case constants.DELETE_LIST:
            return Object.assign({}, state, {
                masterList: state.masterlist.map((listItem)=> {
                    listItem.stores.filter(shop => {
                        return shop !== action.shop
                    })
                    return listItem.stores.length > 0 
                })
            })
        default:
            return state 
    }
}

/*
//item reducer
export const item = (state = {}, action) => {
    switch(action.type) {
        case constants.TOGGLE_CHECK:
            return (
                state.masterList.id !== action.id ? state : { ...state, checked: false}
            )
        case constants.ADD_ITEM:
            return {
                id: action.id,
                checked: false,
                item: action.item,
                quantity: action.quantity,
                units: action.units,
                notes: action.notes,
                stores: action.stores
            }
        case constants.DELETE_LIST:
            let newStores = state.masterList.stores.filter(store => store !== action.store)
            if (newStores.length > 0) {
                return{
                    ...state,
                    stores: newStores
                }
            }
        default:
            return state
    }
        
};


//items reducer
export const items =(state=[], action) => {
    switch(action.type) {
        case constants.TOGGLE_CHECK:
            return state.map(i=>item(i, action))
        case constants.ADD_ITEM:
            return [...state, item({}, action)]
        case constants.DELETE_CHECKED:
            const checkStatus = item.checked;
            return state.filter(i => item.checked === !checkStatus)       
        case constants.DELETE_LIST:
            return state.map(i=>item(i, action))
        default:
            return state
    }
};
*/