import { connect } from 'react-redux'
import { Component } from "react";
import React from "react";
import {Sidebar} from "../PresentationalComponents/sider/Sidebar";
import {addNewDashboard} from "../../Redux/actions/actionsForDashboardAndSider";

export class VisibleSidebar extends Component {

    constructor(props){
        super(props);
        this.state = {
            displayStyle: 'none',
            animation: '',
            bool: false
        }
    }

    updateDisplaySidebar = () => {
        this.state.bool === false ?
            this.setState({
                displayStyle: 'flex',
                animation: 'move 1s',
            })
            :this.setState({
                displayStyle: 'none',
                animation: '',
            });
        this.setState({
           bool:!this.state.bool
        })
    };
    render() {
        return(
            [
                <div className="addNewArticleButton" onClick={this.updateDisplaySidebar}>+</div>,
                <Sidebar
                    toDoBoard= { this.props.toDoBoard }
                    addNewDashboard= { this.props.addNewDashboard }
                    displayStyle= { this.state.displayStyle }
                    animation = { this.state.animation }
                    updateDisplaySidebar = { this.updateDisplaySidebar}
                    randomInteger= { this.props.randomInteger }/>
            ]
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toDoBoard: state.functionality.toDoBoard
    }
};

const mapDispatchToProps = {
    addNewDashboard :addNewDashboard
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleSidebar)