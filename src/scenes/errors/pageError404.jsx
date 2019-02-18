import React, { Component } from 'react';
import '../list/styleList.css';
import { Link } from 'react-router-dom';


export class PageError404 extends Component {

    render() {
        return (
           <div>
               <h1 style={{margin: '50px'}}>Страница не найдена. Error 404</h1>
           </div>
        );
    }
}
