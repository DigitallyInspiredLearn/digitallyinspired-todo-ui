import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Workbook from 'react-excel-workbook';
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
import * as styled from './OneList.styles';
import * as styledDashboard from '../dashboard/DashboardList.styles';
import low from '../../image/low.svg';
import medium from '../../image/medium.svg';
import high from '../../image/high.svg';
import xls from '../../image/xls-file.svg';
import pdf from '../../image/pdf-file.svg';

class OneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueNewTask: '',
            stateComment: false,
            newComment: props.data.comment || '',
            priority: 'NOT_SPECIFIED',
            visible: false,
            alignment: ['notDone', 'done'],
        };
    }

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

    handleUpdateComment = (newValue) => {
        this.setState({ newComment: newValue });
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

    componentWillMount = ({ match, actions } = this.props) => actions.fetchList({ idList: match.params.id });

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

    render() {
        const {
            valueNewTask, stateComment, comment, priority, visible, alignment,
        } = this.state;
        const {
            match, actions, data, actionsBoard, done, notDone, tasks,
        } = this.props;
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
                    <Tooltip title="Download as PDF">
                        <img
                            src={pdf}
                            alt="download in pdf"
                            onClick={() => this.downloadToPDF(data)}
                            style={{ height: '37px' }}
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
                                    style={{ height: '37px', paddingTop: '4px' }}
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
                            value={alignment} onChange={this.handleFormat}
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
                    <div>
                        {
                            tasks.length === 0
                                ? (
                                    <styled.nullTask>
                                        You have no tasks yet, it's time to be active!
                                    </styled.nullTask>
                                )
                                : tasks.map(i => (
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
                                ))
                        }
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
                                    LOW
                                </MenuItem>
                                <MenuItem value="MEDIUM">
                                    <img
                                        width="15%"
                                        height="15%"
                                        src={medium}
                                        alt="MEDIUM"
                                    />
                                    MEDIUM
                                </MenuItem>
                                <MenuItem value="HIGH">
                                    <img
                                        width="15%"
                                        height="15%"
                                        src={high}
                                        alt="HIGH"
                                    />
                                    HIGH
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
                        { data.comment !== undefined ? (
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

export default OneList;
