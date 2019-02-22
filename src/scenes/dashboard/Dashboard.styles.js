/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ShowButton = styled.div`
    border-radius: 5px;
    background-color: ${props => (props.checked ? 'black' : 'lightgray')};
    color: ${props => (props.checked ? 'white' : 'black')};
    height: 30px;
    width: 100px;
    font-weight: bold;
    &:hover{
        background-color: ${props => (props.checked ? props.theme.color.black : 'gray')};
    }

`;
