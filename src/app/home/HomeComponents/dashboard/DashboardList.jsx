import React, {Component} from 'react';
import {NullLenghtDashboard} from "./NullLenghtDashboard";
import {Dashboard} from "./Dashboard";
import {randomInteger} from "../../helper";

export class DashboardList extends Component {

    constructor(props) {
        super(props);
        this.delDashboard = this.delDashboard.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.delTask = this.delTask.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onChangeNameTask = this.onChangeNameTask.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
    }

    delDashboard = (id) => this.props.deleteDashboard({id: id});

    delTask = (idList, idTask) => this.props.deleteTask({idDashboard: idList, idTask: idTask});

    addNewTask = (idDashboard, nameTask, idTask) =>
        this.props.addTask({idDashboard: idDashboard, nameTask: nameTask, idTask: idTask});

    onChangeCheckbox = (idList, idTask, selected) =>
        this.props.updateCheckbox({idDashboard: idList, idTask: idTask, selected: selected});

    updateTitle = (id, newTitle) => this.props.updateTitleDashboard({id: id, newTitle: newTitle});

    onChangeNameTask = (idList, idTask, newName) =>
        this.props.updateTaskName({idDashboard: idList, idTask: idTask, newTaskName: newName});

    defaultValueFromTitle = (e, newTitleName, id) => {

        let value = newTitleName === '' ? newTitleName = 'New Title' : newTitleName;
        this.props.updateTitleDashboard({id: id, newTitle: value})
    };

    defaultValueFromTask = (newNameTask, idList, idTask) => {
        let value = newNameTask === '' ? newNameTask = 'to-do' : newNameTask;
        this.props.updateTaskName({idDashboard: idList, idTask: idTask, newTaskName: value})
    };

    render() {
        return (
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
                                delDashboard={this.delDashboard}
                                updateTitle={this.updateTitle}
                                delTask={this.delTask}
                                onChangeCheckbox={this.onChangeCheckbox}
                                onChangeNameTask={this.onChangeNameTask}
                                addNewTask={this.addNewTask}
                                defaultValueFromTitle={this.defaultValueFromTitle}
                                randomInteger={randomInteger}
                                defaultValueFromTask={this.defaultValueFromTask}
                                toDoBoard={this.props.toDoBoard}
                            />
                        )
                }
            </main>
        )
    }
}