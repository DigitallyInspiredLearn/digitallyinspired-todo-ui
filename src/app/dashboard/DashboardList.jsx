import React, {Component} from 'react';
import {NullLenghtDashboard} from "./NullLenghtDashboard";
import {Dashboard} from "./Dashboard";
import {randomInteger} from "../helper";
import VisibleSidebar from './sider/VisibleSidebar'

export class DashboardList extends Component {

    componentDidMount = () => this.props.fetchDashboard();

    defaultValueFromTitle = (e, newTitleName, id) => {
        let value = newTitleName === '' ? newTitleName = 'New Title' : newTitleName;
        this.props.updateTitleDashboard({id: id, newTitle: value})
    };

    defaultValueFromTask = (newNameTask, idList, idTask) => {
        let value = newNameTask === '' ? newNameTask = 'to-do' : newNameTask;
        this.props.updateTaskName({idDashboard: idList, idTask: idTask, newTaskName: value})
    };

    render() {
        return ([
                <main>
                    {
                        this.props.toDoBoard.length === 0 ?
                            <NullLenghtDashboard/> :
                            this.props.toDoBoard.map(i =>
                                <Dashboard
                                    idList={i.idList}
                                    key={i.idList}
                                    title={i.title}
                                    tasks={i.tasks}
                                    delDashboard={this.props.deleteDashboard}
                                    updateTitle={this.props.updateTitleDashboard}
                                    delTask={this.props.deleteTask}
                                    onChangeCheckbox={this.props.updateCheckbox}
                                    onChangeNameTask={this.props.updateTaskName}
                                    addNewTask={this.props.addTask}
                                    defaultValueFromTitle={this.defaultValueFromTitle}
                                    randomInteger={randomInteger}
                                    defaultValueFromTask={this.defaultValueFromTask}
                                    toDoBoard={this.props.toDoBoard}
                                    fetchOneDashboardSuccess={this.props.fetchOneDashboardSuccess}
                                />
                            )
                    }
                </main>,
                <VisibleSidebar/>
            ]

        )
    }
}