import React, { Component } from 'react';
import './App.css';
import {Header} from './header/Header';
import {Dashboard} from './dashboard/Dashboard';
import {Sidebar} from './sidebar/Sidebar';

const generateId = () => {
  return Math.floor(Math.random() * 1000000);
};

const toDoList = [
  {
    dashboard_id: generateId(),
    title: "title01",
    tasks: [
      {
        task_id: generateId(),
        selected: true,
        name: "task01",
      },
      {
        task_id: generateId(),
        selected: false,
        name: "task02",
      }
    ],
  },
  {
    dashboard_id: generateId(),
    title: "title02",
    tasks: [
      {
        task_id: generateId(),
        selected: true,
        name: "task11",
      }
    ],
  }
];

class Root extends Component {

  generateId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  state = {
    data: toDoList
  };

  addDashboard = (title, task) => {

    if (title !== "" && task !== "") {
      console.log(title)
      console.log(task)

      let newDashboard = {
        dashboard_id: generateId(),
        title: title,
        tasks: [
          {
            task_id: generateId(),
            selected: false,
            name: task,
          }
        ],
      }

    console.log(newDashboard)

    
   
      this.setState({
        data: [...this.state.data, newDashboard]
      });
      
      /*this.setState({
        data: this.state.data.map(item => item = item.push(newDashboard))
      });
      */

    console.log(this.state.data)
    
    }
  }

  deleteDashboard = (box_id) => {
    console.log(box_id);
    this.setState({
      data: this.state.data.filter(i => i.dashboard_id !== box_id)
    }); 
  };

  changeDashboardTitle = (box_id, newValue) => {
    this.setState({
      data: this.state.data.map(i => 
        i.dashboard_id === box_id ? { ...i, title: newValue } : i)
    })
    console.log(box_id,newValue);
  };

  addTask = (box_id, e) => {
    
    if (e.target.value !== "") {

      let newTask = {
          task_id: generateId(),
          selected: false,
          name: e.target.value,
      }

      console.log(newTask)

      this.setState({
        data: this.state.data.map(item =>
          item.dashboard_id === box_id
            ? {
                ...item,
                tasks: [...item.tasks, newTask]
              }
            : item
        )
      });

      console.log(this.state.data)
    }

    e.target.value = "";

  };

  changeTask = (box_id, task_id, newValue) => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.dashboard_id === box_id) {
          item.tasks = item.tasks.map(task => {
            if (task.task_id === task_id) {
              return {...task, name: newValue}
            }
            return task;
          })
        }
        return item;
      })
    })
    
    console.log(this.state.data);
    
  };

  changeTaskSelected = (box_id, task_id, value) => {
    console.log(box_id)
    console.log(task_id)
    console.log(value)

    this.setState({
      data: this.state.data.map(item => {
        if (item.dashboard_id === box_id) {
          item.tasks = item.tasks.map(task => {
            if (task.task_id === task_id) {
              return {...task, selected: value}
            }
            return task;
          })
        }
        return item;
      })
    });
    

    /*this.setState({
            data: this.state.data.map(item => {
                item.tasks = item.tasks.map(task => task.task_id === task_id ? {
                    ...task, selected: !task.selected
                } 
                : task);
                return item
            })
    });
    */
  
    console.log(this.state.data)
  }

  deleteTask = (box_id, task_id) => {
    this.setState({
      data: this.state.data.map(i => {
          if (i.dashboard_id === box_id) {
            return {...i, tasks: i.tasks.filter(task => task.task_id !== task_id)}
          }
          return i;
      })
    });  
  };


  render() {
    return (
      <div id="block-main">
          <Header/>
          <div id="block-content">
              {this.state.data.map(i => (

                <Dashboard 
                  key = {i.dashboard_id}
                  dashboard_id = {i.dashboard_id} 
                  title = {i.title} 
                  tasks = {i.tasks} 
                  deleteDashboard = {this.deleteDashboard}
                  changeDashboardTitle = {this.changeDashboardTitle}
                  addTask = {this.addTask}
                  changeTask = {this.changeTask}
                  changeTaskSelected = {this.changeTaskSelected}
                  deleteTask = {this.deleteTask}
                />           
                ))}
            
                         
          </div>
             
        
        <Sidebar 
          addDashboard = {this.addDashboard}
        />
      </div>
    );
  }
}

export const App = Root;
