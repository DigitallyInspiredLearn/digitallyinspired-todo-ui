import React, { Component } from 'react';
import {Header} from "./header/Header";
import {Dashboard} from "./dashboard/Dashboard";
import {Sider} from "./sider/Sider";
import {NullLenghtDashboard} from "./dashboard/NullLenghtDashboard";
import './index.css'

let getStorage = () => {
    let toDoBoard = [
        {
            idList: 999,
            title: 'Что осталось',
            tasks: [
                {
                    id:4,
                    selected: false,
                    name:'Сделать в сайдере добавление нескольких тасок'
                },
                {
                    id:24,
                    selected: true,
                    name:'Сделать LocaleStorage'
                },
                {
                    id:14,
                    selected: false,
                    name:'Отрефакторить код'
                }
            ]
        }
    ];
    return  JSON.parse(localStorage.getItem("toDoData"))===null?
        localStorage.setItem("toDoData", JSON.stringify(toDoBoard))
        : JSON.parse(localStorage.getItem("toDoData"));
};
const saveUpdatingStorege = (toDoBoard) =>{
    localStorage.setItem('toDoData',JSON.stringify(toDoBoard));
};
class App extends Component {

    constructor(props){
        super(props)
    }
    state = {
        data: getStorage(),
        displayStyle: 'none',
        animation: '',
    };

    deleteDashboard = (id) => {
        this.setState({
            data: this.state.data.filter(i => i.idList !== id),
        },() => saveUpdatingStorege(this.state.data))
    };

    deleteTask = (idList, idTask) => {
        this.setState({
            data: this.state.data.map(i =>
                i.idList === idList?{...i, tasks: i.tasks.filter(e => e.id !== idTask)}:i
            )
        }, () => saveUpdatingStorege(this.state.data));
        console.log(this.state.data)
    };

    updateDashboardTitle = (id, newValue) => {
        this.setState({
            data: this.state.data.map(i =>
                i.idList === id ? {...i, title: newValue} : i)
        },() => saveUpdatingStorege(this.state.data));
    };

    defaultValueFromTitle =(e,newTitleName,id) =>{

        let value = newTitleName===''? newTitleName='New Title'+'':newTitleName;
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
        },() => saveUpdatingStorege(this.state.data));
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
        },() => saveUpdatingStorege(this.state.data))
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
                    this.state.data,() => saveUpdatingStorege(this.state.data)
                );
            }
        }
    };

    addNewDashboard = (title,idDashboard,taskName,idTask) =>{
        let titleValue= title==='' ? title='New Title Dashboard'+idDashboard:title;
        let taskValue = taskName==='' ? taskName='new do-to'+idTask:taskName;
        this.state.data.push({idList:idDashboard,title:titleValue,tasks:[{id:idTask,selected:false,name:taskValue}]});
        this.setState(
            this.state.data,() => saveUpdatingStorege(this.state.data)
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
