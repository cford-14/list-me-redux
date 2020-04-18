import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import { deleteShopFromList } from '../../REDUX/List/listActionCreators';
import { deleteShopFromShops } from '../../REDUX/shops/shopsActionCreators';

class Manage extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state = {
            shopToDelete: ''
        }
    }
    handleChange(e){
        const value = e.target.value;
        this.setState({
                shopToDelete: value
            })
    }
    handleDelete() {
        console.log("sefhslflsf");
        this.props.deleteShopFromList(this.state.shopToDelete);
        this.props.deleteShopFromShops(this.state.shopToDelete);
        this.setState({shopToDelete: 'deleted'})
        
    }
    
    render(){
        console.log(this.state.shopToDelete);
        return(    
            <div className="Box" >
                <div className="boxTitle">
                    <h3>Manage Lists</h3>
                </div>
                <div id="deleteList">                            
                    <p className="subtitle">delete list</p>
                    <form>
                        <label for="deleteList">select list to delete:<br/></label>
                        
                        <select id="deleteList" name='deleteList' className='selectBox' onChange={e=> this.handleChange(e)}>
                            <option value='null'>select list</option>
                            {this.props.shopsList.map(shop => {
                                if (shop !== "Master")
                                return(
                                    <option value={shop}>{shop}</option>    
                                )
                            })}
                        </select>
                    </form>
                    <button className="submit" type="submit" onClick={e=>this.handleDelete()}>delete</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { 
        shopsList: state.shopsList.shopsList
    }
};

const mapDispatchToProps = dispatch => {
    return{
        deleteShopFromList: (shop) => dispatch(deleteShopFromList(shop)),
        deleteShopFromShops: (shop) => dispatch(deleteShopFromShops(shop))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Manage);
