/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Info from '@material-ui/icons/Info';
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
        };
        console.log(moment.duration(props.durationTime).hours());
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

    showPopup = () => this.setState({ statePopup: true });

    closePopup = () => this.setState({ statePopup: false });

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
 display, statePopup, days, hours, minutes, durationTime 
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
                        {/* <stylesTask.CheckboxTask
                            selected={selected}
                            // onClick={() => actionsList.updateCheckboxList({
                            //     idDashboard: idList, idTask, selected, nameTask,
                            // })}
                            onClick={this.showPopup}
                        /> */}
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
                                <div style={{
                                    display: 'flex', flexWrap: 'wrap', alignItems: 'center', cursor: 'default',
                                }}
                                >
                                    {/* Tags: {
                                        tagTaskKeys.map(key => key.taskId === idTask
                                            && (
                                                <span
                                                    style={{
                                                        backgroundColor: key.tag.color,
                                                        padding: '2px 4px',
                                                        margin: '4px',
                                                        borderRadius: '2px',
                                                    }}
                                                >
                                                    {key.tag.tagName}
                                                    <span
                                                        style={{
                                                            backgroundColor: 'white',
                                                            padding: ' 0 4px',
                                                            borderRadius: '2px',
                                                            border: '1px solid grey',
                                                            marginLeft: '4px',
                                                            opacity: 0.8,
                                                        }}
                                                        onClick={() => actions.removeTagFromTask({ idTag: key.tag.id, idTask })}
                                                    >x
                                                    </span>
                                                </span>
                                            ))
                                    } */}
                                </div>
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
                                onClick={() => actionsList.deleteTaskList({
                                    idDashboard: idList, idTask,
                                })}
                                style={displayStyle}
                                alt="Delete task"
                            />
                        </Tooltip>
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
