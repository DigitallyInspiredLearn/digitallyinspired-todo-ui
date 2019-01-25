import React, { Component } from 'react';
import {Header} from "./header/Header";
import {Dashboard} from "./dashboard/Dashboard";
import {Sider} from "./sider/Sider";
import './index.css'

const toDoList =[
    {
        idList:1,
        title: 'Dashboard',
        tasks: [
            {
                id:2,
                selected: true,
                name:'delete Dashboard'
            },
            {
                id:3,
                selected: true,
                name:'updateDashboarTitle'
            },
            {
                id:4,
                selected: false,
                name:'addDashboard'
            },
        ]
    },
    {
        idList: 5,
        title: 'Task',
        tasks: [
            {
                id:6,
                selected: false,
                name:'add task1'
            },
            {
                id:7,
                selected: true,
                name:' delete task2'
            },
            {
                id:8,
                selected: false ,
                name:'update task3'
            },
            {
                id:80,
                selected: true ,
                name:'update selected'
            },
        ]
    },
    {
        idList: 9,
        title: 'Title list3',
        tasks: [
            {
                id:100,
                selected: true,
                name:'когда нажимает ентер-убираем фокус'
            },
            {
                id:10,
                selected: false,
                name:'else dashboards.lenght===0||tasks.lenght===0 - you don\'t have ...'
            },
        ]
    },
];

class App extends Component {
    state = {
        data: toDoList,
        displayStyle: 'none',
        animation: '',
    };

    deleteDashboard = (id) => {
        this.setState({
            data: this.state.data.filter(i => i.idList !== id)
        });
    };

    deleteTask = (idList, idTask) => {
        this.setState({
            data: this.state.data.map(i =>
                i.idList === idList?{...i, tasks: i.tasks.filter(e => e.id !== idTask)}:i
            )
        })
    };

    updateDashboardTitle = (id, newValue,event) => {
        this.setState({
            data: this.state.data.map(i =>
                i.idList === id ? {...i, title: newValue} : i)
        });
    };

    updateDisplayFlex = () => {
        this.setState({
            displayStyle: 'flex',
            animation: 'move 1s'
        })
    };

    updateDisplayNone = () => {
        this.setState({
            displayStyle: 'none'
        })
    };

    updateNameTask = (idList, idTask, newName) => {
        this.setState({
            data: this.state.data.map(i =>
                i.idList === idList?{...i, tasks: i.tasks.push({id:idTask,selected:false,name:newName})}:i
            )
        })
    };

    updateSelectedTask = (idList, idTask, selectedValue) => {
        this.setState({
            data: this.state.data.map(i =>
                i.idList === idList?{...i, tasks: i.tasks.map(e =>e.id === idTask? {...e,selected:!selectedValue}:e)}:i
            )
        })
    };

    randomInteger = (min, max) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);

        this.state.data.forEach(e=>{
            e.idList === rand? this.randomInteger(min, max):e.tasks.forEach(i =>
                i.id === rand?this.randomInteger(min, max): rand)
        });
        return rand;
    };

    // addNewTask = (event,nameTask,idList,idTask) =>{
    //     if (event.key === 'Enter') {
    //         event.target.blur();
    //         this.setState({
    //             data: this.state.data.map(i =>
    //                 i.idList === idList?
    //             )
    //         });
    //         console.log(this.state.data)
    //     }
    // };
    render() {
    return (
      <div className="App">
          <Header/>
          <div id="content">
              <main>
                  {this.state.data.map(i => (
                      <Dashboard
                          idList={i.idList}
                          key={i.idList}
                          title={i.title}
                          tasks={i.tasks}
                          deleteDashboard={this.deleteDashboard}
                          updateDashboardTitle={this.updateDashboardTitle}
                          deleteTask={this.deleteTask}
                          updateNameTask={this.updateNameTask}
                          updateSelectedTask={this.updateSelectedTask}
                          // addNewTask={this.addNewTask}
                          randomInteger={this.randomInteger}
                      />
                  ))}
              </main>
              <div className="addNewArticleButton" onClick={this.updateDisplayFlex}>+</div>
          </div>
          <Sider
              displayStyle={this.state.displayStyle}
              animation = {this.state.animation}
              updateDisplayNone = {this.updateDisplayNone}
              randomInteger={this.randomInteger}
          />
      </div>
    );
  }
}

export default App;
