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
            newTaskName: props.nameTask,
        };
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

    handleSelectTask = () => {
        const {
            idTask, selected, actions, nameTask,
        } = this.props;
        actions.updateCheckbox({
            nameTask, idTask, selected, body: nameTask,
        });
    };

    handleUpdateTask = (newValue) => {
        const {
            idTask, actions, idList,
        } = this.props;
        const { newTaskName } = this.state;
        this.setState({
            newTaskName: newValue,
        });
        actions.updateTaskName({
            idDashboard: idList, idTask, newTaskName,
        });
    };

    handleUpdateTaskSuccess = () => {
        const {
            idTask, selected, actions,
        } = this.props;
        const { newTaskName } = this.state;
        actions.updateTaskNameSuccess({
            newTaskName,
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
                key={idTask}
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
                        border={false}
                        style={{ textDecoration: selected ? 'line-through' : 'none', width: '100%' }}
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
