/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const closeWindow = styled.span`    
    font-weight: bold; 
    font-size: 40px;  
    width: 30px; 
    align-self: flex-end;
    cursor: pointer;
`;

export const searchTask = styled.div`
    background-color: white;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    margin: 5px;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 15px;
    cursor: pointer;
    width: 97%;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
`;

export const showPopup = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
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
    background: white;
    border-radius: 5px;
    padding: 10px;
    width: 70%; 
`;

export const title = styled.div`
    display: flex;
    align-self: center;
    margin-top: 10px;
    font-size: 32px;
`;

export const searchUser = styled.input`
    width: 90%;
    outline: none;
    height: 50px;
    font-size: 20px;
`;

export const btnSearch = styled.div`
    border-radius: 5px;
    background-color: inherit;
    color: lightgrey;
    width: auto;
    padding-right: 15px;
    padding-top: 10px;
    margin-left: 50px;
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
    margin: 20px;
    text-decoration:none;
    text-align:center;
    padding: 11px 32px;
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
`;

export const users = styled.div`
    display: ${props => (props.search === '' ? 'none' : 'flex')};
    position: absolute;
    flex-direction: column;
    height: auto;
    z-index: 60;
    border-radius: 5px;
    top: 170px;
    left: 18px;
    right: 18px;
    padding: 10px;
    width: 94%;
    background: white;
    opacity: 0.9;
`;
