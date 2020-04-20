import React from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { addItem } from '../../REDUX/List/listActionCreators';


class AddTo extends React.Component  {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.toggleCheck=this.toggleCheck.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
            //fieldCount: 1,
            item: '',
            quantity: null,
            units: '',
            notes: '',
            stores: [],
            checkedShop: this.props.checkList
        }
    }

    /*handleClick() {
        let clickCount = this.state.fieldCount;
        if (clickCount <= 5) {
            this.setState({fieldCount: clickCount+1})
        }           
    }*/

    handleChange(e){
        const value = e.target.value;
        const name = e.target.name;
        let newStoreValue = this.state.stores.indexOf(value) > 0 ? this.state.stores : this.state.stores.concat(value)
        this.setState({
                [name]: name === "stores" ? newStoreValue : value
            })
    }

    toggleCheck(e) {
        const name=e.target.name;
        let checkedStatusArray = this.state.checkedShop;
        checkedStatusArray[name] = !this.state.checkedShop[name]
        this.setState({ checked: checkedStatusArray})
    }

    handleSubmit(e) {
        e.preventDefault();
        let storesArray = []
        this.props.shopsList.map(shop =>{
            if (this.state.checkedShop[shop] === true){
                storesArray.push(shop)
            }
        });
        if (this.state.item.length > 0 && storesArray.length > 0) {
            this.props.addItem(
                this.state.item, 
                this.state.quantity, 
                this.state.units, 
                this.state.notes, 
                storesArray
            );
        } else {
            if (this.state.item.length === 0) {
                alert("Please enter an item name.")
            } if (storesArray.length === 0) {
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
    }

    render() {
        /*const form=[];
        for (let i=0; i< this.state.fieldCount; i++) {
            form.push( <AddItem submitClicked={this.state.submitClicked}/>)
        };*/
        let shops = this.props.shopsList.filter(shop => shop !== "Master");
        if (this.props.shopsList.length > 1) {
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
                            <form>
                            {shops.map(shop =>
                                <label>
                                    <input type="checkbox" name={shop} checked={this.state.checkedShop[shop]} onChange={e=> this.toggleCheck(e)}/>
                                    {shop}
                                </label>
                                )}
                            </form>
                        </div>
                    {/*<div>
                        <button class="addField" type="button" onClick={(e) => this.handleClick()}>add fields</button>
                    </div>*/}
                    <div>
                        <button className="submit" type="submit" onClick={e=>this.handleSubmit(e)}>submit</button>
                    </div>
                    
                </div>
            )
            } else {
                return(
                    <div className="addBox">
                        <div className="boxTitle">
                            <h3>please create a list</h3>
                        </div>
                    </div>
                )
            }
        }
};

const mapStateToProps = (state) => {
    return{
        masterList: state.masterList.masterList,
        //submitStatus: state.submitStatus.addSubmitStatus,
        shopsList: state.shopsList.shopsList, 
        checkList: state.shopsList.checkList
    }
};

const mapDispatchToProps = dispatch => {
    return{
        addItem: (itemName, quantity, units, notes, stores) => dispatch(addItem(itemName, quantity, units, notes, stores)),
        //changeAddSubmitStatus: (addSubmitStatus) => dispatch(changeAddSubmitStatus(addSubmitStatus))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTo);