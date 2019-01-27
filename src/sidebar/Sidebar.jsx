import React, {Component} from 'react';
import plus from '../img/plus.png';
import cross from '../img/cross-out-mark.png';
import './sidebar.css';

export class Sidebar extends Component {

    state = {
        display: "none",
    };

    showSidebar = () => {
        this.setState({
            display: "flex",
        });
    }

    hideSidebar = () => {
        this.setState({
            display: "none",
        });
    }

    render(){
        return (
        <div>   
            <div id="plus" onClick={this.showSidebar}><img src={plus} width="60px" height="60px" alt="plus"/></div> 
            <div id="block-add" style={{display: this.state.display}}>
                <div id="x-mark" onClick={this.hideSidebar}><img src={cross} width="23px" height="23px" alt="cross"/></div>
                <input type="text" id="add-title" placeholder="Add title"/>
                <input type="text" id="add-task" placeholder="Add to-do"/>
                <div id="button-add" onClick={() => this.props.addDashboard()}>Add</div>
            </div>
        </div>
        );
    }
}