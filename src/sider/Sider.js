import React, { Component } from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';
import {InputTask} from "./InputTask";

export class Sider extends Component{
    state = {
        titleName:'',
        taskName:'',
        // task:[]
    };

    changeValueTitleName = (e) =>this.setState({
        titleName : e.target.value
    });
    changeValueTaskName= (e) =>this.setState({
        taskName : e.target.value
    });

    deleteInputWithNullValue = (e) =>{

    };

    // addTask = (event) => {
    //     if (event.key === 'Enter') {
    //         this.state.task.push(<InputTask/>);
    //         this.setState({
    //             task: this.state.task.map(i=>i)
    //         })
    //     }
    // };
    handlerOnclisk = (e) =>{
        e.target.blur();
        this.setState({
            titleName:this.state.titleName=e.target.value='',
            taskName:this.state.taskName=e.target.value=''
        })
    };
    render(){
        return(
            <div id="sider" style={{display:this.props.displayStyle}}>
                <div id="fon" onClick={e=>{this.props.updateDisplayNone();this.handlerOnclisk(e)}}/>
                <aside id="addingArticle" style={{animation:this.props.animation}}>
                    <h4
                        className="window-close"
                        onClick={e=>{this.props.updateDisplayNone();this.handlerOnclisk(e)}}
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
                        // onKeyDown={this.addTask}
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
                        {/*{this.state.task}*/}
                    </div>
                    <button
                        className="addListBtn"
                        type="submit"
                        onClick={(e)=>{
                            this.props.updateDisplayNone();
                            this.props.addNewDashboard(
                            this.state.titleName,
                            this.props.randomInteger(1,1000000),
                            this.state.taskName,
                            this.props.randomInteger(1,1000000),
                        );
                            this.handlerOnclisk(e);
                        }}
                    >Add</button>
                </aside>
            </div>
        )
    }
}