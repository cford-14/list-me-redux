
//CREATE STORE

import { createStore } from 'redux';
import rootReducer from './rootReducer'


export const store = createStore(rootReducer);

/*
state = 
    masterList: [ {}, {}, {}... ],
    shopToView: shop: blank/shop/shop
    submitStatus: addSubmitStatus: true/false
    shopsList: shopsList: []
    

*/


/*
NEXT:
manage list --> delete on submit
Check boxes
contacts and permissions

middleware
share???
firebase


BONUS
work on submit from another page for AddTo and CreateNew
    AddTo and addItmen Form --> submit = change state of submit status
        AddTo --> change submit status to True
        addItemForm --> if submitStatus = true:
            1) deploy ADD_ITEM
            2) clear fields by resetting local state
            3) change submitStatus to false
View --> change state when checked

*/


