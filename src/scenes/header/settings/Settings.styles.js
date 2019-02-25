import styled from 'styled-components';

export const SettingsWindow = styled.div`
    position: absolute;
    background-color: white;
    z-index: 10000;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    border-top: 1px solid whitesmoke ;
    width: 95%;
    height: auto;
    max-width: 1190px;
    margin: 10px;
    border-radius: 0 5px 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &:before{
        content: "Settings";
        color: white;
        position: absolute;
        top: -55px;
        background-color: black;
        font-size: 30px;
        font-weight: bold;
        padding: 10px;
        border-radius: 5px 5px 0 0 ;
        width: 120px;
    }
`;

export const TabContainer = styled.nav`
        border-bottom: 2px solid gainsboro;
        width: 100%;
        padding: 10px;
        justify-content: start;
`;

export const Tab = styled.div`
        border-bottom: 2px solid gainsboro;
        width: 100%;
        padding: 10px;
        justify-content: start;
`;

export const SettingsWindowForComp = styled.div`
        position: absolute;
        background-color: white;
        z-index: 10000;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
        border-top: 1px solid whitesmoke ;
        width: 100%;
        max-width: 1190px;
        min-height: 200px;
        height: auto;
        border-radius: 0 5px 5px 5px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: -5px;

        & main {
            padding: 0;
        }
`;

export const TabContainerForComp = styled.nav`
        background-color:gainsboro;
        display: flex;
        flex-direction: column;

        & > label {
            padding: 20px 16px;
            color: white;
            margin: 0;
            border: 0;
            font-size: 20px;
            font-weight: bold;
            outline: none;
        }

        & > label:hover{
            background-color: black;
        }
`;
