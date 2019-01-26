import React, { Component } from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';

export class Sider extends Component{
    state = {
        titleName:'',
        taskName:''
    };

    changeValueTitleName = (e) =>this.setState({
        titleName : e.target.value
    });
    changeValueTaskName= (e) =>this.setState({
        taskName : e.target.value
    });
    render(){
        return(
            <div id="sider" style={{display:this.props.displayStyle}}>
                <div id="fon" onClick={this.props.updateDisplayNone}/>
                <aside id="addingArticle" style={{animation:this.props.animation}}>
                    <h4 className="window-close" onClick={this.props.updateDisplayNone}>✕</h4>
                    <input
                        type="text"
                        placeholder="Add title"
                        id="newTitle"
                        value={this.state.titleName}
                        onChange={this.changeValueTitleName}/>
                    <div className="taskList" style={{display: "flex", flexDirection: "column"}}>
                        <input
                            type="text"
                            placeholder=" Add to-do"
                            className="newTask"
                            id="mainInput"
                            style={{outline:"none"}}
                            value={this.state.taskName}
                            onChange={this.changeValueTaskName}
                        />
                    </div>
                    <button
                        className="addListBtn"
                        type="submit"
                        onClick={()=>{
                            this.props.updateDisplayNone();
                            this.props.addNewDashboard(
                            this.state.titleName,
                            this.props.randomInteger(1,1000000),
                            this.state.taskName,
                            this.props.randomInteger(1,1000000),
                        );

                        }

                        }
                    >Add</button>
                </aside>
            </div>
        )
    }
}