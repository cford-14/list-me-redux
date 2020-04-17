import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';
import { changeShopToView } from '../REDUX/View/viewActionCreator';

class ListList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.history.listen(()=> {
        console.log('New URL', this.props.history.location.pathname);
        })
    }
    handleClick(e, value) {
//change view state here
        e.preventDefault();
        this.props.changeShopToView(value)
    }
    
    render() {
        let shops = this.props.shopsList;

        return(
            <div className="listBox">
                <div className="listBoxTitle">
                    <h3>Shopping <br/> Lists</h3>
                </div>
                {shops.map(shop => 
                    <div className="listButton" value={shop} onClick={(e) => this.handleClick(e, shop)}>
                    <Link to="/view" className="listButtonText">
                            <p>{shop}</p>
                    </Link>
                    </div>
                )}
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    console.log(state)
    return { 
        masterList: state.masterList, 
        shopToView: state.shopToView,
        shopsList: state.shopsList.shopsList
    }
};

const mapDispatchToProps = dispatch => {
    return{
        changeShopToView: (newShop) => dispatch(changeShopToView(newShop))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListList));
