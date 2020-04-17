import { connect } from 'react-redux';
import { addItem, toggleCheck, deleteChecked, deleteList } from './listActionCreators';
import { View } from '../../components/Delta/View';
import { AddTo } from '../../components/AddTo';
import { Manage } from '../../components/Delta/Manage';
import { MapToViewItems } from '../../components/Delta/mapToView';
//import { ListList } from '../components/ListList';

export const AddToList = connect(
    null, 
    dispatch =>
        ({
            onAddItem(itemName, quantity, units, notes, stores) {
                dispatch(addItem(itemName, quantity, units, notes, stores))
            }
        })
)(AddTo)

export const ToggleCheckBox = connect(
    state =>
    ({
        masterList: [...state.masterList]
    }),
    dispatch =>
    ({
        onToggleCheck(id) {
            dispatch(toggleCheck(id))
        }
    })
)(MapToViewItems);

export const DeleteCheckedItems = connect(
    state =>
    ({
        masterList: [...state.masterList]
    }),
    dispatch =>
    ({
        onDeleteChecked(id) {
            dispatch(deleteChecked(id))
        }
    })
)(View);

export const DeleteStoreList = connect(
    state =>
    ({
        masterList: [...state.masterList]
    }),
    dispatch =>
    ({
        onDeleteList(store) {
            dispatch(deleteList(store))
        }
    })
)(Manage);

