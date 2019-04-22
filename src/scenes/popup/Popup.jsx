import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styled from './Popup.styles';
import Search from '../../components/search/Search';

export class Popup extends Component {
    handleChange = (newValue) => {
        const { actions } = this.props;
        actions.searchUser(newValue);
    };

    render() {
        const {
            statePopup, closePopup, actions, actionsBoard, users, search, idList,
        } = this.props;
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
                        <Search
                            placeholder="Enter username"
                            value={search}
                            onChange={this.handleChange}
                            style={{ width: '93%', height: '50px' }}
                            key="searchPop"
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
                                const conformity = users.map(i => search !== i);
                                if (users[0] === 'User is not found!' || search === '' || conformity[0] === true) {
                                    alert('Data is not correct!');
                                } else {
                                    actionsBoard.shareList({ idList, userName: search });
                                    closePopup();
                                    actions.searchUser('');
                                }
                            }}
                        >Ok
                        </styled.buttonCloSeOk>
                    </styled.buttonBlock>
                    <styled.users search={search}>
                        {
                            users.map(i => (
                                search === i ? null : i === 'User is not found!'
                                    ? (
                                        <div key={i}> { i } </div>
                                    )
                                    : (
                                        <div key={i} onClick={() => actions.searchUser(i)}>
                                            <div key={i}> { i } </div>
                                        </div>
                                    )))
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
