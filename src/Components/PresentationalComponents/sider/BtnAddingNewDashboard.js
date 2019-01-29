import React, { Component } from 'react';

export class BtnAddingNewDashboard extends Component{
    render() {
        return(
            <div className="addNewArticleButton" onClick={this.updateDisplayFlex}>+</div>
        )
    }
}