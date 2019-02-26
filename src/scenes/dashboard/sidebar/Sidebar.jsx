/* eslint-disable react/no-unused-state,no-unused-expressions,no-sequences */
import React, { Component } from 'react';
import plus from '../../../image/plus.svg';
import trash from '../../../image/trash.svg';
import * as styled from './Sidebar.styles';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoListName: '',
            displayStyle: 'none',
            tasks: [{ body: '', id: new Date().valueOf(), isComplete: false }],
            animation: '',
            bool: false,
            displayTrash: 'none',
        };
    }

    updateDisplayTrashVisible = () => this.setState({ displayTrash: 'flex' });

    updateDisplayTrashHide = () => this.setState({ displayTrash: 'none' });

    updateDisplaySidebar = ({ bool } = this.state) => {
        bool ? this.setState({ displayStyle: 'none', animation: '' })
            : this.setState({ displayStyle: 'flex', animation: 'move 1s' });
        this.setState({ bool: !bool });
    };

    addBoard = (title, tasks, { addNewDashboard } = this.props) => {
        const titleValue = !title ? 'DashboardList' : title;
        const taskValue = tasks === {} ? { body: 'ex', id: new Date().valueOf(), isComplete: false } : tasks;
        addNewDashboard({
            id: new Date().valueOf(),
            todoListName: titleValue,
            tasks: taskValue,
            userOwnerId: '0',
        });
    };

    changeValueTitle = e => this.setState({ todoListName: e.target.value });

    changeValueName = (i, { tasks } = this.state) => (e) => {
        const newTaskHolders = tasks.map((task, sidx) => (i !== sidx && task, { ...task, body: e.target.value }));
        this.setState({ tasks: newTaskHolders });
    };

    handlerOnClick = (e) => {
        e.target.blur();
        this.setState({
            todoListName: '',
            tasks: [{ body: '', id: new Date().valueOf(), isComplete: false }],
        });
    };

    handleAddInputTask = ({ tasks } = this.state) => {
        this.setState({
            tasks: tasks.concat([{ body: '', id: new Date().valueOf(), isComplete: false }]),
        });
    };

    handleRemoveInputTask = (i, { tasks } = this.state) => () => this.setState({
        tasks: tasks.filter((s, sidx) => i !== sidx),
    });

    render() {
        const { displayTrash, displayStyle, animation, todoListName, tasks } = this.state;
        const displaysTrash = { display: displayTrash };
        return (

            [
                <styled.Plus className="plus" onClick={this.updateDisplaySidebar}>
                    <styled.ButtonPlus  src={plus} alt="Plus" />
                </styled.Plus>,
                <styled.Sidebar  style={{ display: displayStyle, zIndex: 50 }}>
                    <styled.Background
                        onClick={(e) => { this.updateDisplaySidebar(); this.handlerOnClick(e); }}
                    />
                    <styled.Aside  style={{ animation }}>
                        <styled.Close
                            onClick={(e) => { this.updateDisplaySidebar(); this.handlerOnClick(e); }}
                        >&times;
                        </styled.Close>
                        <styled.InputTitle
                            type="text"
                            placeholder="Add title"
                            value={todoListName}
                            onChange={this.changeValueTitle}
                        >

                        </styled.InputTitle>
                        <styled.TaskList>
                            {tasks.map((task, i) => (
                                <styled.AddTaskPlace

                                    onMouseOut={this.updateDisplayTrashHide}
                                    onMouseOver={this.updateDisplayTrashVisible}
                                >
                                    <styled.InputTask
                                        type="text"
                                        placeholder={`Add ${i + 1} to-do`}
                                        value={task.name}
                                        onChange={this.changeValueName(i)}
                                    />
                                    <styled.TrashTask
                                        src={trash}
                                        alt="Delete this task"
                                        onClick={this.handleRemoveInputTask(i)}
                                        style={displaysTrash}
                                    />
                                </styled.AddTaskPlace>
                            ))}
                        </styled.TaskList>
                        <styled.AddTask type="button" onClick={this.handleAddInputTask}>
                            Add one more task
                        </styled.AddTask>
                        <styled.AddButton
                            type="submit"
                            onClick={(e) => {
                                this.updateDisplaySidebar();
                                this.addBoard(todoListName, tasks);
                                this.handlerOnClick(e);
                            }}
                        >Add
                        </styled.AddButton>
                    </styled.Aside>
                </styled.Sidebar>,
            ]
        );
    }
}
export default Sidebar;
