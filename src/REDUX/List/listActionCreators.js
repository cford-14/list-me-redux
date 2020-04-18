
//ACTION CREATORS

import { constants } from './listActionTypes';

//list actions

let nextId = 10001;

export const addItem = (item, quantity, units, notes, stores)  => {
    //payload =  itemName, quantity, units, notes, stores 
    return { 
        type: constants.ADD_ITEM, 
        itemNumber: nextId++, 
        checked: false,
        item, 
        quantity, 
        units, 
        notes, 
        stores //array
    }
}; 


export const toggleCheck = itemNumber => {
    return { 
        type: constants.TOGGLE_CHECK, 
        itemNumber
    }
};

export const removeChecked = () => {
    return {
        type: constants.REMOVE_CHECKED, 
    }
};

export const deleteShopFromList = shop => {
    return {
        type: constants.DELETE_LIST, 
        shop
    }
};

