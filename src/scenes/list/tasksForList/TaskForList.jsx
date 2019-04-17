/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Info from '@material-ui/icons/Info';
import { AlertDialog } from '../../../components/dialog/AlertDialog';
import * as stylesTask from '../../dashboard/task/Task.styled';
import Checkbox from '../../../components/checkbox/Checkbox';
import low from '../../../image/low.svg';
import medium from '../../../image/medium.svg';
import high from '../../../image/high.svg';
import empty from '../../../image/empty.svg';
import Dialog from './dialog/Dialog';

class TaskForList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            statePopup: false,
            days: '',
            hours: '',
            minutes: '',
            durationTime: props.durationTime,
            visible: false,
        };
        console.log(moment.duration(props.durationTime).hours());
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

    showPopup = () => this.setState({ statePopup: true });

    closePopup = () => this.setState({ statePopup: false });

    showAlertDialog = () => {
        const { visible } = this.state;
        this.setState({
            visible: !visible,
        });
    };

    handleSelectTask = () => {
        const {
            selected, actionsList, nameTask, idTask, idList, priority,
        } = this.props;

        if (!selected) {
            this.setState({ statePopup: true });
        } else {
            this.setState({ durationTime: 0 });
            actionsList.updateCheckboxList({
                idDashboard: idList, nameTask, idTask, selected, body: nameTask, durationTime: 0, priority,
            });
        }
    };

    handleCompleteTask = (time) => {
        const {
            selected, actionsList, nameTask, idTask, priority, idList,
        } = this.props;

        this.setState({ statePopup: false });
        const durationTime = moment.duration(time.duration).valueOf();
        // console.log(moment.duration(time.duration).days());
        this.setState({ durationTime });
        // console.log(moment.duration(time.duration).getHours());
        // console.log(moment.duration(time.duration).getMinutes());
        actionsList.updateCheckboxList({
            idDashboard: idList, idTask, selected, nameTask, priority, durationTime,
        });
    };

    setIcon = (priority) => {
        switch (priority) {
            case 'LOW':
                return (
                    <Tooltip title="LOW">
                        <img src={low} width="20px" height="25px" alt="LOW" style={{ marginLeft: '4px' }} />
                    </Tooltip>
                );
            case 'MEDIUM':
                return (
                    <Tooltip title="MEDIUM">
                        <img src={medium} width="20px" height="25px" alt="MEDIUM" style={{ marginLeft: '4px' }} />
                    </Tooltip>
                );
            case 'HIGH':
                return (
                    <Tooltip title="HIGH">
                        <img src={high} width="20px" height="25px" alt="HIGH" style={{ marginLeft: '4px' }} />
                    </Tooltip>
                );
            default:
                return (
                    <Tooltip title="Priority: NOT SPECIFIED">
                        <img src={empty} width="20px" height="20px" alt="not_specified" style={{ marginLeft: '2px', marginTop: '2px' }} />
                    </Tooltip>
                );
        }
    };

    render() {
        const {
            display, statePopup, days, hours, minutes, durationTime, visible,
        } = this.state;
        const displayStyle = { display, zIndex: 50, color: 'rgba(0, 0, 0, 0.54)' };

        const {
            idTask, selected, actionsList, idList, nameTask, priority, createdDate, completedDate,
        } = this.props;
        return (
            <React.Fragment>
                {
                    statePopup && (
                        <Dialog
                            show={statePopup}
                            onClose={this.closePopup}
                            onConfirm={this.handleCompleteTask}
                            createdDate={createdDate}
                            completedDate={completedDate}
                        />
                    )
                }
                <stylesTask.Task
                    id={idTask}
                    onMouseOver={this.updateDisplayFlex}
                    onMouseOut={this.updateDisplayNone}
                >
                    <stylesTask.NameAdnCheckedTask>
                        <Checkbox
                            checked={selected}
                            onChange={this.handleSelectTask}
                        />
                        { this.setIcon(priority) }
                        <stylesTask.TaskName
                            type="text"
                            value={nameTask}
                            selected={selected}
                            onChange={e => actionsList.updateTaskList({
                                idDashboard: idList, idTask, selected, priority, newTaskName: e.target.value,
                            })}
                        />
                        <stylesTask.IconInfo>
                            <p>
                                <b>Information about this task:</b><br />
                                    Created Date: {new Date(createdDate).toLocaleString()}<br />
                                    Completed Date: {selected ? new Date(completedDate).toLocaleString()
                                    : 'in process'}<br />
                                {
                                    (durationTime !== '' && durationTime !== 0)
                                        ? ` Duration time: ${(moment.duration(durationTime).days())}d 
                                        ${(moment.duration(durationTime).hours())}h
                                        ${(moment.duration(durationTime).minutes())}m`
                                        : null
                                }
                            </p>
                            <Info
                                aria-label="info"
                                style={displayStyle}
                                alt="Information about this task"
                            />
                        </stylesTask.IconInfo>
                        <Tooltip title="Delete task">
                            <Delete
                                aria-label="trash"
                                onClick={this.showAlertDialog}
                                style={displayStyle}
                                alt="Delete task"
                            />
                        </Tooltip>
                        <AlertDialog
                            visible={visible}
                            onClose={this.showAlertDialog}
                            value="Do you want to delete this task?"
                            onConfirm={() => actionsList.deleteTaskList({
                                idDashboard: idList, idTask,
                            })}
                        />
                    </stylesTask.NameAdnCheckedTask>
                </stylesTask.Task>
            </React.Fragment>
        );
    }
}

TaskForList.propTypes = {
    idTask: PropTypes.number,
    selected: PropTypes.bool,
    nameTask: PropTypes.string,
};

export default TaskForList;
