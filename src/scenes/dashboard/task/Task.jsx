/* eslint-disable react/prop-types,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import trash from '../../../image/trash.svg';
import * as styled from './Task.styled';
import Checkbox from '../../../components/checkbox/Checkbox';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
        };
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

    handleSelectTask = (newValue) => {
        console.log(newValue);
        const {
            idTask, selected, actions, nameTask,
        } = this.props;
        actions.updateCheckbox({
            nameTask, idTask, selected, body: nameTask,
        });
    };

    render() {
        const { display } = this.state;
        const displayStyle = { display };
        const {
            idTask, selected, actions, nameTask, idList,
        } = this.props;

        return (
            <styled.Task
                id={idTask}
                onMouseOver={this.updateDisplayFlex}
                onMouseOut={this.updateDisplayNone}
            >
                <styled.NameAdnCheckedTask>
                    <Checkbox
                        checked={selected}
                        onChange={this.handleSelectTask}
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
                            actions.updateTaskNameSuccess({
                                newTaskName: !e.target.value ? 'New task' : e.target.value,
                                selected,
                                idTask,
                            });
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
