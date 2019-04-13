/* eslint-disable react/prop-types,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import trash from '../../../image/trash.svg';
import Delete from '@material-ui/icons/Delete';
import Info from '@material-ui/icons/Info';
import info from '../../../image/information.svg';
import * as styled from './Task.styled';
import Checkbox from '../../../components/checkbox/Checkbox';
import Input from '../../../components/input/Input';
import PopupContainer from '../../popup/PopupContainer';
import PopupTask from './popupTask/PopupTask';
import Dialog from './dialog/Dialog';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            statePopup: false,
            newTaskName: props.nameTask,
        };
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

    showPopup = () => {
        this.setState({
            statePopup: true,
        });
    };

    closePopup = () => {
        this.setState({
            statePopup: false,
        });
    };

    handleChangeDurationTime = (time) => {
        // console.log(time);
    };

    handleSelectTask = () => {
        const {
            idTask, selected, actions, nameTask,
        } = this.props;

        if (!selected) {
            this.setState({ statePopup: true });
        } else {
            // console.log(selected);
        }

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
        const { display, statePopup } = this.state;
        const displayStyle = { display, color: 'rgba(0, 0, 0, 0.54)' };
        const {
            idTask, selected, actions, nameTask, createdDate, completedDate, durationTime, todoListStatus
        } = this.props;
        return (
            <React.Fragment>
                {
                    statePopup && (
                        <Dialog
                            show={statePopup}
                            handleClose={this.closePopup}
                            createdDate={createdDate}
                            completedDate={completedDate}
                            durationTime={durationTime}
                            handleChangeDurationTime={this.handleChangeDurationTime}
                        />
                    )
                }
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
                    <styled.IconInfo>
                        <p>
                            <b>Information about this task:</b><br />
                            Created Date: {new Date(createdDate).toLocaleString()}<br />
                            Completed Date: {completedDate ? new Date(completedDate).toLocaleString()
                                : 'in process'}<br />
                        </p>
                        <Info
                            aria-label="info"
                            style={displayStyle}
                            alt="Information about this list"
                        />
                    </styled.IconInfo>
                    <Delete
                        aria-label="trash"
                        onClick={() => actions.deleteTask({ idTask })}
                        style={displayStyle}
                        alt="Delete this task"
                    />
                </styled.Task>
            </React.Fragment>
        );
    }
}

Task.propTypes = {
    idTask: PropTypes.number,
    selected: PropTypes.bool,
    nameTask: PropTypes.string,
};

export default Task;
