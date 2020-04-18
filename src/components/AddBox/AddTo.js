import React from 'react';
import '../../App.css';
//import AddItem from './addItemForm';
import { connect } from 'react-redux';
//import { changeAddSubmitStatus } from '../../REDUX/submitStatus/submitActionCreator';
import { addItem } from '../../REDUX/List/listActionCreators';


class AddTo extends React.Component  {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
            //fieldCount: 1,
            item: '',
            quantity: null,
            units: '',
            notes: '',
            stores: []
        }
    }

    handleClick() {
        let clickCount = this.state.fieldCount;
        if (clickCount <= 5) {
            this.setState({fieldCount: clickCount+1})
        }           
    }
    handleChange(e){
        const value = e.target.value;
        const name = e.target.name;
        const selectedOption = e.target.selectedOption;
        let newStoreValue = this.state.stores.indexOf(value) === -1 ? this.state.stores.concat(value) : this.state.stores
        this.setState({
                [name]: name === "stores" ? newStoreValue : value
            })
        
        console.log(this.state.item)
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.item.length > 0 && this.state.stores.length > 0) {
            this.props.addItem(
                this.state.item, 
                this.state.quantity, 
                this.state.units, 
                this.state.notes, 
                this.state.stores
            );
        } else {
            if (this.state.item.length === 0) {
                alert("Please enter an item name.")
            } if (this.state.stores.length === 0) {
                alert("Please select a list for your item.")
            }
        }
        this.setState({
            item: '',
            quantity: null,
            units: '',
            notes: '',
            stores: []
        })
        
        /*this.setState({
            item: '',
            quantity: null,
            units: '',
            notes: '',
            stores: [],
            input: ''
        })*/
        //this.setState({fieldCount: 1});

        //call dispatch on each add item
        //change local state
        //pass local state to AddItem
        //in AddItem, event listener for state change? 
        //pass 
    }
    render() {
        
        console.log(this.state)
        const form=[];
        /*for (let i=0; i< this.state.fieldCount; i++) {
            form.push( <AddItem submitClicked={this.state.submitClicked}/>)
        };*/
        let shops = this.props.shopsList.filter(shop => shop !== "Master");
    return(
        <div className="addBox">
            <div className="boxTitle">
                <h3>Add to Lists</h3>
            </div>
            {/*{form}*/}
                <div className="form">
                    <form>
                        <input id="item" 
                            type="text" 
                            name="item" 
                            placeholder="item name" 
                            value={this.state.item} 
                            onChange={e=>this.handleChange(e)}/>
                        {/*<input id="item" 
                            type="text" 
                            name="item" 
                            placeholder="item name" 
                            value={this.state.input} 
    onChange={e=>this.handleChange(e)}/>*/}
                        <input id="quantity" 
                            type="number" 
                            name="quantity" 
                            placeholder="#" 
                            value={this.state.quantity} 
                            onChange={e=>this.handleChange(e)}/>
                        <input id="units" 
                            type="text" 
                            name="units" 
                            placeholder="units" 
                            value={this.state.units} 
                            onChange={e=>this.handleChange(e)}/>
                    </form>
                    <textarea 
                        name="notes" 
                        placeholder="notes"
                        value={this.state.notes} 
                        onChange={e=>this.handleChange(e)}>
                    </textarea>
                    <select name="stores" 
                        multiple 
                        onChange={e=>this.handleChange(e)}>
                        {shops.map(shop =>
                            <option value={shop} >{shop}</option>
                        )}
                    </select>
                </div>
            {/*<div>
                <button class="addField" type="button" onClick={(e) => this.handleClick()}>add fields</button>
            </div>*/}
            <div>
                <button className="submit" type="submit" onClick={e=>this.handleSubmit(e)}>submit</button>
            </div>
            
        </div>
    )
    }
};

const mapStateToProps = (state) => {
    return{
        masterList: state.masterList.masterList,
        //submitStatus: state.submitStatus.addSubmitStatus,
        shopsList: state.shopsList.shopsList
    }
};

const mapDispatchToProps = dispatch => {
    return{
        addItem: (itemName, quantity, units, notes, stores) => dispatch(addItem(itemName, quantity, units, notes, stores)),
        //changeAddSubmitStatus: (addSubmitStatus) => dispatch(changeAddSubmitStatus(addSubmitStatus))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTo);