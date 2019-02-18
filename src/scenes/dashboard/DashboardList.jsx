import React, { Component } from 'react';
import NullLenghtDashboard from './NullLenghtDashboard';
import { Dashboard } from './Dashboard';
import randomInteger from '../../config/helper';
import VisibleSidebar from './sidebar/SidebarContainer';

class DashboardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMy: 'myList',
            selectedShared: null,
        };
    }

    componentWillMount = () => this.props.actions.fetchDashboard({
        selectedMy: this.state.selectedMy,
        selectedShared: this.state.selectedShared,
    });

    // componentDidUpdate= () =>  this.props.actions.fetchDashboard( this.state.selected );

    render() {
        return (
            [
                <div id="searchAndWatch">
                    <div
                        className="searchTask"
                        id="searchTask"
                        style={{
                            marginTop: '30px',
                            padding: '3px',
                        }}
                    >
                        <input
                            type="text"
                            className="searchList"
                            placeholder="Search dashboard"
                            onChange={e => this.props.actions.searchList(e.target.value)}
                        />
                        <div
                            className="btnSearch fa fa-search fa-2x"
                            style={{
                                backgroundColor: 'inherit',
                                color: 'lightgrey',
                                width: 'auto',
                                paddingRight: '5px',
                            }}
                        />
                    </div>
                    <div id="watchedDashb">
                        <div id="radio">
                            <label htmlFor="contactChoice1">
                                <input
                                    type="checkbox"
                                    name="show"
                                    id="myList"
                                    value="myList"
                                    checked={this.state.selectedMy === 'myList'}
                                    onChange={e => (
                                        this.setState({ selectedMy: e.target.value })
                                    )}
                                />Show my dashboard
                            </label>
                            <label htmlFor="contactChoice2">
                                <input
                                    type="checkbox"
                                    name="show"
                                    value="sharedList"
                                    id="sharedList"
                                    checked={this.state.selectedShared === 'sharedList'}
                                    onChange={e => (
                                        this.setState({ selectedShared: e.target.value })
                                    )}
                                />Show shared dashboard
                            </label>
                        </div>

                    </div>
                </div>,
                <div id="content">
                    <main style={{ alignContent: 'start' }}>
                        {
                            this.props.toDoBoard.length === 0
                                ? <NullLenghtDashboard />
                                : this.props.toDoBoard.map(i => (
                                    <Dashboard
                                        userOwnerId={i.userOwnerId}
                                        idList={i.id}
                                        key={i.id}
                                        title={i.todoListName}
                                        tasks={i.tasks}
                                        randomInteger={randomInteger}
                                        toDoBoard={this.props.toDoBoard}
                                        actions={this.props.actions}
                                    />
                                ))
                        }
                    </main>
                    <VisibleSidebar />
                </div>,
            ]
        );
    }
}

export default DashboardList;
