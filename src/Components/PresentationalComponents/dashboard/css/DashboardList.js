import React from 'react';
import {NullLenghtDashboard} from "../NullLenghtDashboard";
import {Dashboard} from "../Dashboard";

export const DashboardList = () =>(
    <main>
        {
            // this.props.toDoBoard.length === 0?
            //     <NullLenghtDashboard/>:
            //     this.props.toDoBoard.map(i =>
                    <Dashboard
                        // key={i.idList}
                        // updateTitle={this.props.updateTitleDashboard}
                        // deleteDashboard={this.props.deleteDashboard}
                        // id={i.idList}
                        // title={i.title}
                        // taskt={i.taskt}
                    />
                 // )
        }
    </main>
);