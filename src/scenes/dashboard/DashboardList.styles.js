/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const App = styled.div`
    display: flex;
    flex-direction: column;
    flex: auto;
    width: 100%;
    height: 100vh;
    overflow auto;
`;
export const SearchAndChecked = styled.div`
    display: flex;
    flex-direction:row;
    height: auto;
    margin: 10px;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-direction: column-reverse; min-height: 60px;
    }
`;

export const SearchDiv = styled.div`
    display: flex;
    flex-direction:row;
    flex: auto;
    background-color: white;
    height: auto;
    min-height:15px;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    border-radius: 5px;
    padding: 5px;
    align-items: center;
`;

export const Search = styled.input`
    display: flex;
    flex: auto;
    outline: none;
    font-size: 1.1em;
}
`;

export const IconSearch = styled.img`
    width:20px;
    height:20px;
    color:grey;
`;
export const CheckboxDiv = styled.div`
    display: flex;
    @media (max-width: 600px) {
        margin-bottom: 10px;
    }
`;

export const ShowButton = styled.div`
    border-radius: 5px;
    background-color: ${props => (props.checked ? 'black' : 'lightgray')};
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    color: ${props => (props.checked ? 'white' : 'black')};
    height: auto;
    min-height:15px;
    font-weight: bold;
    &:hover{
        background-color: ${props => (props.checked ? props.theme.color.black : 'gray')};
    }
    width: auto;
    padding: 5px;
    @media (max-width: 600px) {
        flex: 1;
        text-align: center;
    }
`;

export const DashboardList = styled.main`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: flex-start;
    flex: auto;
    margin:0 10px;
    height: 100vh;
    @media (max-width: 600px) {
        flex-flow: column nowrap;
    }
`;

export const NullLenghtDashboards = styled.p`
    color: darkgray;
    margin: auto;
`;
