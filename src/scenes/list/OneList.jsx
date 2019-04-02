/* eslint-disable react/prop-types,new-cap */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import jsPDF from 'jspdf';
import TaskForList from './tasksForList/TaskForList';
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
        };
    }

    changeValueNewTask = e => this.setState({
        valueNewTask: e.target.value,
    });

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTask: e.target.value = '',
        });
    };

    componentWillMount = ({ match, actions } = this.props) => actions.fetchList({ idList: match.params.id });

    pdfToHTML() {
        var doc = new jsPDF();
        doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
        doc.save("myDocument.pdf");
    }

    render() {
        const { valueNewTask } = this.state;
        const {
            match, actions, data, actionsBoard, todo, done, notDone,
        } = this.props;
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

                        <styled.animationButton
                            className="iconTrash"
                            src={trash}
                            id={match.params.id}
                            onClick={() => actions.deleteList({ idDashboard: match.params.id })}
                        />
                    </Link>
                    <div
                        className="download fa fa-download fa-3x"
                        title="download"
                        onClick={this.pdfToHTML}
                    />
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
                        <styledPopup.btnSearch className="fa fa-search fa-2x" />
                        <styledDashboard.CheckboxDiv>
                            <styledDashboard.ShowButton
                                checked={notDone}
                                onClick={() => actions.selectedNotDoneAction({ notDone, idList: match.params.id })}
                                style={{ marginRight: '5px', borderRadius: 0 }}
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
                    <div id="HTMLtoPDF">
                        {
                            data.tasks && (data.tasks.length === 0
                                ? (
                                    <styled.nullTask>
                                    You have no tasks yet, it's time to be active!
                                    </styled.nullTask>
                                )
                                : data.tasks.map(i => (
                                    <TaskForList
                                        idTask={i.id}
                                        idList={match.params.id}
                                        key={i.id}
                                        selected={i.isComplete}
                                        nameTask={i.body}
                                        actionsBoard={actionsBoard}
                                        actionsList={actions}
                                    />
                                )))
                        }
                    </div>
                    <styled.addNewTask
                        placeholder="Add to-do"
                        value={valueNewTask}
                        onChange={this.changeValueNewTask}
                        onKeyPress={event => event.key === 'Enter' && (
                            actions.addTaskList({
                                idDashboard: match.params.id,
                                nameTask: valueNewTask,
                                idTask: `${randomInteger(1, 100000, todo)}`,
                            }),
                            this.setState({ valueNewTask: '' })
                        )}
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
