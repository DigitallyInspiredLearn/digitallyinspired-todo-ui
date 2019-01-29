import { connect } from 'react-redux'
import { Component } from "react";
import React from "react";
import {Sider} from "../PresentationalComponents/sider/Sider";
import {addNewDashboar} from "../../Redux/actions/actionsForDashboard";

export class VisibleSider extends Component {
    render() {
        return(
            <Sider
                toDoBoard={ this.props.toDoBoard}
                addNewDashboard={this.props.addNewDashboar}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toDoBoard: state.sider.toDoBoard
    }
};

const mapDispatchToProps = {
   addNewDashboard :addNewDashboar
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleSider)