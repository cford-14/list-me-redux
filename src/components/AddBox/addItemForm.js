import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import { addItem } from '../../REDUX/List/listActionCreators';
import { changeAddSubmitStatus } from '../../REDUX/submitStatus/submitActionCreator'

/*export function AddItem() {
    let _itemName, _quantity, _units, _notes;
    return (
        <div className="form">
            <form className="addItem">
                <input ref={input => _itemName = input} type="text" placeholder="item name" />
                <input ref={input=> _quantity = input} type="number" placeholder="#" />
                <input ref={input=> _units = input} type="text" placeholder="units" />
                <textarea ref={input=> _notes = input} placeholder="notes"></textarea>
                <select name="lists" size="3" multiple>
                    <option value="userlist1">User List 1</option>
                    <option value="userlist2">User List 2</option>
                    <option value="userlist3">User List 3</option>
            </select>
            <div className="submitDiv">
                <button class="submit" type="submit" onclick="">submit</button>
            </div>
        </div>
    )
};*/


class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state = {
            item: '',
            quantity: null,
            units: '',
            notes: '',
            stores: []
        }
    }
    handleChange(e){
        const value = e.target.value;
        const name = e.target.name;
        let storesList = this.state.stores
        this.setState({
                [name]: name === "stores" ? this.state.stores.concat(value) : value
            })
    }
    
    render() {
        let shops = this.props.shopsList.filter(shop => shop !== "Master");
            return (
                <div className="form">
                    <form>
                        <input id="item" 
                            type="text" 
                            name="item" 
                            placeholder="item name" 
                            value={this.state.input} 
                            onChange={e=>this.handleChange(e)}/>
                        <input id="quantity" 
                            type="number" 
                            name="quantity" 
                            placeholder="#" 
                            value={this.state.input} 
                            onChange={e=>this.handleChange(e)}/>
                        <input id="units" 
                            type="text" 
                            name="units" 
                            placeholder="units" 
                            value={this.state.input} 
                            onChange={e=>this.handleChange(e)}/>
                    </form>
                    <textarea 
                        name="notes" 
                        placeholder="notes"
                        value={this.state.input} 
                        onChange={e=>this.handleChange(e)}>
                    </textarea>
                    <select name="stores" 
                        size="3" 
                        multiple 
                        onChange={e=>this.handleChange(e)}>
                        {shops.map(shop =>
                            <option value={shop} >{shop}</option>
                        )}
                    </select>
                </div>
            )
        }
}
    


const mapStatetoProps = (state) => {
    console.log(state);
    return{
        masterList: state.masterList,
        submitStatus: state.submitStatus.addSubmitStatus,
        shopsList: state.shopsList.shopsList
    }
}
const mapDispatchToProps = dispatch => {
    return{
        addItem: (itemName, quantity, units, notes, stores) => dispatch(addItem(itemName, quantity, units, notes, stores)),
        changeAddSubmitStatus: (addSubmitStatus) => dispatch(changeAddSubmitStatus(addSubmitStatus))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(AddItem)


/*
when state.submitStatus changes:
    dispatch addItem(this.state.item, this.state.quantity, this.state.units, this.state.notes, this.state.stores)
    this.setState({
        item: '',
        quantity: null,
        units: '',
        notes: '',
        stores: []
    })
    dispatch addSubmitToFalse(false)
*/