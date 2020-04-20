import { createStore } from 'redux';
import rootReducer from './rootReducer'


export const store = createStore(rootReducer);

/*
state = 
    shareData: [{},{}],  //REDUX/contact
    masterList: [ {itemNumber, checked, item, quantity, units, notes, stores}, {}, {}... ], //REDUC/List
    shopsList: shopsList: [],  //REDUX/shops
                checkList,  
    submitStatus: addSubmitStatus: true/false //REDUX/submitStatus
    shopToView: shop: "", //REDUX/View

*/


/*
NEXT:
middleware
firebase


BONUS
work on submit from another page for AddTo and CreateNew
    AddTo and addItmen Form --> submit = change state of submit status
        AddTo --> change submit status to True
        addItemForm --> if submitStatus = true:
            1) deploy ADD_ITEM
            2) clear fields by resetting local state
            3) change submitStatus to false
add immages

*/


