/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const DeleteButton = styled.button`
        width: 115px;
        margin-right: 30px;
        outline: none;
        border: none;
        -moz-box-shadow:inset 0px 1px 0px 0px #f29c93;
        -webkit-box-shadow:inset 0px 1px 0px 0px #f29c93;
        box-shadow:inset 0px 1px 0px 0px #f29c93;
        background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #fe1a00), color-stop(1, #ce0100));
        background:-moz-linear-gradient(top, #fe1a00 5%, #ce0100 100%);
        background:-webkit-linear-gradient(top, #fe1a00 5%, #ce0100 100%);
        background:-o-linear-gradient(top, #fe1a00 5%, #ce0100 100%);
        background:-ms-linear-gradient(top, #fe1a00 5%, #ce0100 100%);
        background:linear-gradient(to bottom, #fe1a00 5%, #ce0100 100%);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fe1a00', endColorstr='#ce0100',GradientType=0);
        background-color:#fe1a00;
        -moz-border-radius:6px;
        -webkit-border-radius:6px;
        border-radius:6px;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:6px 8px;
        text-decoration:none;
        text-shadow:0px 1px 0px #b23e35;
    &:hover{
        background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ce0100), color-stop(1, #fe1a00));
        background:-moz-linear-gradient(top, #ce0100 5%, #fe1a00 100%);
        background:-webkit-linear-gradient(top, #ce0100 5%, #fe1a00 100%);
        background:-o-linear-gradient(top, #ce0100 5%, #fe1a00 100%);
        background:-ms-linear-gradient(top, #ce0100 5%, #fe1a00 100%);
        background:linear-gradient(to bottom, #ce0100 5%, #fe1a00 100%);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ce0100', endColorstr='#fe1a00',GradientType=0);
        background-color:#ce0100;
    }

    &:active{
        position:relative;
        top:1px;
    }
`;
