
//REDUCERS
import { constants } from './listActionTypes';
import { listInitialState } from  './listInitialState';

export default (state=listInitialState, action) => {
    switch (action.type) {
        case constants.ADD_ITEM:
            console.log(state);
            return Object.assign({}, state, {
                masterList: [ 
                    ...state.masterList,  
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
                }
            )
        case constants.TOGGLE_CHECK:
            return Object.assign({}, state, {                
                masterList: state.masterList.map(listItem => listItem.itemNumber === action.itemNumber ? {...listItem, checked: !listItem.checked} : listItem) //?
                })
        case constants.REMOVE_CHECKED:
            return Object.assign({}, state, {
                masterList: state.masterList.filter((listItem)=> {
                    return listItem.checked === false 
                })
            })
        case constants.DELETE_LIST:
            console.log("AAAAAAAAAAAA!")
            return Object.assign({}, state, {
                masterList: state.masterList.map(listItem => {
                    return(
                        {
                            ...listItem, 
                            stores: listItem.stores.filter(shop=> shop !== action.shop)
                        }
                    )

                   /*     console.log(listItem.stores.filter(shop => shop !== "Your"))

                    listItem.stores.indexOf(action.shop) !== -1 ? listItem :{
                            ...listItem,
                            
                        }*/
                    //listItem.stores.filter(shop => shop !== action.shop)
                })
            })
                
        default:
            return state 
    }
}

/*

map>>
    {
    li.item
    li.quant
    li.note
    li.stores
    }
    {
    li.item
    li.quant
    li.note
    li.stores
    }
[
    {
        itmeNumber: 100
        checked: false
        ...
    },
    {}
]
*/