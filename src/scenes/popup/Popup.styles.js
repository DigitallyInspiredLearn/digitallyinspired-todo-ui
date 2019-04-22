/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import _AlertIcon from '@material-ui/icons/Share';

export const closeWindow = styled.span`    
    font-weight: bold; 
    font-size: 40px;  
    width: 30px; 
    align-self: flex-end;
    cursor: pointer;
`;

export const AlertIcon = styled(_AlertIcon)`
    margin: 16px 24px 16px 24px;
    color: grey;
    width: 20px !important;
    height: 20px !important;
`;


export const searchTask = styled.div`
    display: flex;
    background-color: ${p => p.theme.backgroundList};
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    margin: 8px;
    border-radius: 5px;
    padding-left: 16px;
    font-size: 15px;
    cursor: pointer;
    width: 97%;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    opacity: 0.8;
`;

export const showPopup = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    background-color: rgba(0,0,0, 0.2);
    z-index: 55555;
    font-family: Helvetica;
`;

export const popupContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 30%;
    left: 15%;
    right: 15%;
    background: ${p => p.theme.backgroundList};
    border-radius: 5px;
    padding: 8px;
    width: 70%; 
    z-index: 999999 !important;
`;

export const title = styled.div`
    display: flex;
    align-self: center;
    margin-top: 8px;
    font-size: 32px;
    color: ${p => p.theme.mainText}
`;

export const searchUser = styled.input`
    width: 93%;
    outline: none;
    height: 50px;
    font-size: 20px;
    color: ${p => p.theme.mainText}
`;

export const btnSearch = styled.div`
    border-radius: 5px;
    background-color: ${p => p.theme.backgroundList};
    color: ${p => p.theme.mainText};
    width: 2%;
    padding-right: 16px;
    padding-top: 8px;
`;

export const buttonBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: flex-start;
    width: auto;
    height: 50px;
    margin-top: 40px;
`;

export const buttonCloSeOk = styled.button`
    width: 150px;
    height: 40px;
    margin: 16px;
    text-decoration:none;
    text-align:center;
    border:none;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius: 4px;
    font:18px Arial, Helvetica, sans-serif;
    font-weight:bold;
    color:#ffffff;
    background-color:#020303;
    background-image: -moz-linear-gradient(top, #020303 0%, #0d0f0f 100%);
    background-image: -webkit-linear-gradient(top, #020303 0%, #0d0f0f 100%);
    background-image: -o-linear-gradient(top, #020303 0%, #0d0f0f 100%);
    background-image: -ms-linear-gradient(top, #020303 0% ,#0d0f0f 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0d0f0f', endColorstr='#0d0f0f',GradientType=0 );
    -webkit-box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
    -moz-box-shadow: 0px 0px 2px #bababa,  inset 0px 0px 1px #ffffff;
    box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
    outline: none;
    color: ${p => p.theme.mainText}
`;

export const users = styled.div`
    display: ${props => ((props.search === '' || props.foundUser === true) ? 'none' : 'flex')};
    flex: auto;
    cursor: pointer;
    overflow: auto;
    position: absolute;
    flex-direction: column;
    height: 50px;
    z-index: 60;
    top: 140px;
    left: 16px;
    right: 16px;
    padding: 8px;
    background: ${p => p.theme.backgroundList};
    opacity: 0.9;
    border: rgb(128, 128, 128, 0.1) solid 1px;
    border-radius: 8px;
`;
