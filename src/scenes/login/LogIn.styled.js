import styled from 'styled-components';

export const Styled = styled.div`
    margin-top: 20%;
    margin-left: 35%;
    display: flex;
    flex-direction: column;
    opacity:0;
    transition: 500ms;
    animation: show 500ms 1;
    animation-fill-mode: forwards;
    animation-delay: 0s;
    cursor: default;
    
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

export const NavigationForm = styled.nav`
     margin-bottom: 20%;
     width: 98%;
 `;

export const Title = styled.h2`
     width: auto;
     margin:15px auto;
     cursor: default;
     color: ${p => p.theme.textHeader};
 `;

export const EnterInformation = styled.div`
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

export const Input = styled.input`
    outline:none;
    padding: 5px;
    width: 90%;
    margin: 10px;
 `;

export const SuccessButton = styled.p`
    outline:none;
    width: 90%;
    margin: 10px;
    margin-top: 20px;
    
    &:hover {
         background-color: ${p => p.theme.hoverButton};
         color: white;
    }
    
    &:disabled {
        background-color: ${p => p.theme.activeButton};
        cursor: pointer;
    }
    
    text-align: center;
    font-size: 15px;
    color: activeButton;
    background: ${p => p.theme.backgroundButton};
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
 `;

export const Form = styled.form`
    margin: 5px;
    margin-top: 50px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${p => p.theme.backgroundWindow};
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    border-radius: 5px;
`;

export const HrefButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0  5px ;
    padding: 15px;
    background: ${p => p.theme.hrefButton};
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    border-radius: 5px;
`;

export const NavigationButton = styled.button`
    color: black;
    background-color: ${p => p.theme.navButton};
    margin-top: 0;
    width: 100%;
    padding: 5px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        color: white;
        background: ${p => p.theme.activeButton};
    }
`;
