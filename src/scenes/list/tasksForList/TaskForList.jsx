/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Empty from '@material-ui/icons/ArrowUpward';
import { AlertDialog } from '../../../components/dialog/AlertDialog';
import * as stylesTask from '../../dashboard/task/Task.styled';
import Checkbox from '../../../components/checkbox/Checkbox';
import low from '../../../image/low.svg';
import medium from '../../../image/medium.svg';
import high from '../../../image/high.svg';
import Dialog from './dialog/Dialog';


const styles = () => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    header: {
        color: 'red',
    },
    max: {
        width: 'auto',
    },
    duration: {
        marginLeft: '3px',
    },
    delete: {
        width: 50,
    },
});

class TaskForList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statePopup: false,
            // days: '',
            // hours: '',
            // minutes: '',
            durationTime: props.durationTime,
            visible: false,
            anchorEl: null,
            open: true,
        };
    }

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
        this.setState({ durationTime });
        actionsList.updateCheckboxList({
            idDashboard: idList, idTask, selected, nameTask, priority, durationTime,
        });
    };

    handleClick = (event) => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,
        }));
    };

    setIcon = (priority) => {
        switch (priority) {
            case 'LOW':
                return (
                    <Tooltip title="LOW">
                        <img
                            src={low}
                            width="20px"
                            height="25px"
                            alt="LOW"
                            style={{ marginLeft: '4px', marginBottom: '-7px' }}
                        />
                    </Tooltip>
                );
            case 'MEDIUM':
                return (
                    <Tooltip title="MEDIUM">
                        <img
                            src={medium}
                            width="20px"
                            height="25px"
                            alt="MEDIUM"
                            style={{ marginLeft: '4px', marginBottom: '-7px' }}
                        />
                    </Tooltip>
                );
            case 'HIGH':
                return (
                    <Tooltip title="HIGH">
                        <img
                            src={high}
                            width="20px"
                            height="25px"
                            alt="HIGH"
                            style={{ marginLeft: '4px', marginBottom: '-7px' }}
                        />
                    </Tooltip>
                );
            default:
                return (
                    <Tooltip title="Priority: NOT SPECIFIED">
                        <span>
                            <Empty
                                width="20px"
                                height="20px"
                                alt="not_specified"
                                style={{
                                    padding: '3px 0 3px 4px', width: '20px', height: '20px', marginBottom: '-7px',
                                }}
                            />
                        </span>
                    </Tooltip>
                );
        }
    };

    render() {
        const {
            statePopup, durationTime, visible, anchorEl, open,
            // days, hours, minutes
        } = this.state;
        const {
            idTask, selected, actionsList, idList, nameTask, priority, createdDate, completedDate, classes,
            tagTaskKeys, tags,
        } = this.props;
        console.log(this.props);
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
                <TableRow>
                    <TableCell align="right">
                        <Checkbox
                            checked={selected}
                            onChange={this.handleSelectTask}
                        />
                    </TableCell>
                    <TableCell align="left" className={classes.max}>
                        <stylesTask.TaskName
                            type="text"
                            value={nameTask}
                            selected={selected}
                            onChange={e => actionsList.updateTaskList({
                                idDashboard: idList, idTask, selected, priority, newTaskName: e.target.value,
                            })}
                            style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        />
                    </TableCell>
                    <TableCell align="left">
                        { this.setIcon(priority)} {priority}
                    </TableCell>
                    <TableCell align="left">{new Date(createdDate).toLocaleString()}</TableCell>
                    <TableCell align="left">{selected ? new Date(completedDate).toLocaleString()
                        : 'in process' }
                    </TableCell>

                    <TableCell align="left" className={classes.duration}>
                        {
                            (durationTime !== null && durationTime !== 0)
                                ? ` ${(moment.duration(durationTime).days())}d
                                    ${(moment.duration(durationTime).hours())}h
                                    ${(moment.duration(durationTime).minutes())}m`
                                : 'in process'
                        }
                    </TableCell>
                    <TableCell align="center">
                        <Popper placement="bottom" open={open} anchorEl={anchorEl} transition style={{ zIndex: 1000 }}>
                                {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper>
                                            <Typography
                                                // className={classes.typography}
                                            >
                                                {/* <Tooltip title="Account">
                                                    <styled.Icon
                                                        src={account}
                                                        alt="account"
                                                        onClick={this.handlerAccountClick}
                                                    />
                                                </Tooltip>
                                                <Tooltip title="Settings">
                                                    <styled.Icon
                                                        src={settings}
                                                        alt="logout"
                                                        onClick={this.openSettings}
                                                    />
                                                </Tooltip>
                                                <Tooltip title="Basket page">
                                                    <styled.Icon
                                                        src={basket}
                                                        alt="logout"
                                                        onClick={this.handlerBasketClick}
                                                    />
                                                </Tooltip>
                                                <Tooltip title="Logout">
                                                    <styled.Icon
                                                        src={exit}
                                                        alt="logout"
                                                        onClick={this.showAlertDialog}
                                                    />
                                                </Tooltip> */}
                                                ,,,,
                                            </Typography>
                                        </Paper>
                                </Fade>
                            )}
                        </Popper>
                        {
                            tagTaskKeys.map(key => key.taskId === idTask
                                            && (
                                                <span
                                                    key={key}
                                                    style={{
                                                        backgroundColor: key.tag.color,
                                                        padding: '6px 8px',
                                                        margin: '4px',
                                                        borderRadius: '20px',
                                                        opacity: 0.9,
                                                    }}
                                                    // onMouseOver={this.handleClick}
                                                >
                                                    {key.tag.tagName}
                                                    <span
                                                        style={{
                                                            padding: ' 0 4px',
                                                            marginLeft: '4px',
                                                            opacity: 0.6,
                                                            color: 'black',
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={() => {
                                                            // actions.removeTagFromTask({ idTag: key.tag.id, idTask });
                                                            // this.getTagsTaks();
                                                        }}
                                                    >x
                                                    </span>
                                                    
                                                </span>
                                            ))
                        }
                        
                    </TableCell>
                    <TableCell align="center" className={classes.delete}>
                        <Tooltip title="Delete task">
                            <span>
                                <Delete
                                    aria-label="trash"
                                    onClick={this.showAlertDialog}
                                    alt="Delete task"
                                />
                            </span>
                        </Tooltip>
                    </TableCell>
                </TableRow>
                {
                    <AlertDialog
                        visible={visible}
                        onClose={this.showAlertDialog}
                        value="Do you want to delete this task?"
                        onConfirm={() => actionsList.deleteTaskList({
                            idDashboard: idList, idTask,
                        })}
                    />

                }
            </React.Fragment>
        );
    }
}

TaskForList.propTypes = {
    idTask: PropTypes.number,
    selected: PropTypes.bool,
    nameTask: PropTypes.string,
};

TaskForList.defaultProps = {
    idTask: undefined,
    selected: false,
    nameTask: '',
};

export default withStyles(styles)(TaskForList);
