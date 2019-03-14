import styled from 'styled-components';

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
export const Avatar = styled.img`
    position: absolute;
    left: 200px;
    bottom: 350px;
    border-radius: 50%;
    
`;
export const AvatarInput = styled.input`
   display: none
`;
export const UploadButton = styled.input`
    position: absolute;
    left: 280px;
    bottom: 320px; 
    width: 40px;
    outline: none;
    cursor:pointer;
    padding:6px 8px;
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
        background-color: ${p => p.theme.backgroundButton};
        color:  ${p => p.theme.buttonText};
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:6px 8px;
        &:hover{
            background-color: ${p => p.theme.hoverButton};
        }
`;

export const Username = styled.p`
        font-size: 20px;
        align-self: center;
        margin-left: 10px;
        font-weight: bold;
        color:${p => p.theme.mainText};
        cursor:default;
`;

export const Email = styled.p`
        font-size: 20px;
        align-self: center;
        margin-top: -10px;
        margin-left: 10px;
        color: ${p => p.theme.mainText};
        font-weight: bold;
        cursor:default;
`;

export const Account = styled.p`
        margin-top: 30px;
        margin-left: 10px;
        margin-bottom: 0;
        font-weight: bold;
        color:${p => p.theme.mainText};
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
        color:${p => p.theme.mainText};
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
        background-color: ${p => p.theme.backgroundButton};
        border-radius:5px;
        border: none;
        align-self: flex-end;
        cursor: pointer;
        color: ${p => p.theme.buttonText};
        font-size: 15px;
        font-weight: bold;
        width: 6%;
        height: 8%;
        margin-left: 25%;
        margin-top: 10px;
        margin-bottom: 5px;
        text-decoration:none;
        outline: none;

    &:hover{
        background-color:${p => p.theme.hoverButton};
    }

    &:active{
        position:relative;
        top: 1px;
    }
`;
