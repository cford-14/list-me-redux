import React from 'react';
import '../../App.css';

export function Contact() {
    return (
        <div className="form">
            <form>
                <input id="shareName" type="text" name="shareName" placeholder="friend's name" />
            </form>
            <form>
                <input id="shareEmail" type="text" name="shareEmail" placeholder="email address" />
            </form>
            <p className="or">OR</p>
            <form>
                <input id="shareobile" type="text" name="shareMobile" placeholder="mobile number" />
            </form>
        </div>
    )
}

export function Invite() {
    return (
        <div className="form">
            <form>
                <input id="inviteName" type="text" name="inviteName" placeholder="friend's name" />
            </form>
            <form>
                <input id="inviteEmail" type="text" name="inviteEmail" placeholder="email address" />
            </form>
            <p className="or">OR</p>
            <form>
                <input id="shareobile" type="text" name="shareMobile" placeholder="mobile number" />
            </form>
            <form>
                <div className='stackedRadio'>
                    <div className='radioOption'>
                        <input id="contribute" type="radio" name="inviteStatus" value="contribute" /><p className='radioLabel'>view and edit</p>
                    </div>
                    <div className='radioOption'>
                        <input id="viewOnly" type="radio" name="inviteStatus" value="view" /><p className='radioLabel'>view only</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export function SelectSingleList() {
    return (
        <div>
            <p className="subtitle">select list</p>
            <form>
                <select id="selectList" name='selectList' className='selectBox'>
                    <option value='null'>select list</option>
                    <option value='store1'>Store 1</option>
                    <option value='store2'>Store 2</option>
                    <option value='store3'>Store 3</option>
                    {/*{this.props.storesArray().map(store => {
                        return (
                            <option value={store}>{store}</option>
                        )})} */}
                </select>
            </form>
        </div>
    )
}