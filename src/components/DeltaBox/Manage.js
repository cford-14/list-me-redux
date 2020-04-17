import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import { removeShop } from '../../REDUX/shops/shopsActionCreators';

class Manage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(    
            <div className="Box" >
                <div className="boxTitle">
                    <h3>Manage Lists</h3>
                </div>
                <div id="deleteList">                            
                    <p className="subtitle">delete list</p>
                    <form>
                        <label for="deleteList">select list to delete:<br/></label>
                        
                        <select id="deleteList" name='deleteList' className='selectBox'>
                            <option value='null'>select list</option>
                            {this.props.shopsList.map(shop => {
                                if (shop !== "Master")
                                return(
                                    <option value={shop}>{shop}</option>    
                                )
                            })}
                        </select>
                        <button className="submit" type="submit">submit</button>
                    </form>
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
        removeShop: (oldShop) => dispatch(removeShop(oldShop))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Manage);
