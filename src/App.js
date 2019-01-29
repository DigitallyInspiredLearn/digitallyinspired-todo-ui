import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createStore, bindActionCreators } from 'redux'
import { deleteDashboard } from './store/actions'
import './App.css';
import {Header} from './components/header/Header';
import {Dashboard} from './components/dashboard/Dashboard';
import {Sidebar} from './components/sidebar/Sidebar';


const generateId = () => {
  return Math.floor(Math.random() * 1000000);
};

const getFromStorage = () => {
  let toDoList = [
    {
      dashboard_id: generateId(),
      title: "title01",
      tasks: [
        {
          task_id: generateId(),
          selected: true,
          name: "task01",
        },
      ]
    }
  ]

  return (
     JSON.parse(localStorage.getItem('arr')) == null ? localStorage.setItem('arr',JSON.stringify(toDoList)) :
     JSON.parse(localStorage.getItem('arr'))
  )
};


class App extends Component {

  generateId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  state = {
    data: getFromStorage()
  };

  saveStorage = (array) => {
    localStorage.setItem('arr', JSON.stringify(array));
  }

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
      }, () => this.saveStorage(this.state.data));
      
    console.log(this.state.data)
    
    }
  }

  /*deleteDashboard = (box_id) => {
    console.log(box_id);
    this.setState({
      data: this.state.data.filter(i => i.dashboard_id !== box_id)
    }, () => this.saveStorage(this.state.data)); 
  };
  */

  changeDashboardTitle = (box_id, newValue) => {
    this.setState({
      data: this.state.data.map(i => 
        i.dashboard_id === box_id ? { ...i, title: newValue } : i)
    }, () => this.saveStorage(this.state.data))
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
      }, () => this.saveStorage(this.state.data));

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
    }, () => this.saveStorage(this.state.data))
    
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
    }, () => this.saveStorage(this.state.data));
      
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
    }, () => this.saveStorage(this.state.data));  
  };


  render() {
    const dispatch = this.props.dispatch;
    console.log(this.props);
    
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
                  //deleteDashboard = {this.deleteDashboard}
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

const putStateToProps = (state) => {
  return {
    dashboard_id: state.dashboard_id,
    title: state.title,
    tasks: [
      {
        task_id: state.tasks.task_id,
        selected: state.tasks.selected,
        name: state.tasks.name,
      }
    ],
  };
};

const putActionsToProps = (dispatch) => {
  return {
    deleteDashboard: bindActionCreators(deleteDashboard, dispatch),
  }
}

export default connect(putStateToProps, putActionsToProps)(App);

//export default App;
