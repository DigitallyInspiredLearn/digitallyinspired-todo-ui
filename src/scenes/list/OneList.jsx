import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Workbook from 'react-excel-workbook';
import TaskForList from './tasksForList/TaskForList';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import randomInteger from '../../config/helper';
import * as styled from './OneList.styles';
import trash from '../../image/trash.svg';
import * as styledPopup from '../popup/Popup.styles';
import * as styledDashboard from '../dashboard/DashboardList.styles';

class OneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueNewTask: '',
            stateComment: false,
            newComment: props.comment,
            newPriority: 'NOT_SPECIFIED',
        };
    }

    changeValueNewTask = e => this.setState({ valueNewTask: e.target.value });

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTask: e.target.value = '',
        });
    };

    componentWillMount = ({ match, actions } = this.props) => actions.fetchList({ idList: match.params.id });

    downloadToPDF = (data) => {
        const doc = new jsPDF();
        doc.text(`Dashboard: "${data.todoListName}"`, 15, 10);
        data.tasks.length
            ? doc.autoTable({
                head: [['+/-', 'name tasks', 'priority', 'do up']],
                body: data.tasks.map(i => ([i.isComplete ? '+' : '-', i.body, '1', '03.03.2019'])),
                headStyles: { fillColor: 'lightblue' },
            })
            : doc.autoTable({
                body: [['You have no tasks yet, it\'s time to be active!']],
            });
        doc.save(`${data.todoListName}.pdf`);
    };

    render() {

        const { valueNewTask } = this.state;
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
                        <IconButton
                            aria-label="trash"
                            onClick={() => actions.deleteList({ idDashboard: match.params.id })}
                            style={{ borderRadius: '40%', padding: '4px' }}
                            alt="Delete this list"

                        >
                            <Delete />
                        </IconButton>
                    </Link>
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
                            <styled.animationButton onClick={() => this.downloadToPDF(data)}>
                                pdf
                            </styled.animationButton>
                            <Workbook
                                filename="list.xlsx"
                                element={(<styled.animationButton>xls</styled.animationButton>)}
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
                        <styledPopup.btnSearch style={{ paddingTop: '0px' }} className="fa fa-search fa-2x" />
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
                                    />
                                ))
                        }
                    </div>
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
                            }),
                            this.setState({ valueNewTask: '' })
                        )}
                        onBlur={(e) => {
                            this.handlerOnBlur(e);
                            actions.fetchList(match.params.id);
                        }}
                    />
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
