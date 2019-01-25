import React, { Component } from 'react';
import './css/taskStyle.css'

export class Task extends Component{
    state={
        displayStyle:'none'
    };

    updateDisplayFlex = () => {
        this.setState({
            displayStyle : 'flex'
        })
    };
    updateDisplayNone = () => {
        this.setState({
            displayStyle : 'none'
        })
    };

    handlerEnterDown =(e) =>{
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

     render(){
         const displayStyle = {display: this.state.displayStyle};
        return(
            <div
                className="tasks"
                id= { this.props.idTask }
                onMouseOver={this.updateDisplayFlex}
                onMouseOut={this.updateDisplayNone}
            >
                <div
                    className="taskDiv"
                     style={{display: "flex", width:"100%", flexDirection:"row"}} >
                    <div
                        className={this.props.selected===false?'unselected': 'fa fa-check-square'}
                        onClick={() => this.props.updateSelectedTask(this.props.idList, this.props.idTask,this.props.selected)}
                    />
                    <input
                        type="text"
                        value={this.props.nameTask}
                        className="taskName"
                        style={{width: "100%",textOverflow:" ellipsis"}}
                        // onChange={(e) => this.props.updateNameTask(
                        //     this.props.idList,
                        //     this.props.idTask,
                        //     e.target.value
                        // )}
                        // onKeyPress={this.handlerEnterDown}
                    />
                </div>
                <label
                    className="deleteTask fa fa-trash"
                    style={displayStyle}
                    onClick={() => this.props.deleteTask( this.props.idList,this.props.idTask)}
                />
            </div>
        )
    }
}