/* eslint-disable react/prop-types,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Delete from '@material-ui/icons/Delete';
import Info from '@material-ui/icons/Info';
import * as styled from './Task.styled';
import Checkbox from '../../../components/checkbox/Checkbox';
import Input from '../../../components/input/Input';
import PopapAddTagToTask from './popapAddTagToTask/PopapAddTagToTask';
import Dialog from './dialog/Dialog';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            statePopup: false,
            newTaskName: props.nameTask,
            visiblePopapAddTagToTask: false,
            selectedTask: '',
        };
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

    showPopapAddTagToTask = idTask => this.setState({ visiblePopapAddTagToTask: true, selectedTask: idTask });

    closePopapAddTagToTask = () => this.setState({ visiblePopapAddTagToTask: false });

    showPopup = () => this.setState({ statePopup: true });

    closePopup = () => this.setState({ statePopup: false });

    handleSelectTask = () => {
        const {
            idTask, selected, actions, nameTask,
        } = this.props;

        if (!selected) {
            this.setState({ statePopup: true });
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
        const {
            display, statePopup, visiblePopapAddTagToTask, selectedTask,
        } = this.state;
        const displayStyle = { display, color: 'rgba(0, 0, 0, 0.54)' };
        const {
            idTask,
            selected,
            actions,
            nameTask,
            createdDate,
            completedDate,
            durationTime,
            allTags,
            tagTaskKeys,
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
                {
                    <PopapAddTagToTask
                        show={visiblePopapAddTagToTask}
                        handleClose={this.closePopapAddTagToTask}
                        actions={actions}
                        allTags={allTags}
                        selectedTask={selectedTask}
                    />
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
                            Completed Date: {
                                completedDate ? new Date(completedDate).toLocaleString() : 'in process'
                            }<br />
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', alignItems: 'center', cursor: 'default',
                            }}
                            >
                            Tags: {
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
                                }
                            </div>
                        </p>
                        <Info
                            aria-label="info"
                            style={displayStyle}
                            alt="Information about this list"
                        />
                    </styled.IconInfo>
                    <styled.AddTag
                        style={displayStyle}
                        onClick={() => this.showPopapAddTagToTask(idTask)}
                    >
                        +
                    </styled.AddTag>
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
