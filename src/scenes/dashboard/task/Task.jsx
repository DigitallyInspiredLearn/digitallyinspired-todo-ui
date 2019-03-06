/* eslint-disable react/prop-types,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import trash from '../../../image/trash.svg';
import * as styled from './Task.styled';
import Checkbox from '../../../components/checkbox/Checkbox';
import Input from '../../../components/input/Input';

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

    handleUpdateTask = (newValue) => {
        console.log(newValue);
        const {
            idTask, actions, idList,
        } = this.props;
        actions.updateTaskName({
            idDashboard: idList, idTask, newTaskName: newValue,
        });

    };

    handleUpdateTaskSuccess = () => {
        const {
            idTask, selected, actions, nameTask,
        } = this.props;
        actions.updateTaskNameSuccess({
            newTaskName: !nameTask ? 'New task' : nameTask,
            selected,
            idTask,
        });
    };

    render() {
        const { display } = this.state;
        const displayStyle = { display };
        const {
            idTask, selected, actions, nameTask,
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
                    <Input
                        onChange={this.handleUpdateTask}
                        value={nameTask}
                        onBlur={this.handleUpdateTaskSuccess}
                        width="100%"
                        border={false}
                        style={{textDecoration: selected ? 'line-through': 'none'}}
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
