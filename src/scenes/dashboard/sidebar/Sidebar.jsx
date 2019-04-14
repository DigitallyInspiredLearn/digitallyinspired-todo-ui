/* eslint-disable react/no-unused-state,no-unused-expressions,no-sequences */
import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import plus from '../../../image/plus.svg';
import trash from '../../../image/trash.svg';
import low from '../../../image/low.svg';
import medium from '../../../image/medium.svg';
import high from '../../../image/high.svg';
import * as styled from './Sidebar.styles';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoListName: '',
            displayStyle: 'none',
            tasks: [{ body: '', priority: 'NOT_SPECIFIED', isComplete: false }],
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
        // const taskValue = tasks === {} ? { body: '', isComplete: false } : tasks;
        // console.log(tasks);
        addNewDashboard({
            todoListName: titleValue,
            tasks,
            comment: '',
        });
        this.setState({
            todoListName: '',
            tasks: [{ body: '', priority: 'NOT_SPECIFIED', isComplete: false }],
        });
    };

    changeValueTitle = e => this.setState({ todoListName: e.target.value });

    changeValueName = i => (e) => {
        const newTaskHolders = this.state.tasks.map((task, sidx) => {
            if (i !== sidx) return task;
            return { ...task, body: e.target.value };
        });
        this.setState({ tasks: newTaskHolders });
    };

    handlerOnClick = (e) => {
        e.target.blur();
    };

    handleAddInputTask = () => {
        this.setState({
            tasks: this.state.tasks.concat([{ body: '', priority: 'NOT_SPECIFIED', isComplete: false }]),
        });
    };

    handleRemoveInputTask = (i, { tasks } = this.state) => () => this.setState({
        tasks: tasks.filter((s, sidx) => i !== sidx),
    });

    changeValuePriority = i => (e) => {
        const newTaskHolders = this.state.tasks.map((task, sidx) => {
            if (i !== sidx) return task;
            return { ...task, priority: e.target.value };
        });
        this.setState({ tasks: newTaskHolders });
    };

    render() {
        const {
            displayTrash, displayStyle, animation, todoListName, tasks,
        } = this.state;
        const displaysTrash = { display: displayTrash };
        return (

            [
                <div className="fon" style={{ backgroundColor: 'whitesmoke', opacity: 0.98, zIndex: 10 }} />,
                <styled.Plus
                    key="plus"
                    className="plus"
                    onClick={this.updateDisplaySidebar}
                >
                    <styled.ButtonPlus src={plus} alt="Plus" />
                </styled.Plus>,
                <styled.Sidebar key="sidebar" style={{ display: displayStyle, zIndex: 5 }}>
                    <styled.Background
                        onClick={(e) => { this.updateDisplaySidebar(); this.handlerOnClick(e); }}
                    />
                    <styled.Aside style={{ animation }}>
                        <styled.Close
                            onClick={(e) => { this.updateDisplaySidebar(); this.handlerOnClick(e); }}
                        >&times;
                        </styled.Close>
                        <styled.InputTitle
                            type="text"
                            placeholder="Add title"
                            value={todoListName}
                            onChange={this.changeValueTitle}
                        />
                        <styled.TaskList>
                            {tasks.map((task, i) => (
                                <styled.AddTaskPlace
                                    onMouseOut={this.updateDisplayTrashHide}
                                    onMouseOver={this.updateDisplayTrashVisible}
                                    key={i}
                                >
                                    <styled.InputTask
                                        type="text"
                                        placeholder={`Add ${i + 1} to-do`}
                                        value={task.body}
                                        onChange={this.changeValueName(i)}
                                    />
                                    <FormControl
                                        style={{ marginTop: '-20px', marginRight: '50px', minWidth: '30px' }}
                                    >
                                        <InputLabel htmlFor="age-simple">Priority</InputLabel>
                                        <Select
                                            value={task.priority}
                                            onChange={this.changeValuePriority(i)}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-simple',
                                            }}
                                            style={{ width: '120px' }}
                                        >
                                            <MenuItem value="NOT_SPECIFIED">
                                                <em>NOT SPECIFIED</em>
                                            </MenuItem>
                                            <MenuItem value="LOW">
                                                <img
                                                    width="15%"
                                                    height="15%"
                                                    src={low}
                                                    alt="LOW"
                                                />
                                                LOW
                                            </MenuItem>
                                            <MenuItem value="MEDIUM">
                                                <img
                                                    width="15%"
                                                    height="15%"
                                                    src={medium}
                                                    alt="MEDIUM"
                                                />
                                                MEDIUM
                                            </MenuItem>
                                            <MenuItem value="HIGH">
                                                <img
                                                    width="15%"
                                                    height="15%"
                                                    src={high}
                                                    alt="HIGH"
                                                />
                                                HIGH
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <styled.TrashTask
                                        src={trash}
                                        alt="Delete this task"
                                        onClick={this.handleRemoveInputTask(i)}
                                        // style={displaysTrash}
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
