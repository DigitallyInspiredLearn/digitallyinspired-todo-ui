import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as styled from './Popup.styles';


export class Popup extends Component {
    render() {
        const {statePopup, closePopup, actions, actionsBoard, users, search, idList} = this.props;
        return (
                <styled.showPopup show={statePopup}>
                    <styled.popupContent>
                        <styled.closeWindow
                            onClick={() => {
                                closePopup();
                                actions.searchUser('');
                            }}
                        >&times;
                        </styled.closeWindow>
                        <styled.title>Share list with</styled.title>
                        <styled.searchTask>
                            <styled.searchUser
                                   type="text"
                                   placeholder="Enter username"
                                   value={search}
                                   onChange={e => {
                                       actions.searchUser(e.target.value);
                                   }}
                            />
                            <styled.btnSearch className="fa fa-search fa-2x" />
                        </styled.searchTask>
                        <styled.buttonBlock>
                            <styled.buttonCloSeOk
                                    onClick={() => {
                                    closePopup();
                                    actions.searchUser('');
                                }}
                            >Cancel
                            </styled.buttonCloSeOk>
                            <styled.buttonCloSeOk
                                onClick={() => {
                                    actionsBoard.shareList({idList: idList, userName: search});
                                    closePopup();
                                    actions.searchUser('');
                                }}
                            >Ok
                            </styled.buttonCloSeOk>
                        </styled.buttonBlock>
                        <styled.users search={search}>
                            {
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
                        </styled.users>
                    </styled.popupContent>
                </styled.showPopup>

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
