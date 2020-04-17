import { sc } from './submitActionType';
import { submitInitialState } from './submitInitialState';

export default (state=submitInitialState, action) => {
    switch (action.type) {
        case sc.CHANGE_ADD_SUBMIT_STATUS:
            return Object.assign({}, state, {
                addSubmitStatus: action.addSubmitStatus
            })
        default:
            return state
    }
}