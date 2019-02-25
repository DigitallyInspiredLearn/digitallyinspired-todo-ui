import styled from 'styled-components';

export const CloseWindow = styled.div`
    font-size: 40px;
    top: -15%;
    left: 98%;
    position: absolute;
`;

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
        margin-top: -25px;

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

export const TabLabel = styled.label`
            background-color: ${p => p.selected && 'black'};
            padding: 20px 16px;
            color: white;
            margin: 0;
            border: 0;
            font-size: 20px;
            font-weight: bold;
            outline: none;

            &:hover{
            background-color: black;
        }
`;

export const MobileContent = styled.div`
    background:  rgba(241,241,241,0.22) ;
    display: flex;
    flex-direction: column;
    box-shadow:
            inset rgba(0,0,0,.6) 0 -3px 8px,
            inset rgba(252,255,255,.7) 0 3px 8px,
            rgba(0,0,0,.8) 0 3px 8px -3px;
    border-radius: 0 0 5px 5px;
`;

export const MobileToggle = styled.img`
    width: 15px;
    height: 15px;
    position: absolute;
    right: 10px;
    align-self: center;
`;
