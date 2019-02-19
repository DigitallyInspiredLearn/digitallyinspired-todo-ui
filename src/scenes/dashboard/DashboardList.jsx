import React, { Component } from 'react';
import NullLenghtDashboard from './NullLenghtDashboard';
import { Dashboard } from './Dashboard';
import randomInteger from '../../config/helper';
import VisibleSidebar from './sidebar/SidebarContainer';

class DashboardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'myList',
        };
    }

    componentWillMount = () => this.props.actions.fetchDashboard(this.state.selected);

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
                                    checked={this.state.selected === 'myList'}
                                    onChange={e => (
                                        this.setState({ selected: e.target.value }),
                                        this.props.actions.fetchDashboard(this.state.selected)
                                    )}
                                />Show my dashboard
                            </label>
                            <label htmlFor="contactChoice2">
                                <input
                                    type="checkbox"
                                    name="show"
                                    value="sharedList"
                                    id="sharedList"
                                    checked={this.state.selected === 'sharedList'}
                                    onChange={e => (
                                        this.setState({ selected: e.target.value }),
                                            this.props.actions.fetchDashboard(this.state.selected)
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
