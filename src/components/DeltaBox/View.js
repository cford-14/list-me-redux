import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';


class View extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        if (this.props.shopToView === "Master") {
            return(
                <div className="Box">
                <div className="boxTitle">
                    <h3>{this.props.shopToView}</h3>
                </div>
                <table style={{margin: "5%"}}>
                    <tr>
                        <th>item</th>
                        <th>quantity</th>
                        <th>units</th>
                        <th>notes</th>
                        <th>stores</th>
                    </tr>
                    {this.props.masterList.map(line => {
                            return (
                                <tr>
                                    <td>{line.item}</td>
                                    <td style={{textAlign: "center"}}>{line.quantity}</td>
                                    <td>{line.units}</td>
                                    <td>{line.notes}</td>
                                    <td>{line.stores.map(store => {
                                            return store + '  '
                                        }
                                    )}</td>
                            </tr>
                            )
                        }
                    )}
                </table>
            </div>
            )
        } else {
            return(
                <div className="Box">
                    <div className="boxTitle">
                        <h3>{this.props.shopToView}</h3>
                    </div>
                    <table style={{margin: "5%"}}>
                        <tr>
                            <th>  </th>
                            <th>item</th>
                            <th>quantity</th>
                            <th>units</th>
                            <th>notes</th>
                        </tr>
                        {this.props.masterList.map(line => {
                            if (line.stores.indexOf(this.props.shopToView)>=0) {
                                return(
                                    <tr>
                                        <td><input type="checkbox" /*onChange={} defaultChecked={}*/></input></td>
                                        <td>{line.item}</td>
                                        <td style={{textAlign: "center"}}>{line.quantity}</td>
                                        <td>{line.units}</td>
                                        <td>{line.notes}</td>
                                    </tr>
                                )}
                            })
                        } 
                    </table>
                </div>
            )
        }
    }
};

const mapStateToProps = (state) => {
    return { 
        masterList: state.masterList, 
        shopToView: state.shopToView.shop
    }
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        changeShopToView: () => dispatch( {type: vc.CHANGE_SHOP_TO_VIEW})
    }
};*/

export default connect(mapStateToProps)(View);


