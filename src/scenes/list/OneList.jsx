/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TaskForList from './tasksForList/TaskForList';
import randomInteger from '../../config/helper';
import NullLenghtTasks from '../task/NullLenghtTasks';

class OneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueNewTask: '',
        };
    }

    changeValueNewTask = e => this.setState({
        valueNewTask: e.target.value,
    });

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTask: e.target.value = '',
        });
    };

    componentWillMount = ({ match, actions } = this.props) => actions.fetchList(match.params.id);

    render() {
        const { valueNewTask } = this.state;
        const {
            match, actions, data, actionsBoard, todo,
        } = this.props;
        return (
            <div id="list">
                <div id="header">
                    <span className="spList">
                        <div className="iconsOneList">
                            <Link to="/lists">
                                <div
                                    className="back fa fa-arrow-left fa-2x"
                                />
                            </Link>
                            <Link to="/lists">
                                <div
                                    className="iconTrash"
                                    id={match.params.id}
                                    onClick={() => actions.deleteList({ idDashboard: match.params.id})}
                                />
                            </Link>
                            <div
                                className="download fa fa-download fa-2x"
                                title="download"
                            />
                        </div>
                    </span>
                    <input
                        type="text"
                        value={data.todoListName}
                        className="titleNameOneList"
                        onChange={e => actions.updateTitleList({ idDashboard: data.id, newTitle: e.target.value })}
                    />
                </div>
                <div className="searchTask">
                    <input
                        type="text"
                        placeholder="Search to-do"
                        onChange={e => actions.changeSearch({
                            idDashboard: match.params.id,
                            search: e.target.value,
                        })}
                    />
                    <div
                        className="btnSearch fa fa-search fa-2x"
                        style={{
                            backgroundColor: 'inherit',
                            color: 'lightgrey',
                            width: 'auto',
                            paddingRight: '15px',
                        }}
                    />
                </div>
                <article className="blockTask">
                    <div>
                        {
                            data.tasks && (data.tasks.length === 0 ? <NullLenghtTasks />
                                : data.tasks.map(i => (
                                    <TaskForList
                                        idTask={i.id}
                                        idList={match.params.id}
                                        key={i.id}
                                        selected={i.isComplete}
                                        nameTask={i.body}
                                        actionsBoard={actionsBoard}
                                        actionsList={actions}
                                    />
                                )))
                        }
                    </div>
                    <input
                        className="addNewTask"
                        placeholder="Add to-do"
                        style={{ outline: 'none', fontSize: '20px', marginLeft: '15px' }}
                        value={valueNewTask}
                        onChange={this.changeValueNewTask}
                        onKeyPress={event => event.key === 'Enter' && (
                            actions.addTaskList({
                                idDashboard: match.params.id,
                                nameTask: valueNewTask,
                                idTask: `${randomInteger(1, 100000, todo)}`,
                            }),
                            this.setState({ valueNewTask: '' })
                        )}
                    />
                </article>
            </div>
        );
    }
}

OneList.propTypes = {
    data: PropTypes.object,
    id: PropTypes.number,
    todoListName: PropTypes.string,
    tasks: PropTypes.array,
};

OneList.defaultProps = {
    data: {},
};

export default OneList;
