import React, { Component } from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';
// import {InputTask} from "./InputTask";

export class Sider extends Component{
    render(){
        return(
            <div id="sider" style={{display:this.props.displayStyle}}>
                <div id="fon"/>
                <aside id="addingArticle" style={{animation:this.props.animation}}>
                    <h4 className="window-close">✕</h4>
                    <input
                        type="text"
                        placeholder="Add title"
                        id="newTitle"
                        value=""
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
                            value=""
                        />
                    </div>
                    <button
                        className="addListBtn"
                        type="submit"
                    >Add</button>
                </aside>
            </div>
        )
    }
}