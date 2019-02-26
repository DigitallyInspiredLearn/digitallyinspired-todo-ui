import styled from 'styled-components';

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    width: 363%;
    height: 100%;

    & h3{
        margin: 2% auto;
        font-size: 20px;
        font-family: 'Arial';
    }
`;

export const DeleteProfile = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

export const DeleteButton = styled.button`
        width: 115px;
        outline: none;
        border: none;
        margin-left: -40%
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
        background-color: #fe1a00;
        -moz-border-radius: 6px;
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

export const Username = styled.p`
        font-size: 15px;
        margin-left: 10px;
`;

export const Email = styled.p`
        margin-top: -10px;
        margin-left: 10px;
        color: rgb(46, 137, 255);
`;

export const Account = styled.p`
        margin-left: 10px;
        margin-bottom: 0;
`;

export const ProfileValues = styled.div`
        display: flex;
        flex-direction: column;
        width: 35%;
        height: auto;
        justify-content: flex-start;

        & p {
            margin-left: 5%;
        }
`;

export const ProfileInput = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 65%;

        & > div {
            width: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: -8px;
        }

        & input {
            border: 1px solid black;
            width: 40%;
            height: 30px;
            margin-left: 5%;
            margin-top: 17px;
        }
`;

export const SaveButton = styled.button`
        background-color:#000000;
        -moz-border-radius:10px;
        -webkit-border-radius:10px;
        border-radius:6px;
        border: none;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-size: 15px;
        font-weight:bold;
        width: 5%;
        height: 8%;
        margin-left: 25%;
        margin-top: 10px;
        margin-bottom: 5px;
        text-decoration:none;
        outline: none;

    &:hover{
        background-color:#808080;
    }

    &:active{
        position:relative;
        top: 1px;
    }
`;

export const EditProfile = styled.div`
        display: flex;
        flex-direction: row;
        border-top: 1px solid gray;
        height: 65%;
        width: 100%;
`;
