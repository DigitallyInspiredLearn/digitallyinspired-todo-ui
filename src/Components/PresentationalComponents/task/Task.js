import React, {Component} from 'react';
import './css/taskStyle.css'

export class Task extends Component{

    constructor(props) {
        super(props);
        this.state = {
            displayStyle: 'none',
            value: ''
        }
    }

    updateDisplayFlex = () => {
        this.setState({
            displayStyle : 'flex'
        })
    };

    updateDisplayNone = () => {
        this.setState({
            displayStyle : 'none'
        })
    };

    render(){
        const displayStyle = { display: this.state.displayStyle };

        return(
            <div
                className="tasks"
                id= { this.props.idTask }
                onMouseOver= { this.updateDisplayFlex }
                onMouseOut={this.updateDisplayNone}
            >
                <div
                    className="taskDiv"
                    style={{
                        display: "flex",
                        width:"100%",
                        flexDirection:"row"
                    }} >
                    <div
                        className= { this.props.selected === false ? 'unselected' : 'fa fa-check-square' }
                        style= {{ zIndex : 5 }}
                        onClick = { () => this.props.onChangeCheckbox(
                            this.props.idList,
                            this.props.idTask,
                            this.props.selected
                        )}
                    />
                    <input
                        type="text"
                        value= { this.props.nameTask }
                        className="taskName"
                        style= {{ width: "100%", textOverflow: "ellipsis", zIndex: 5 }}
                        onChange= { (e) => {
                            this.props.onChangeNameTask(
                                this.props.idList,
                                this.props.idTask,
                                e.target.value,
                            );
                        }}
                        onKeyDown= {(e) => e.key === 'Enter' ? e.target.blur() : -1 }
                        onBlur= { (e) => this.props.defaultValueFromTask(
                            e.target.value,
                            this.props.idList,
                            this.props.idTask
                        )}
                    />
                    <label
                        className="deleteTask fa fa-trash"
                        style= { displayStyle }
                        onClick= { () => this.props.delTask(this.props.idList, this.props.idTask) }
                    />
                </div>
            </div>
        )
    }
}

