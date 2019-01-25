import React, { Component } from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';

export class Sider extends Component{

    render(){
        return(
            <div id="sider" style={{display:this.props.displayStyle}}>
                <div id="fon" onClick={this.props.updateDisplayNone}/>
                <aside id="addingArticle" style={{animation:this.props.animation}}>
                    <h4 className="window-close" onClick={this.props.updateDisplayNone}>✕</h4>
                    <input type="text" placeholder="Add title" id="newTitle"/>
                    <div className="taskList" style={{display: "flex", flexDirection: "column"}}>
                        <input
                            type="text"
                            placeholder=" Add to-do"
                            className="newTask"
                            id="mainInput"
                            style={{outline:"none"}}
                        />
                    </div>
                    <button className="addListBtn">Add</button>
                </aside>
            </div>
        )
    }
}