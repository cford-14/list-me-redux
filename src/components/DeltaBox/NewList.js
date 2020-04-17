import React from 'react';
import '../../App.css';
import { Invite } from './fields';
import { connect } from 'react-redux';
import { addShop } from '../../REDUX/shops/shopsActionCreators';

class NewList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            fieldCount: 1,
            newShop: ''
        }
    }
    handleClick() {
        let clickCount = this.state.fieldCount;
        if (clickCount < 3) {
            this.setState({fieldCount: clickCount+1})
        }           
    }
    handleChange(e){
        const value = e.target.value;
        this.setState({
                newShop: value
            })
        
        console.log(this.state.newShop)
    }
    handleSubmit() {
        if (this.state.newShop.length > 0) {
            this.props.addShop(this.state.newShop);
            this.setState({
                newShop: ''
            })
        } else {
            alert("Please enter a name for your new list.")
        }
    }

    render(){
        let form=[];
        for (let i=0; i< this.state.fieldCount; i++) {
            form.push( <Invite />)
        }
        return(
            <div className="Box">
                <div className="boxTitle">
                    <h3>Create New List</h3>
                </div>
                <div className="form">
                    <form>
                        <input id="listName" 
                        type="text" 
                        name="newShop" 
                        placeholder="list name" 
                        value={this.state.newShop}
                        onChange={e=>this.handleChange(e)}/>
                    </form>
                </div>
                <div >
                    <p className="subtitle">invite contributors</p>
                </div>
                <div /*style={this.state.style1}*/ className='formFields'>
                    {form}
                    <button className="addField" type="button" onClick={(e) => this.handleClick('one')}>Add Fields</button>
                </div>
                <div>
                    <button className="submit" type="submit" onClick={e=>this.handleSubmit()}>submit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        shopsList: state.shopsList.shopsList
    }
}
const mapDispatchToProps = dispatch => {
    return{
        addShop: (shop) => dispatch(addShop(shop))
    }
}

export default connect(null, mapDispatchToProps)(NewList)