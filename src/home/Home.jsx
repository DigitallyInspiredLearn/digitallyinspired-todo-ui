/* eslint-disable no-console */
import React, { Component } from 'react';
import * as styled from './Home.styled';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exampleStateField: 'Hi',
        };
    }

    render() {
        const { exampleStateField } = this.state;
        console.log(exampleStateField);
        return (
            <styled.ExapleContainer>
                <styled.ExapleRow primary>The Makhynenko's boilerplate for React App:</styled.ExapleRow>
                <styled.ExapleRow>-- Webpack</styled.ExapleRow>
                <styled.ExapleRow>-- Babel</styled.ExapleRow>
                <styled.ExapleRow>-- Linter</styled.ExapleRow>
                <styled.ExapleRow>-- React</styled.ExapleRow>
                <styled.ExapleRow>-- Router</styled.ExapleRow>
                <styled.ExapleRow>-- Hot reload</styled.ExapleRow>
                <styled.ExapleRow>-- Styled Components</styled.ExapleRow>
                <styled.ExapleRow>-- Development & Production builds </styled.ExapleRow>
            </styled.ExapleContainer>
        );
    }
}
