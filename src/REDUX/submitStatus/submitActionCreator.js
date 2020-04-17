import { sc } from './submitActionType';

export const changeAddSubmitStatus = (addSubmitStatus) => {
    return {
        type: sc.CHANGE_ADD_SUBMIT_STATUS,
        addSubmitStatus 
    }
}

