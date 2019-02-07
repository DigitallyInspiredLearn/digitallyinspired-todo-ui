import React, {Component} from 'react'
import './styleList.css'
import ReactDOMServer from "react-dom/server";
// import jsPDF from 'jspdf'
import {getTaskList} from "../dashboard/Dashboard";
import {bindActionCreators, compose} from "redux";
import {actions} from "./duck";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class OneList extends Component {
    constructor(props) {
        super(props);
        this.props.actions.fetchList(props.match.params.id);
    }

    render() {
        return (
            <div id='list'>
                <div id='header'>
                    <h1>{this.props.data.title}</h1>
                    <div
                        className='download fa fa-download fa-3x'
                        title="download"
                        onClick={(e) => {
                            const link = document.createElement('a');
                            const file = new Blob(
                                [ReactDOMServer.renderToStaticMarkup(this.render())],
                                {type: 'text/html'}
                            );
                            link.href = URL.createObjectURL(file);
                            link.download = 'List.html';
                            link.click();
                            // const pdf = new jsPDF();
                            // pdf.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
                            // pdf.save("List.pdf")
                        }}
                    />
                </div>
                <div className='searchTask'>
                    <input type='text' placeholder='Search to-do'/>
                    <div className='btnSearch fa fa-search fa-2x'/>
                </div>
                <article className='blockTask' style={{display:'block'}}>
                    {this.props.data.tasks && getTaskList(this.props.data.tasks, this.props)}
                </article>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({data: state.list.data});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        fetchList: actions.fetchList,
    }, dispatch)
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(OneList)