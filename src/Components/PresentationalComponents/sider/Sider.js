import React, { Component } from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';
// import {InputTask} from "./InputTask";

export class Sider extends Component{

    constructor(props){
        super(props);
        this.state = {
            titleName:'',
            taskName:'',
        }
    }

    changeValueTitleName = (e) =>this.setState({
        titleName : e.target.value
    });
    changeValueTaskName= (e) =>this.setState({
        taskName : e.target.value
    });

    handlerOnclisk = (e) =>{
        e.target.blur();
        this.setState({
            titleName: this.state.titleName=e.target.value='',
            taskName:this.state.taskName=e.target.value=''
        })
    };

    render(){
        return(
            <div id="sider"
                 style={{display:this.props.displayStyle}}
            >
                <div id="fon"/>
                <aside id="addingArticle" style={{animation:this.props.animation}}>
                    <h4 className="window-close">✕</h4>
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
                                this.props.addNewDashboard(
                                this.state.titleName,
                                13,
                                this.state.taskName,
                                83,
                            );
                            this.handlerOnclisk(e);
                        }}
                    >Add</button>
                </aside>
            </div>
        )
    }
}


//------------
