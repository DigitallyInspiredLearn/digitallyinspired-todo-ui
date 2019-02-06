import {Dashboard} from "./Dashboard";
import {Component} from "react";
import React from "react";
import VisibleSidebar from '../sidebar/VisibleSidebar'


export class DashboardList extends Component {

    componentWillMount() {
        this.props.actions.fetchList();
    }


    render() {
        console.log(this.props);
        return (
            <div>
                <div className="container">
                    {
                        this.props.data.map(item => {
                            return <Dashboard
                                idList={item.idList}
                                title={item.title}
                                tasks={item.tasks}
                                key={item.idList}
                                deleteDashboard={this.props.actions.deleteDashboard}
                                deleteTask={this.props.actions.deleteTask}
                                changeTitle={this.props.actions.changeTitle}
                                addTask={this.props.actions.addTask}
                                toggleActive={this.props.actions.toggleActive}
                                infoAboutList={this.props.actions.infoAboutList}
                            />
                        })
                    }

                </div>
                <VisibleSidebar/>
            </div>

        );
    }
}
