import React, { Component } from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';
// import {InputTask} from "./InputTask";

export class Sidebar extends Component{

    constructor(props){
        super(props);
        this.state = {
            titleName:'',
            taskName:'',
        };
        this.addBoard = this.addBoard.bind(this);
    }

    addBoard = (title, idBoard, taskName, idTask) => {
        let titleValue= title==='' ? title='New Title Dashboard':title;
        let taskValue = taskName==='' ? taskName='new do-to':taskName;
        this.props.addNewDashboard(titleValue, idBoard, taskValue, idTask);
    };

    changeValueTitleName = (e) =>this.setState({
        titleName : e.target.value
    });
    changeValueTaskName= (e) =>this.setState({
        taskName : e.target.value
    });

    handlerOnClisk = (e) =>{
        e.target.blur();
        this.setState({
            titleName: e.target.value='',
            taskName:e.target.value=''
        })
    };

    render(){
        return(
            <div id="sider"
                 style={{display:this.props.displayStyle}}
            >
                <div
                    id="fon"
                     onClick= { e => {
                         this.props.updateDisplaySidebar();
                         this.handlerOnClisk(e)
                     }}
                />
                <aside id="addingArticle" style= {{ animation:this.props.animation }} >
                    <h4 className="window-close"
                        onClick= { e => {
                            this.props.updateDisplaySidebar();
                            this.handlerOnClisk(e)
                        }}
                    >✕</h4>
                    <input
                        type="text"
                        placeholder="Add title"
                        id="newTitle"
                        value={this.state.titleName}
                        onChange={this.changeValueTitleName}
                    />
                    <div
                        className="taskList"
                        style={{display: "flex", flexDirection: "column"}}
                    >
                        <input
                            type="text"
                            placeholder=" Add to-do"
                            className="newTask"
                            id="mainInput"
                            style={{outline:"none"}}
                            value={this.state.taskName}
                            onInput={this.changeValueTaskName}
                        />
                    </div>
                    <button
                        className="addListBtn"
                        type="submit"
                        onClick={(e)=>{
                            this.props.updateDisplaySidebar();
                            this.addBoard(
                                this.state.titleName,
                                this.props.randomInteger(1,1000000, this.props.toDoBoard),
                                this.state.taskName,
                                this.props.randomInteger(1,1000000, this.props.toDoBoard)
                            );
                            this.handlerOnClisk(e);
                        }}
                    >Add</button>
                </aside>
            </div>
        )
    }
}