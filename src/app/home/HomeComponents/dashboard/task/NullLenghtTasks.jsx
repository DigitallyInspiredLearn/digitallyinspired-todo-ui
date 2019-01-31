import React, {Component} from 'react';

export class NullLenghtTasks extends Component {
    render() {
        return (
            <div
                id="nullTask"
                style={{margin: "10px", opacity: 0.6}}
            >You don't have a do-to at the moment!
            </div>
        )
    }
}