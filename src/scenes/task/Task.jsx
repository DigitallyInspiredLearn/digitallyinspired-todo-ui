/* eslint-disable react/prop-types,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import trash from '../../image/trash.svg';
import * as styled from './Task.styled';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
        };
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

    render() {
        const { display } = this.state;
        const displayStyle = { display };
        const {
            idTask, selected, actions, idList, nameTask,
        } = this.props;

        return (
            <styled.Task
                id={idTask}
                onMouseOver={this.updateDisplayFlex}
                onMouseOut={this.updateDisplayNone}
            >
                <styled.NameAdnCheckedTask>
                    <styled.CheckboxTask
                        selected={selected}
                        onClick={() => {
                            actions.updateCheckbox({
                                idDashboard: idList, idTask, selected, body: nameTask,
                            });
                        }}
                    />
                    <styled.TaskName
                        type="text"
                        value={nameTask}
                        selected={selected}
                        onChange={(e) => {
                            actions.updateTaskName({
                                idDashboard: idList, idTask, newTaskName: e.target.value,
                            });
                        }}
                        onKeyDown={e => e.key === 'Enter' && e.target.blur()}
                        onBlur={(e) => {
                            e.target.value = e.target.value ? 'New task' : e.target.value;
                            actions.updateTitleSuccess({ id: idList });
                        }}
                    />
                </styled.NameAdnCheckedTask>
                <styled.DeleteTask
                    src={trash}
                    alt="Delete this task"
                    style={displayStyle}
                    onClick={() => actions.deleteTask({ idTask })}
                />

            </styled.Task>
        );
    }
}

Task.propTypes = {
    idTask: PropTypes.number,
    selected: PropTypes.bool,
    nameTask: PropTypes.string,
};

export default Task;
