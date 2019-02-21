import React, {Component} from 'react';
import './Popup.css';


export class Popup extends Component {
    render() {
        const {statePopup, closePopup, actions, users} = this.props;
        console.log(users);
        return (
            <div>
                <div className={statePopup ? 'popupActive' : 'popup'}>
                    <div className='popup_content'>
                        <span
                            className="window-close"
                            onClick={closePopup}
                        >&times;
                        </span>
                        <div style={{alignSelf: 'center', marginTop: '20px'}}>
                            <h1>Share list with</h1>
                        </div>
                        <div className="searchTask">
                            <input className='searchUser'
                                   type="text"
                                   placeholder="Enter username"
                                   onChange={e => actions.searchUser(e.target.value)}
                            />
                            <div
                                className="btnSearch fa fa-search fa-2x"
                                style={{
                                    backgroundColor: 'inherit',
                                    color: 'lightgrey',
                                    width: 'auto',
                                    paddingRight: '15px',
                                    paddingTop: '10px',
                                }}
                            />
                        </div>
                        <div className='users'>
                            {
                                users.map(i => (
                                    <div>
                                        <input value={i}/>
                                    </div>
                                    )
                                )
                            }
                        </div>
                        <div className='buttonBlock'>
                            <button
                                className='butClose'
                                onClick={closePopup}
                            >Cansel
                            </button>
                            <button className='butOk'>OK</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
