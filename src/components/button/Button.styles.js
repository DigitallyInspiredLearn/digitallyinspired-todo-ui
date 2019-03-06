import styled from 'styled-components';

export default styled.button`
        align-self: flex-end;   
        width: 115px;
        height: 30px;
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
