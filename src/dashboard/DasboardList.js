import {Dashboard} from "./Dashboard";
import {Component} from "react";
import React from "react";

export class DashboardList extends Component {

    render() {
        return (
            <div className="container">
                {
                    this.props.data.map(item => {
                        return <Dashboard
                            idList={item.idList}
                            title={item.title}
                            tasks={item.tasks}
                            key={item.idList}
                            deleteDashboard={this.props.deleteDashboard}
                            deleteTask={this.props.deleteTask}
                            changeTitle={this.props.changeTitle}
                            addTask={this.props.addTask}
                            toggleActive={this.props.toggleActive}
                        />
                    })
                }

            </div>

        );
    }
}
