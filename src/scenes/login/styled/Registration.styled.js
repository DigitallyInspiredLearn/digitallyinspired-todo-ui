import styled from 'styled-components';

export const RegistrationStyled = styled.div`
    margin-top: 20%;
    margin-left: 35%;
    display: flex;
    flex-direction: column;
    opacity:0;
    transition: 500ms;
    animation: show 500ms 1;
    animation-fill-mode: forwards;
    animation-delay: 0s;
    
    @keyframes show {
    0%{
        opacity:0;
    }


    100% {
        opacity:1;
    }
}

    @media (min-width: 500px) {
            margin-top: 0;
    }
    
    @media (min-width: 700px) {
            width: 30%;
}
`;

export const RegistrationNavigationForm = styled.nav`
     margin-top: 20%;
     width: 98%;
 `;

export const RegistrationTitle = styled.h2`
     width: auto;
     argin:15px auto;
     cursor: default;
 `;

export const EnterRegistrationInform = styled.div`
    position: relative;
    border-bottom: 1px solid gray;
    
    &:before {
        position: absolute;
        z-index:1;
        display: flex;
        bottom: 0;
        content: "";
        opacity: 0.8;
        border-bottom: 2px solid grey;
        transition:  width 0.2s ease-in-out;
        width: 0;
    }
    &:hover:before {
    width: 100%;
    }
`;

export const RegistrationInput = styled.input`
    outline:none;
    padding: 5px;
    width: 100%;
    margin: 10px;
 `;

export const RegistrationParagraph = styled.p`
    outline:none;
    padding: 5px;
    width: 100%;
    margin: 10px;
    
    &:hover {
         background-color: black;
    }
    
    &:disabled {
        background-color: darkgrey;
        cursor: pointer;
    }
    
    text-align: center;
    font-size: 15px;
    color: white;
    background: darkgrey;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
 `;

export const RegistrationForm = styled.form`
    margin: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background: white;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    border-radius: 5px;
`;

export const RegistrationHref = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0  5px ;
    padding: 15px;
    
     background: white;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    border-radius: 5px;
`;

export const NavigationButton = styled.div`
    color: black;
    background-color: whitesmoke;
    margin-top: 0;
    width: 100%;
    padding: 5px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        color: white;
        background: black;
    }
`;
