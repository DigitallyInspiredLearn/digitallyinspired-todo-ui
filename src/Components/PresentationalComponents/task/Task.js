import React, { Component } from 'react';
import './css/taskStyle.css'

export const Task = (idTask,taskName,selected) => (
    <div className="tasks" id={idTask}>
        <div
            className="taskDiv"
            style={{display: "flex", width:"100%", flexDirection:"row"}} >
            <div
                className={selected===false?'unselected': 'fa fa-check-square'}
            />
            <input
                type="text"
                value={taskName}
                className="taskName"
                style={{width: "100%",textOverflow:" ellipsis"}}
            />
        </div>
        <label
            className="deleteTask fa fa-trash"
        />
    </div>
);