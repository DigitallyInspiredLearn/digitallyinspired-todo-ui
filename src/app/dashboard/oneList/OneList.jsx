import React, {Component} from 'react'
import './styleList.css'
import ReactDOMServer from "react-dom/server";
import jsPDF from 'jspdf'
export class OneList extends Component {
    render() {
        return (
            <div id='list'>
                <div id='header'>
                    <h1>
                        {/*{this.props.title}*/}
                        Title list
                    </h1>
                    <div
                        className='download fa fa-download fa-3x'
                        title="download in pdf"
                        onClick={(e) => {
                            const link = document.createElement('a');
                            const file = new Blob(
                                [ReactDOMServer.renderToStaticMarkup(this.render())],
                                {type: 'text/html'}
                            );
                            link.href = URL.createObjectURL(file);
                            link.download = 'List.html';
                            link.click();
                            const pdf = new jsPDF();
                            pdf.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
                            pdf.save("List.pdf")
                        }}
                    />
                </div>
                <div className='searchTask'>
                    <input type='text' placeholder='Search to-do'/>
                    <div className='btnSearch fa fa-search fa-2x'/>
                </div>
                <div className='blockTask'>
                    {/*{getTaskList(this.props.tasks, this.props)}*/}

                </div>
            </div>
        )
    }
}

// const list = document.getElementById('list');
// html2canvas(list)
//     .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'JPEG',0,0);
//         pdf.save("toDoList.pdf");
//     })