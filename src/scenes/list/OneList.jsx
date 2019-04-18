import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Workbook from 'react-excel-workbook';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Comment from '@material-ui/icons/Comment';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Cancel from '@material-ui/icons/Cancel';
import Done from '@material-ui/icons/CheckCircle';
import InputLabel from '@material-ui/core/InputLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Delete from '@material-ui/icons/Delete';
import Search from '@material-ui/icons/Search';
import TaskForList from './tasksForList/TaskForList';
import { AlertDialog } from '../../components/dialog/AlertDialog';
import randomInteger from '../../config/helper';
import * as styled from './OneList.styles';
import * as styledPopup from '../popup/Popup.styles';
import * as styledDashboard from '../dashboard/DashboardList.styles';
import low from '../../image/low.svg';
import medium from '../../image/medium.svg';
import high from '../../image/high.svg';
import empty from '../../image/empty.svg';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: 'gray',
        color: theme.palette.common.white,
        fontSize: 16,
        maxWidth: '1px',
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        height: 'auto',
    },
    table: {
        minWidth: 700,
    },
    header: {
        color: 'red',
    },
    width: {
        maxWidth: '4px',
    },
    max: {
        maxWidth: '2px',
    },
});

class OneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueNewTask: '',
            stateComment: false,
            newComment: props.data.comment || '',
            priority: 'NOT_SPECIFIED',
            visible: false,
        };
    }

    changeValueNewTask = e => this.setState({ valueNewTask: e.target.value });

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTask: e.target.value = '',
            priority: 'NOT_SPECIFIED',
        });
    };

    toggleComment = () => {
        this.setState({
            stateComment: !this.state.stateComment,
        });
    };

    handleUpdateComment = (newValue) => {
        this.setState({ newComment: newValue });
    };

    handleUpdate = () => {
        const {
            actions, data,
        } = this.props;
        const { newComment } = this.state;
        actions.updateComment({ id: data.id, newComment });
        this.toggleComment();
    };

    handleChangePriority = (e) => {
        this.setState({ priority: e.target.value });
    };

    showAlertDialog = () => {
        const { visible } = this.state;
        this.setState({
            visible: !visible,
        });
    };

    componentWillMount = ({ match, actions } = this.props) => actions.fetchList({ idList: match.params.id });

    downloadToPDF = (data) => {
        const doc = new jsPDF();
        doc.text(`Dashboard: "${data.todoListName}, created by User at Time\nLast modify :data\nCommentar : Commentar"`, 15, 10);
        data.tasks.length
            ? doc.autoTable({
                head: [['+/-', 'name tasks', 'priority', 'created data', 'tags', 'completed data']],
                body: data.tasks.map(i => ([i.isComplete ? '+' : '-', i.body, '1', '03.03.2019', 'tags', 'completed data'])),
                headStyles: { fillColor: 'lightblue' },
            })
            : doc.autoTable({
                body: [['You have no tasks yet, it\'s time to be active!']],
            });
        doc.save(`${data.todoListName}.pdf`);
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

    render() {
        const {
            valueNewTask, stateComment, newComment, priority, visible,
        } = this.state;
        const {
            match, actions, data, actionsBoard, done, notDone, tasks, classes,
        } = this.props;
        console.log(data.comment);
        const dataXLS = data.tasks && data.tasks.length
            ? data.tasks.map(i => ({
                doneOrNot: i.isComplete ? '+' : '-',
                nameTasks: i.body,
                priority: 'null',
                doUp: 'null',
            }))
            : [{
                doneOrNot: 'null',
                nameTasks: 'null',
                priority: 'null',
                doUp: 'null',
            }];

        return (
            <styled.List>
                <styled.inputBlock>
                    <Link to="/lists">
                        <styled.animationButton className="fa fa-arrow-left fa-2x" />
                    </Link>
                    <styled.titleNameOneList
                        type="text"
                        placeholder="Enter dashboard title"
                        value={data.todoListName}
                        onChange={e => actions.updateTitleList({ idDashboard: data.id, newTitle: e.target.value })}
                    />
                    <Link to="/lists">
                        <Tooltip title="Delete list">
                            <IconButton
                                aria-label="trash"
                                onClick={this.showAlertDialog}
                                style={{ borderRadius: '40%', padding: '4px' }}
                                alt="Delete this list"
                            >
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <AlertDialog
                        visible={visible}
                        onClose={this.showAlertDialog}
                        value="Do you want to delete this list?"
                        onConfirm={() => actions.deleteList({ idDashboard: match.params.id })}
                    />
                    <div
                        style={{
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '22px',
                            color: 'gray',
                            marginLeft: '8px',
                        }}
                        className="fa fa-download"
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Tooltip title="Download as PDF">
                                <styled.animationButton onClick={() => this.downloadToPDF(data)}>
                                    pdf
                                </styled.animationButton>
                            </Tooltip>

                            <Workbook
                                filename="list.xlsx"
                                element={(
                                    <Tooltip title="Download as XLS">
                                        <styled.animationButton>xls</styled.animationButton>
                                    </Tooltip>
                                )}
                            >

                                <Workbook.Sheet data={dataXLS} name="list">
                                    <Workbook.Column label="+/-" value="doneOrNot" />
                                    <Workbook.Column label="name tasks" value="nameTasks" />
                                    <Workbook.Column label="priority" value="priority" />
                                    <Workbook.Column label="do up" value="doUp" />
                                </Workbook.Sheet>

                            </Workbook>

                        </div>
                    </div>
                </styled.inputBlock>
                <styled.blockTask>
                    <styled.inputDiv>
                        <styled.searchToDo
                            type="text"
                            placeholder="Search to-do"
                            onChange={e => actions.changeSearch({
                                idDashboard: match.params.id,
                                search: e.target.value,
                            })}
                        />
                        <Search style={{ paddingTop: '0px', fontSize: '40px', color: 'rgba(0, 0, 0, 0.54)' }} />
                        <styledDashboard.CheckboxDiv>
                            <styledDashboard.ShowButton
                                checked={notDone}
                                onClick={() => actions.selectedNotDoneAction({
                                    notDone,
                                    idList: match.params.id,
                                })}
                                style={{ marginRight: '5px', borderRadius: '5px 0 0 5px' }}
                            >
                                not done
                            </styledDashboard.ShowButton>
                            <styledDashboard.ShowButton
                                checked={done}
                                onClick={() => actions.selectDoneAction({ done, idList: match.params.id })}
                                style={{ borderRadius: '0 5px 5px 0' }}
                            >
                                done
                            </styledDashboard.ShowButton>
                        </styledDashboard.CheckboxDiv>
                    </styled.inputDiv>
                    <div>
                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow className={classes.header}>
                                        <CustomTableCell align="left">Is done</CustomTableCell>
                                        <CustomTableCell align="left">Priority</CustomTableCell>
                                        <CustomTableCell align="left">Name</CustomTableCell>
                                        <CustomTableCell align="left">Created date</CustomTableCell>
                                        <CustomTableCell align="left">Completed date</CustomTableCell>
                                        <CustomTableCell align="left">Duration time</CustomTableCell>
                                        <CustomTableCell align="left">Delete task</CustomTableCell>
                                    </TableRow>
                                </TableHead>
                                {
                                    tasks.length === 0
                                        ? (
                                            <styled.nullTask>
                                        You have no tasks yet, it's time to be active!
                                            </styled.nullTask>
                                        )
                                        : tasks.map(i => (

                                            <TableBody>
                                                <TaskForList
                                                    idTask={i.id}
                                                    idList={match.params.id}
                                                    key={i.id}
                                                    selected={i.isComplete}
                                                    nameTask={i.body}
                                                    actionsBoard={actionsBoard}
                                                    actionsList={actions}
                                                    priority={i.priority}
                                                    createdDate={i.createdDate}
                                                    completedDate={i.completedDate}
                                                    durationTime={i.durationTime}
                                                />
                                            </TableBody>
                                        ))
                                }
                            </Table>
                        </Paper>
                    </div>
                    <styled.addTaskContainer
                        visible={!stateComment}
                    >
                        <styled.addNewTask
                            className="addNewTask"
                            placeholder="add to-do"
                            style={{ outline: 'none', fontSize: '20px', marginLeft: '15px' }}
                            value={valueNewTask}
                            onChange={this.changeValueNewTask}
                            onKeyPress={event => event.key === 'Enter' && (
                                event.target.blur(),
                                actions.addTaskList({
                                    idDashboard: match.params.id,
                                    nameTask: valueNewTask,
                                    priority,
                                }),
                                this.setState({ valueNewTask: '', priority: 'NOT_SPECIFIED' })
                            )}
                            onBlur={(e) => {
                                this.handlerOnBlur(e);
                                // actions.fetchList(match.params.id);
                            }}
                        />
                        <FormControl
                            style={{ marginTop: '-4px', marginLeft: 'auto' }}
                        >
                            <InputLabel htmlFor="age-simple">Priority</InputLabel>
                            <Select
                                value={priority}
                                onChange={this.handleChangePriority}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                }}
                                style={{ width: '155px' }}
                            >
                                <MenuItem value="NOT_SPECIFIED">
                                    <em>NOT SPECIFIED</em>
                                </MenuItem>
                                <MenuItem value="LOW">
                                    <img
                                        width="15%"
                                        height="15%"
                                        src={low}
                                        alt="LOW"
                                    />
                                    <em>LOW</em>
                                </MenuItem>
                                <MenuItem value="MEDIUM">
                                    <img
                                        width="15%"
                                        height="15%"
                                        src={medium}
                                        alt="MEDIUM"
                                    />
                                    <em>MEDIUM</em>
                                </MenuItem>
                                <MenuItem value="HIGH">
                                    <img
                                        width="15%"
                                        height="15%"
                                        src={high}
                                        alt="HIGH"
                                    />
                                    <em>HIGH</em>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <Tooltip title="Comment" placement="top" style={{ marginTop: 'auto', marginLeft: 'auto' }}>
                            <IconButton
                                aria-label="Comment"
                                onClick={this.toggleComment}
                            >
                                <Comment />
                            </IconButton>
                        </Tooltip>
                    </styled.addTaskContainer>
                    <styled.Expand
                        visible={stateComment}
                    >
                        { (data.comment !== undefined && data.comment !== null) ? (
                            <TextField
                                onChange={e => this.handleUpdateComment(e.target.value)}
                                defaultValue={data.comment}
                                multiline
                                autoFocus
                                rowsMax="8"
                                variant="outlined"
                                margin="normal"
                                placeholder="Type comment about this list"
                                style={{
                                    width: '100%', fontWeight: 'bold',
                                }}
                                InputProps={{
                                    style: {
                                        height: '200px',
                                    },
                                }}
                            />
                        ) : null
                        }
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                            <IconButton
                                style={{ padding: '12px' }}
                                onClick={this.toggleComment}
                            >
                                <Cancel />
                            </IconButton>
                            <IconButton
                                style={{ padding: '12px' }}
                                onClick={() => this.handleUpdate()}
                            >
                                <Done />
                            </IconButton>
                        </div>
                    </styled.Expand>

                </styled.blockTask>
            </styled.List>
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

export default withStyles(styles)(OneList);
