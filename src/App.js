import React, {Component} from 'react';
import plus from './image/plus.PNG';
import './App.css';
import {Dashboard} from "./dashboard/Dashboard";
import {Header} from "./header/Header";
import {Sidebar} from "./sidebar/Sidebar";

const generateId = () => {
    return Math.floor(Math.random() * 100000);
};

class Root extends Component {
    state = {
        data: [
            {
                idList: generateId(),
                title: 'Dashboard 1',
                tasks: [
                    {
                        id: generateId(),
                        selected: true,
                        name: 'Task1'
                    },
                    {
                        id: generateId(),
                        selected: false,
                        name: 'Task2'
                    }
                ]
            },
            {
                idList: generateId(),
                title: 'Dashboard 2',
                tasks: [
                    {
                        id: generateId(),
                        selected: false,
                        name: 'Task 3'
                    },
                    {
                        id: generateId(),
                        selected: false,
                        name: 'Task 4'
                    }
                ]
            }
        ],
        display: false
    };

    deleteDashboard = (id) => {
        this.setState({
            data: this.state.data.filter(item => item.idList !== id)
        })
    };

    deleteTask = (idBox, idTask) => {
        this.setState({
            data: this.state.data.map(item => {
                if (item.idList === idBox) {
                    return {...item, tasks: item.tasks.filter(itemTask => itemTask.id !== idTask)}
                }
                return item
            })
        })
    };

    changeTitle = (id, newValue) => {
        console.log(newValue);
        this.setState(
            {
                data: this.state.data.map(item =>
                    item.idList === id ? {...item, title: newValue} : item)
            })
    };

    addTask = (idBox, newValue) => {
        let newTask =
            {
                id: generateId(),
                selected: false,
                name: newValue
            };
        this.setState(
            {
                data: this.state.data.map(item =>
                    item.idList === idBox ? {...item, tasks: [...item.tasks, newTask]} : item)
            });
        console.log(this.state.data)
    };

    addNewDashboard = (newTitle, newTask) => {
        let newDashboard = {
            idList: generateId(),
            title: newTitle,
            tasks: [
                {
                    id: generateId(),
                    selected: false,
                    name: newTask
                }]
        };
        this.setState(
            {
                data: [...this.state.data, newDashboard]
            }
        );
        console.log(this.state.data)
    };

    toggleActive = (e, idTask) => {
        e.target.classList.toggle("active");
        let it = [];
        console.log(idTask);
        this.setState({
            data: this.state.data.map(item => {
                item.tasks.map(nameTask => nameTask.id === idTask ? {
                    ...nameTask,
                    selected: !nameTask.selected
                } : nameTask);
                return item
            })
        });
        console.log(it)
    };

    showSidebar = () => {
        this.setState(
            {
                display: true
            }
        )
    };

    closeSidebar = () => {
        this.setState(
            {
                display: false
            }
        )
    };

    render() {
        return (
            <div className="main_block">
                <Header/>
                <div className="container">
                    {
                        this.state.data.map(item => {
                            return <Dashboard
                                data={item}
                                key={item.idList}
                                deleteDashboard={this.deleteDashboard}
                                changeTitle={this.changeTitle}
                                deleteTask={this.deleteTask}
                                addTask={this.addTask}
                                toggleActive={this.toggleActive}
                            />
                        })
                    }
                </div>
                <Sidebar
                    display={this.state.display}
                    closeSidebar={this.closeSidebar}
                    addNewDashboard={this.addNewDashboard}
                />
                <div className="plus">
                    <img
                        id="myBtn"
                        src={plus}
                        onClick={() => this.showSidebar()}
                    />
                </div>
            </div>
        );
    }
}

export const App = Root;
