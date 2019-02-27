import styled from 'styled-components';

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const DeleteProfile = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const DeleteButton = styled.button`
        align-self: flex-end;
        width: 115px;
        outline: none;
        border: none;
        border-radius:6px;
        cursor:pointer;
        background-color: grey;
        color:#ffffff;
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:6px 8px;
        &:hover{
            background-color: black;
        }
`;

export const Username = styled.p`
        font-size: 20px;
        align-self: center;
        margin-left: 10px;
        font-weight: bold;
        color:gray;
        cursor:default;
`;

export const Email = styled.p`
        font-size: 20px;
        align-self: center;
        margin-top: -10px;
        margin-left: 10px;
        color: darkgray;
        font-weight: bold;
        cursor:default;
`;

export const Account = styled.p`
        margin-top: 30px;
        margin-left: 10px;
        margin-bottom: 0;
        font-weight: bold;
        color:gray;
        cursor: default;
`;

export const EditProfile = styled.div`
        display: flex;
        flex-direction: center;
        height: auto;
        width: 100%;
        font-weight: bold;
`;

export const ProfileValues = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        width: 35%;
        height: auto;
        justify-content: flex-start;
        font-weight: bold;
        color:darkgray;
        cursor: default;
        & p {
            margin-left: 5%;
        }
`;

export const ProfileInput = styled.div`
        display: flex;
        flex-direction: column;
        width: 65%;
        font-weight: bold;

        & > div {
            width: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
           
        }

        & input {
            border-bottom: 1px solid gray !important;
            width: 40%;
            height: 30px;
            margin-left: 5%;
            margin-top: 30px;
            cursor:pointer;
            outline: none;
        }
        
        
`;

export const SaveButton = styled.button`
        background-color: gray;
        -moz-border-radius:10px;
        -webkit-border-radius:10px;
        border-radius:6px;
        border: none;
        align-self: flex-end;
        cursor:pointer;
        color:white;
        font-size: 15px;
        font-weight:bold;
        width: 6%;
        height: 8%;
        margin-left: 25%;
        margin-top: 10px;
        margin-bottom: 5px;
        text-decoration:none;
        outline: none;

    &:hover{
        background-color:black;
    }

    &:active{
        position:relative;
        top: 1px;
    }
`;
