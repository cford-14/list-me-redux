import React from 'react';
import '../../App.css';
import { Invite, Contact, SelectSingleList } from './fields';
import { connect } from 'react-redux';
import { addShareData } from '../../REDUX/contact/contactActionCreators';

class Share extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            fieldCount: 1,
            selectList: 'null',
            shareName: '',
            shareEmail: '',
            shareMobile: '',
            shareStatus: 'view'

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
        const name = e.target.name;
        this.setState({
                [name]: value
        });
        console.log(this.state)
        
    }
    handleSubmit() {
        if (this.state.selectList !== "null" && (this.state.shareEmail.length > 0 || this.state.shareMobile.length > 0)) {
            this.props.addShareData(
                this.state.selectList, 
                this.state.shareName, 
                this.state.shareEmail, 
                this.state.shareMobile, 
                this.state.shareStatus
            );
            this.setState({
                selectList: 'null',
                shareName: '',
                shareEmail: '',
                shareMobile: '',
                shareStatus: 'view'
            })

        } else {
            if (this.state.selectedShop === "null") {
                alert("Please select a list to share.")
            } if (this.state.shareEmail.length === 0 || this.state.shareMobile.length === 0) {
                alert("Please enter an email address or phone number.")
            }
        }
    }
    render() {
        /*const form=[];
        for (let i=0; i < this.state.fieldCount; i++) {
            form.push(<Invite />)
        }*/
        let shops = this.props.shopsList.filter(shop => shop !== "Master");
        
        return(
            <div className="Box">
                <div className="boxTitle">
                    <h3>Share List</h3>
                </div>
                {/*<SelectSingleList />*/}
                <div>
                    <p className="subtitle">select list</p>
                    <form>
                        <select id="selectList" 
                                name='selectList' 
                                className='selectBox'
                                onChange={e=>this.handleChange(e)}>
                            <option value='null'>select list</option>
                            {shops.map(shop => 
                                <option value={shop}>{shop}</option>
                            )}
                        </select>
                    </form>
                </div>
                <div /*style={this.state.style1}*/ className='formFields'>
                    {/*{form}
                    <button className="addField" type="button" onClick={(e) => this.handleClick()}>add fields</button>*/}
                    <div className="form">
                        <form>
                            <input id="inviteName" 
                                    type="text" 
                                    name="shareName" 
                                    placeholder="friend's name" 
                                    onChange={e=>this.handleChange(e)}/>
                        </form>
                        <form>
                            <input id="inviteEmail" 
                                    type="text" 
                                    name="shareEmail" 
                                    placeholder="email address" 
                                    onChange={e=>this.handleChange(e)}/>
                        </form>
                        <p className="or">OR</p>
                        <form>
                            <input id="shareMobile" 
                                    type="text" 
                                    name="shareMobile" 
                                    placeholder="mobile number" 
                                    onChange={e=>this.handleChange(e)}/>
                        </form>
                        <form>
                            <div className='stackedRadio'>
                                <div className='radioOption'>
                                    <input id="contribute" 
                                            type="radio" 
                                            name="shareStatus" 
                                            value="contribute" 
                                            checked={this.state.shareStatus === "contribute"}
                                            onChange={e=>this.handleChange(e)}/><p className='radioLabel'>view and edit</p>
                                </div>
                                <div className='radioOption'>
                                    <input id="viewOnly" 
                                            type="radio" 
                                            name="shareStatus" 
                                            value="view" 
                                            checked={this.state.shareStatus === "view"}
                                            onChange={e=>this.handleChange(e)}/><p className='radioLabel'>view only</p>
                                </div>
                            </div>
                        </form>
                    </div>
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
        //contributors: state.contributors.contributors
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addShareData: (selectList, shareName, shareEmail, shareMobile, shareStatus) => dispatch(addShareData(selectList, shareName, shareEmail, shareMobile, shareStatus))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Share)