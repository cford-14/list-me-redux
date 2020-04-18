import { combineReducers } from 'redux';
import MasterList from './List/listReducer';
import ViewReducer from './View/viewReducer';
import SubmitStatusReducer from './submitStatus/submitReducer';
import shopsReducer from './shops/shopsReducer';
import shareData from './contact/contactReducer';

const rootReducer = combineReducers({
    masterList: MasterList, 
    shopToView: ViewReducer,
    submitStatus: SubmitStatusReducer, 
    shopsList: shopsReducer,
    shareData: shareData
});
export default rootReducer;