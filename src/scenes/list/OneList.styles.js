/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const List = styled.span`
    display: flex;
    flex-direction: column;
    flex: auto;
    width: 100%;
    height: 100vh;
    overflow auto;
`;
export const inputBlock = styled.span`
    display: flex;
    flex-direction: row;
    flex: auto;
    background-color: white;
    margin: 10px 10px 0 10px;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    font-size: 15px;
    cursor: pointer;
    height: auto;
    min-height: 40px;
    align-items: center;
    width:auto;
`;

export const animationButton = styled.div`
    color: lightgrey;
    height: 20px;
    weight:20px;
    &:hover {
        animation: 1.2s ease-in-out 0s normal none infinite running trambling-animation;
    }    
`;


export const iconTrash = styled.img`
    background-image: ${p => p.src};
    margin-top: 5px;
    margin-left: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

export const titleNameOneList = styled.input`
    font-size: 30px;
    font-weight: bold;
    outline: none;
    display:flex;
    width:90%;
    margin-left: 10px;
    text-overflow: ellipsis;
`;

export const searchToDo = styled.input`
    width: 97%;
    font-size: 20px;
    margin-left: 10px;
    outline: none;
    cursor: pointer;
`;

export const blockTask = styled.article`
    display: flex;
    flex:auto;
    flex-direction: column;
    align-content: space-between;
    background-color: white;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    margin: 10px;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 15px;
    cursor: pointer;
    height: 70vh;
    padding: 15px 5px 0 5px;
    >div {
    height: 85vh;
    overflow: auto;
    }
`;

export const addNewTask = styled.input`
    font-size: 24px;
    margin: 10px;

    outline: none;
`;

export const nullTask = styled.div`
    margin: 10px 20px;
    opacity: 0.6;
    font-size: 20px;
`;
