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
    }

    handleSubmit() {
        if (this.state.newShop.length > 0 && this.props.shopsList.length <= 10) {
            this.props.addShop(this.state.newShop);
            this.setState({
                newShop: ''
            })
        } else if(this.state.newShop.length <= 0) {
            alert("Please enter a name for your new list.")
        } else {
            alert("There is a limit of 10 lists per user.")
        }
    }

    render(){
        /*let form=[];
        for (let i=0; i< this.state.fieldCount; i++) {
            form.push( <Invite />)
        }*/
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

export default connect(mapStateToProps, mapDispatchToProps)(NewList)