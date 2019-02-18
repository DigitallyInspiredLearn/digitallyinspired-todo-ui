import React, { Component } from 'react';
import '../list/styleList.css';
import { Link } from 'react-router-dom';


export class PageError500 extends Component {

    render() {
        return (
            <div>
                <h1 style={{margin: '50px'}}>Извините за неудобства. Проводятся технические работы.</h1>
            </div>
        );
    }
}
