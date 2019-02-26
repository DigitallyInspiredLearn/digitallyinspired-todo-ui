/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const list = styled.div`
    display: flex;
    width: 97%;
    min-height: 100vh;
    margin-left: 5px;
    margin-top: 50px;
    height: auto;
    flex-direction: column;
`;

export const inputBlock = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    height: auto;
    background-color: white;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    margin: 5px;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 15px;
    cursor: pointer;
`;

export const animationButton = styled.div`
    color: lightgrey;
    height: 20px;
    weight:20px;
    margin-top: 10px;
    margin-right: 10px;
    @keyframes trambling-animation {
    0%, 50%, 100% {
        transform: rotate(0deg);
    }
    10%, 30% {
        transform: rotate(-10deg);
    }
    20%, 40% {
        transform: rotate(10deg);
    }}
    &:hover {
        animation: 1.2s ease-in-out 0s normal none infinite running trambling-animation;
    }    
`;

export const iconTrash = styled.img`
    margin-top: 5px;
    margin-left: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

export const titleNameOneList = styled.input`
    width: 87%;
    font-size: 30px;
    font-weight: bold;
    float:left;
    outline: none;
    margin-right: 50%;
    cursor: pointer;
    padding-top: 5px;
    margin-top: 5px;
    margin-left: 10px;
`;

export const searchToDo = styled.input`
    width: 90%;
    margin-top: 5px;
    font-size: 20px;
    margin-left: 10px;
    outline: none;
    cursor: pointer;
`;

export const blockTask = styled.article`
    display: flex;
    background-color: white;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    margin: 5px;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 15px;
    cursor: pointer;
    height: 65vh;
    width: 101.2%;
    flex-direction: column;
    align-content: space-between;
    padding: 15px 5px 0 5px;
    >div {
    height: 85vh;
    overflow: auto;
    }
`;

export const addNewTask = styled.input`
    font-size: 24px;
    margin-left: 20px;
    margin-bottom: 10px;
    outline: none;
`;

export const nullTask = styled.div`
    margin: 10px 20px;
    opacity: 0.6;
    font-size: 20px;
`;
