import React, {Component} from 'react';
import {NullLenghtDashboard} from "./NullLenghtDashboard";
import {Dashboard} from "./Dashboard";

export class DashboardList extends Component {

    constructor(props){
        super(props);
        this.delDashboard = this.delDashboard.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.delTask = this.delTask.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onChangeNameTask = this.onChangeNameTask.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
    }

    delDashboard = (id) => {
        this.props.deleteDashboard(id)
    };

    updateTitle = (id, newTitle) => {
        this.props.updateTitleDashboard(id, newTitle)
    };

    delTask = (idList, idTask) => {
        this.props.deleteTask(idList, idTask)
    };

    onChangeCheckbox = (idList, idTask, selected) => {
        this.props.updateCheckbox(idList, idTask, selected)
    };

    onChangeNameTask = (idList, idTask, newName) => {
        this.props.updateTaskName(idList, idTask, newName)
    };

    addNewTask = (idDashboard, nameTask, idTask ) =>{
        this.props.addTask(idDashboard, nameTask, idTask )
    };

    defaultValueFromTitle =( e, newTitleName, id ) => {

        let value = newTitleName === '' ? newTitleName = 'New Title': newTitleName;
        this.props.updateTitleDashboard(id, value)
    };

    defaultValueFromTask = (newNameTask, idList, idTask) => {
        let value = newNameTask === '' ? newNameTask = 'to-do' : newNameTask;
        this.props.updateTaskName(idList, idTask, value)
    };

    render(){
        return(
            <main>
                {
                    this.props.toDoBoard.length === 0 ?
                        <NullLenghtDashboard/> :
                        this.props.toDoBoard.map( i =>
                            <Dashboard
                                idList = { i.idList }
                                key = { i.idList }
                                title = { i.title }
                                tasks = { i.tasks }
                                delDashboard = { this.delDashboard }
                                updateTitle = { this.updateTitle }
                                delTask = { this.delTask }
                                onChangeCheckbox = { this.onChangeCheckbox }
                                onChangeNameTask = { this.onChangeNameTask }
                                addNewTask = { this.addNewTask }
                                defaultValueFromTitle = { this.defaultValueFromTitle }
                                randomInteger = { this.props.randomInteger }
                                defaultValueFromTask = {this.defaultValueFromTask }
                                data={ this.props.toDoBoard }
                            />
                        )
                }
            </main>
        )
    }
}