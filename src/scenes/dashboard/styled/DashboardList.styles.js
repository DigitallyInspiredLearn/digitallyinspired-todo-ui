/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction:column;
`;

export const SearchAndChecked = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
    }
`;

export const SearchDiv = styled.div`
    display: flex;
    flex-direction:row;
    align-item: center;
    flex: auto;
    background-color: white;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    border-radius: 5px;
    padding-left: 7px;
    padding-top: 2px;
    justify-content: space-between;
    margin-left: 10px;
    @media (max-width: 600px) {
        margin-right: 3px;
        margin-left: 3px;
    }
`;

export const Search = styled.input`
    width: 90%;
    outline: none;
`;

export const CheckboxDiv = styled.div`
    display: flex;
    flex-direction:row;
    align-item: stretch;
    width: auto;
    
    @media (max-width: 600px) {
        margin-left: 3px;
        margin-bottom: 10px;
    }
`;

export const ShowButton = styled.div`
    border-radius: 5px;
    background-color: ${props => (props.checked ? 'black' : 'lightgray')};
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    color: ${props => (props.checked ? 'white' : 'black')};
    height: 20px;
    width: 100px;
    font-weight: bold;
    &:hover{
        background-color: ${props => (props.checked ? props.theme.color.black : 'gray')};
    }
    width: auto;
    padding: 7px;
    margin-right: 5px;
    @media (max-width: 600px) {
        flex: 1;
        text-align: center;
        height: auto;
    }
`;

export const DashboardList = styled.main`
    height: auto;
    display: flex;
    flex-flow: row wrap;
    padding-top: 30px;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-flow: column nowrap; 
    }
`;

export const NullLenghtDashboards = styled.p`
    color: darkgray;
    margin: auto;
`;