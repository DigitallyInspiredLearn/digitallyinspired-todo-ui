/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const List = styled.span`
    display: flex;
    flex-direction: column;
    flex: auto;
    width: 100%;
    height: 100vh;
    overflow: auto;
`;

export const inputBlock = styled.span`
    display: flex;
    flex-direction: row;
    flex: auto;
    background-color: ${p => p.theme.backgroundList};
    margin: 8px;
    border-radius: 5px;
    padding: 8px;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    font-size: 15px;
    cursor: pointer;
    height: auto;
    min-height: 40px;
    max-height: 40px;
    align-items: center;
    width: auto;
`;

export const animationButton = styled.div`
    color: ${p => p.theme.mainText};

    height: auto;
    weight:20px;
    padding: 2px 3px;
    margin:2px;

    &:hover {
         box-shadow: 3px 3px  8px 0  rgba(0,0,0,0.1);
         border-radius: 4px;
         background-color:white;
    }    
`;

export const iconTrash = styled.img`
    margin-top: -2px;
    margin-left: 8px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: ${p => p.theme.mainText}
`;

export const titleNameOneList = styled.input`
    font-size: 30px;
    font-weight: bold;
    outline: none;
    display: flex;
    width: 97%;
    margin-left: 16px;
    text-overflow: ellipsis;
    color: ${p => p.theme.mainText}
`;

export const inputDiv = styled.main`
    display: flex;
    flex-direction: row;
    padding: 8px;
    border-radius: 5px;
    box-shadow: 0 0  10px 0  rgba(0,0,0,0.2);
    height: 40px;
    align-items: center;
    width: auto;
`;

export const searchToDo = styled.input`
    display: flex;
    flex: auto;
    outline: none;
    font-size: 18px;
    padding-left: 8px;
    cursor: pointer;
    background-color: ${p => p.theme.backgroundList};
`;

export const blockTask = styled.article`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    background-color:  ${p => p.theme.backgroundList};
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    margin: 0px 8px;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    height: 78vh;
    padding: 8px;
    & > div {
        height: 85vh;
        overflow: auto;
        margin: 8px 0px;
    }
`;

export const addNewTask = styled.input`
    font-size: 20px;
    margin: 8px;
    outline: none;
`;

export const nullTask = styled.div`
    margin: 10px 20px;
    opacity: 0.6;
    font-size: 20px;
`;
