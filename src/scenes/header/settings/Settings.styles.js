import styled from 'styled-components';

export const CloseWindow = styled.div`
    font-weight: bold; 
    font-size: 40px;  
    width: 30px; 
    align-self: flex-end;
    cursor: pointer;    
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
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.2);
    z-index: 50;
    

        // position: absolute;
        // background-color: white;
        // z-index: 10000;
        // box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
        // border-top: 1px solid whitesmoke ;
        // width: 100%;
        // min-height: 500px;
        // border-radius: 0 5px 5px 5px;
        
        // margin-top: 5%;
        // margin-left: 15%;
        //
        // & main {
        //     padding: 0;
        // }
`;

export const settingsContent = styled.div`
    display: flex;
    font-family: Helvetica;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 15%;
    left: 15%;
    right: 15%;
    bottom: 15%;
    background: white;
    border-radius: 5px;
    padding: 10px;
    width: 70%; 
    min-height: 500px;
    height: auto;
`;

export const TabContainerForComp = styled.nav`
        background-color:gainsboro;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > label {
            text-align: center;
            padding: 50px 20px;
            color: white;
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
