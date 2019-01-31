import React, {Component} from 'react';

export class InputTask extends Component {
    render() {

        return (
            <input
                type="text"
                placeholder=" Add to-do"
                className="newTask"
                style={{outline: "none"}}
                onInput="deleteInputWithNullValue(event)"
                onChange="addTask()"
                value=""
                autoFocus
            />
        )
    }
}