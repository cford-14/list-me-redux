import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import { toggleCheck } from '../../REDUX/List/listActionCreators';
import { removeChecked } from '../../REDUX/List/listActionCreators';


class View extends React.Component {
    constructor(props){
        super(props);
        this.toggleCheck=this.toggleCheck.bind(this);
        this.removeChecked=this.removeChecked.bind(this)
    }

    toggleCheck(e) {
        const itemNumber = Number(e.target.name);
        console.log(itemNumber);
        this.props.toggleCheck(itemNumber)

    }

    removeChecked(e) {
        this.props.removeChecked()
    }
    
    render() {
        console.log(this.props.masterList.map(line => line));
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
                        if (line.stores.length > 0){
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
                    })}
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
                            if (line.stores.indexOf(this.props.shopToView) !== -1) {
                                return(
                                    <tr>
                                        <td><input type="checkbox" name={line.itemNumber} value={line.checked} onChange={e=>this.toggleCheck(e)}/></td>
                                        <td>{line.item}</td>
                                        <td style={{textAlign: "center"}}>{line.quantity}</td>
                                        <td>{line.units}</td>
                                        <td>{line.notes}</td>
                                    </tr>
                                )}
                            })
                        } 
                    </table>
                    <div>
                        <button class="removeChecked" type="button" onClick={(e) => this.removeChecked(e)}>remove checked</button>
                    </div>
                </div>
            )
        }
    }
};

const mapStateToProps = (state) => {
   return { 
        masterList: state.masterList.masterList, 
        shopToView: state.shopToView.shop
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCheck: (itemNumber) => dispatch(toggleCheck(itemNumber)),
        removeChecked: () => dispatch(removeChecked())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(View);


