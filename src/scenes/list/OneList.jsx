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
import Empty from '@material-ui/icons/ArrowUpward';
import TaskForList from './tasksForList/TaskForList';
import { AlertDialog } from '../../components/dialog/AlertDialog';
import * as styled from './OneList.styles';
import * as styledDashboard from '../dashboard/DashboardList.styles';
import low from '../../image/low.svg';
import medium from '../../image/medium.svg';
import high from '../../image/high.svg';
import xls from '../../image/xls-file.svg';
import pdf from '../../image/pdf-file.svg';

const CustomTableCell = withStyles(() => ({
    head: {
        backgroundColor: 'gray',
        color: 'white',
        fontSize: 16,
        width: 5,
        height: 10,
    },
}))(TableCell);

const styles = () => ({
    root: {
        width: '100%',
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
            newComment: props.comment,
            priority: 'NOT_SPECIFIED',
            visible: false,
            alignment: ['notDone', 'done'],
        };
    }

    componentWillMount = ({ match, actions } = this.props) => actions.fetchList({ idList: match.params.id });

    componentWillUnmount = () => {
        this.props.actions.clean();
    };

    changeValueNewTask = e => this.setState({ valueNewTask: e.target.value });

    handleFormat = (event, alignment) => this.setState({ alignment });

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTask: e.target.value = '',
            priority: 'NOT_SPECIFIED',
        });
    };

    toggleComment = () => {
        const { stateComment } = this.state;
        this.setState({
            stateComment: !stateComment,
        });
    };

    handleUpdateComment = (e) => {
        this.setState({ newComment: e.target.value });
    };

    handleUpdate = () => {
        const { actions, data } = this.props;
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

    downloadToPDF = (data) => {
        const doc = new jsPDF();
        doc.text(`Dashboard: "${data.todoListName}"`, 15, 10);
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
            valueNewTask, stateComment, comment, priority, visible, alignment, newComment,
        } = this.state;
        const {
            match, actions, data, actionsBoard, done, notDone, tasks, classes, tagTaskKeys, tags,
        } = this.props;
        // console.log(this.props);
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
                        defaultValue={data.todoListName}
                        onChange={e => actions.updateTitleList({ idDashboard: data.id, newTitle: e.target.value })}
                    />
                    <Link to="/lists">
                        <Tooltip title="Delete list">
                            <Delete
                                style={{ height: '30px', color: 'black' }}
                                onClick={this.showAlertDialog}
                                alt="Delete this list"
                            />
                        </Tooltip>
                    </Link>
                    <AlertDialog
                        visible={visible}
                        onClose={this.showAlertDialog}
                        value="Do you want to delete this list?"
                        onConfirm={() => actions.deleteList({ idDashboard: match.params.id })}
                    />
                    <Tooltip title="Download as PDF">
                        <img
                            src={pdf}
                            alt="download in pdf"
                            onClick={() => this.downloadToPDF(data)}
                            style={{ height: '30px' }}
                        />
                    </Tooltip>
                    <Workbook
                        style={{ marginTop: '8px' }}
                        filename="list.xlsx"
                        element={(
                            <Tooltip title="Download as XLS">
                                <img
                                    src={xls}
                                    alt="download in xls"
                                    style={{ height: '30px', paddingTop: '4px' }}
                                />
                            </Tooltip>
                        )}
                    >
                        <Workbook.Sheet data={dataXLS} name="list">
                            <Workbook.Column label="+/-" value="doneOrNot" />
                            <Workbook.Column label="name tasks" value="nameTasks" />
                            <Workbook.Column label="priority" value="priority" />
                            <Workbook.Column label="duration time" value="doUp" />
                        </Workbook.Sheet>

                    </Workbook>

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

                        <styledDashboard.ToggleButtonGroup
                            style={{
                                backgroundColor: 'white',
                                boxShadow: '0 0  4px 0  rgba(0,0,0,0.2)',
                                borderBottom: '1px solid grey',
                                margin: '6px 0 4px 8px',
                                borderRadius: '4px',
                            }}
                            value={alignment}
                            onChange={this.handleFormat}
                        >
                            <styledDashboard.ToggleButton
                                style={{
                                    color: 'black',
                                    height: '52px',
                                    display: 'flex',
                                    alignSelf: 'center',
                                    borderRight: '1px solid lightgrey',
                                }}
                                onClick={() => actions.selectDoneAction({ done, idList: match.params.id })}
                                value="done"
                            >
                                done
                            </styledDashboard.ToggleButton>
                            <styledDashboard.ToggleButton
                                style={{
                                    color: 'black',
                                    height: '52px',
                                    display: 'flex',
                                    alignSelf: 'center',
                                }}
                                onClick={() => actions.selectedNotDoneAction({
                                    notDone,
                                    idList: match.params.id,
                                })}
                                value="notDone"
                            >
                                not done
                            </styledDashboard.ToggleButton>
                        </styledDashboard.ToggleButtonGroup>
                    </styled.inputDiv>
                    {
                        tasks.length === 0
                            ? (
                                <styled.nullTask>
                                    You have no tasks yet, it's time to be active!
                                </styled.nullTask>
                            ) : (
                                <div>
                                    <Paper className={classes.root}>
                                        <Table className={classes.table}>
                                            <TableHead>
                                                <TableRow className={classes.header}>
                                                    <CustomTableCell align="left" />
                                                    <CustomTableCell align="left">Name</CustomTableCell>
                                                    <CustomTableCell align="left">Priority</CustomTableCell>
                                                    
                                                    <CustomTableCell align="left">Created date</CustomTableCell>
                                                    <CustomTableCell align="left">Completed date</CustomTableCell>
                                                    <CustomTableCell align="left">Duration time</CustomTableCell>
                                                    <CustomTableCell align="center">Tags</CustomTableCell>
                                                    <CustomTableCell align="center" />
                                                </TableRow>
                                            </TableHead>
                                            {
                                                tasks.map(i => (
                                                    <TableBody key={i.id}>
                                                        <TaskForList
                                                            idTask={i.id}
                                                            idList={match.params.id}
                                                            selected={i.isComplete}
                                                            nameTask={i.body}
                                                            actionsBoard={actionsBoard}
                                                            actionsList={actions}
                                                            priority={i.priority}
                                                            createdDate={i.createdDate}
                                                            completedDate={i.completedDate}
                                                            durationTime={i.durationTime}
                                                            tags={this.props.location.state.tags}
                                                            tagTaskKeys={this.props.location.state.tagTaskKeys}
                                                        />
                                                    </TableBody>
                                                ))
                                            }
                                        </Table>
                                    </Paper>
                                </div>
                            )
                    }
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
                                style={{ width: '190px' }}
                            >
                                <MenuItem value="NOT_SPECIFIED">
                                    <div>
                                        <Empty
                                            style={{
                                                width: '15px', height: '15px', paddingLeft: '4px', marginLeft: '4px',
                                            }}
                                        />
                                        <span style={{ marginLeft: '8px' }}>NOT SPECIFIED</span>
                                    </div>
                                </MenuItem>
                                <MenuItem value="LOW">
                                    <styled.PriorityImage
                                        src={low}
                                        alt="LOW"
                                    />
                                    <em>LOW</em>
                                </MenuItem>
                                <MenuItem value="MEDIUM">
                                    <styled.PriorityImage
                                        src={medium}
                                        alt="MEDIUM"
                                    />
                                    <em>MEDIUM</em>
                                </MenuItem>
                                <MenuItem value="HIGH">
                                    <styled.PriorityImage
                                        src={high}
                                        alt="HIGH"
                                    />
                                    <em>HIGH</em>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <Tooltip title="Comment" placement="top">
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
                        <React.Fragment>
                            { (data.comment !== undefined && data.comment !== null) ? (
                                <TextField
                                    onChange={this.handleUpdateComment}
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
                        </React.Fragment>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                            <IconButton
                                style={{ padding: '12px' }}
                                onClick={this.toggleComment}
                            >
                                <Cancel style={{ color: 'red' }} />
                            </IconButton>
                            <IconButton
                                style={{ padding: '12px' }}
                                onClick={() => this.handleUpdate()}
                            >
                                <Done style={{ color: 'green' }} />
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
