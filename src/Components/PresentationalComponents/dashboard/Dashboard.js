import React from 'react';
import './css/dashboardStyle.css'
import './css/dashboardStyleForComp.css'
import {Task} from "../task/Task";
import {NullLenghtTasks} from "../task/NullLenghtTasks";

export const Dashboard = (tasks,idList,title) =>(
    <section id={idList}>
        <article>
            <input
                type="text"
                value={title}
                className="titleName"
            />
            <div className="deleteBoadr fa fa-trash fa-2x"/>
        </article>
        <div className="taskLists">
            {
                // tasks.length ===0 ?
                //     <NullLenghtTasks/>
                //     : tasks.map((i, task)  => (
                //         <Task key={i} {...task}/>
                //     ))
            }
            <Task/>
        </div>
        <input
            className="addNewTask"
            placeholder="add to-do"
            style={{outline: "none"}}
            value=""
        />
    </section>
);


