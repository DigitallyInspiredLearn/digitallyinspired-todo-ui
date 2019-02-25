import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Popup.css';


export class Popup extends Component {
    render() {
        const {statePopup, closePopup, actions, actionsBoard, users, search, idList} = this.props;
        console.log(users);
        return (
            <div>
                <div className={statePopup ? 'popupActive' : 'popup'}>
                    <div
                        className='popup_content'
                        id={idList}
                    >
                        <span
                            className="window-close"
                            onClick={() => {
                                closePopup();
                                actions.searchUser('');
                            }}
                        >&times;
                        </span>
                        <div style={{alignSelf: 'center', marginTop: '20px'}}>
                            <h1>Share list with</h1>
                        </div>
                        <div className="searchTask">
                            <input className='searchUser'
                                   type="text"
                                   placeholder="Enter username"
                                   value={search}
                                   onChange={e => {
                                       actions.searchUser(e.target.value);
                                   }}
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
                        <div className='buttonBlock'>
                            <button
                                className='butClose'
                                onClick={() => {
                                    closePopup();
                                    actions.searchUser('');
                                }}
                            >Cansel
                            </button>
                            <button
                                className='butOk'
                                onClick={() => {
                                    actionsBoard.shareList({idList: idList, userName: search});
                                    closePopup();
                                    actions.searchUser('');
                                }}
                            >OK</button>
                        </div>
                        <div className='users'>
                            {
                                search === '' ? null :
                                users.map(i => (
                                    search === i ? null :
                                        <div  onClick={() => actions.searchUser(i)}>
                                            <input
                                                value={i}
                                            />
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Popup.propTypes = {
    users: PropTypes.array,
    idList: PropTypes.number,
    search: PropTypes.string,
};

Popup.defaultProps = {
    users: [],
};
