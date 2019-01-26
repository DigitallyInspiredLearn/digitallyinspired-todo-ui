import React, { Component } from 'react';
import {Header} from "./header/Header";
import {Dashboard} from "./dashboard/Dashboard";
import {Sider} from "./sider/Sider";
import {NullLenghtDashboard} from "./dashboard/NullLenghtDashboard";
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
                selected: true,
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
                selected: true,
                name:'add task1'
            },
            {
                id:7,
                selected: true,
                name:' delete task2'
            },
            {
                id:8,
                selected: true ,
                name:'update task3'
            },
            {
                id:80,
                selected: true ,
                name:'update selected'
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

    updateDashboardTitle = (id, newValue) => {
        this.setState({
            data: this.state.data.map(i =>
                i.idList === id ? {...i, title: newValue} : i)
        });
    };

    defaultValueFromTitle =(e,newTitleName,id) =>{

        let value = newTitleName===''? newTitleName='New Title' +id+'':newTitleName;
        this.setState({
            data: this.state.data.map(i =>
                i.idList === id ? {...i, title: value} : i)
        });

    };

    updateDisplayFlex = () => {
        this.setState({
            displayStyle: 'flex',
            animation: 'move 1s',
        })
    };

    updateDisplayNone = () => {
        this.setState({
            displayStyle: 'none',
        })
    };

    updateNameTask = (idList, idTask, newName) => {
        this.setState({
            data: this.state.data.map(i =>
                i.idList === idList?{...i,tasks: i.tasks.map(e => e.id===idTask?{...e,name:newName}:e)}:i
            )
        });
    };

    defaultValueFromTask =(e,newNameTask,idList,idTask) =>{

            let value = newNameTask===''? newNameTask='to-do':newNameTask;
            this.setState({
                data: this.state.data.map(i =>
                    i.idList === idList?{...i,tasks: i.tasks.map(e => e.id===idTask?{...e,name:value}:e)}:i
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


    addNewTask = (event,nameTask,idList,idTask) =>{
        if(nameTask===''){}
        else {
            if (event.key === 'Enter') {
                event.target.blur();
                this.state.data.map(i =>
                    i.idList === idList?i.tasks.push({id:idTask,selected:false,name:nameTask}):-1
                );
                this.setState(
                    this.state.data
                );
            }
        }
    };

    addNewDashboard = (title,idDashboard,taskName,idTask) =>{
        let titleValue= title==='' ? title='New Title Dashboard'+idDashboard:title;
        let taskValue = taskName==='' ? taskName='new do-to'+idTask:taskName;
        this.state.data.push({idList:idDashboard,title:titleValue,tasks:[{id:idTask,selected:false,name:taskValue}]});
        this.setState(
            this.state.data
        );
    };

    render() {
    return (
      <div className="App">
          <Header/>
          <div id="content">
              <main>
                  {
                      this.state.data.length ===0 ? <NullLenghtDashboard/>
                         :this.state.data.map(i => (
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
                                 addNewTask={this.addNewTask}
                                 randomInteger={this.randomInteger}
                                 defaultValueFromTitle={this.defaultValueFromTitle}
                                 defaultValueFromTask={this.defaultValueFromTask}
                             />
                         ))
                  }
              </main>
              <div className="addNewArticleButton" onClick={this.updateDisplayFlex}>+</div>
          </div>
          <Sider
              displayStyle={this.state.displayStyle}
              animation = {this.state.animation}
              updateDisplayNone = {this.updateDisplayNone}
              randomInteger={this.randomInteger}
              addNewDashboard={this.addNewDashboard}
          />
      </div>
    );
  }
}

export default App;
