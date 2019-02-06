import React, {Component} from 'react';

export class NullLenghtDashboard extends Component {
    render() {
        return (
            <div
                id="nullVal"
                style={{margin: "auto", opacity: 0.6}}
            >You don't have a TodoList at the moment!
            </div>
        )
    }
}