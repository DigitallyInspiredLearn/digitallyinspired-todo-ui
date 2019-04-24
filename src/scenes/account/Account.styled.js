import styled from 'styled-components';

export const Content = styled.div`
    display:flex;
    justify-content:center; 
    overflow:auto;
    height:80vh;
    opacity:0;
    transition: 500ms;
    animation: show 500ms 1;
    animation-fill-mode: forwards;
    animation-delay: 0s;
    @keyframes show {
        0%{ opacity:0; }
        100% { opacity:1; }
    }
    @media (max-width: 300px) {
         height:60vh;
    }
`;

export const NavigationForm = styled.nav`
    width:100%;
    @media (min-width: 500px) {
         width:40%;
    }
 `;

export const Form = styled.form`
    margin: 24px 8px 8px 8px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    background: ${p => p.theme.backgroundWindow};
    box-shadow: 0 0  42px 0  rgba(0,0,0,0.2);
    border-radius: 8px;
`;

export const Title = styled.h2`
     width: auto;
     margin:8px auto;
     color: ${p => p.theme.textHeader};
 `;

export const EnterInformation = styled.div`
    position: relative;
    width:100%;
    background: white;
    border-bottom: 1px solid lightgrey;
    &:before {
        position: absolute;
        z-index:1;
        bottom: 0;
        content: "";
        border-bottom: 2px solid lightgrey;
        transition:  width 0.2s ease-in-out;
        width: 0;
    }
    &:hover:before { width: 100%; }
    margin: 8px 0;
    display:flex;
    justify-content:center;
`;

export const Input = styled.input`
    outline:none;
    padding: 8px;
    width:95%;
 `;

export const Error = styled.div`
    display: flex;
    justify-content: center;
    text-align:center;
    font-size: 12px;
    color: red;
    margin-top: -6px;
 `;

export const SuccessButton = styled.p`
    outline:none;
    margin: 8px;
    &:hover {
         background-color: ${p => p.theme.hoverButton};
         color: white;
    }
    &:disabled {
        background-color: ${p => p.theme.activeButton};
        cursor: pointer;
    }
    text-align: center;
    font-size: 16px;
    color: ${p => p.theme.activeButton};
    background: ${p => p.theme.backgroundButton};
    padding: 8px;
    border-radius: 8px;
    border: none;
 `;

export const HrefButton = styled.p`
    margin: 8px;
    padding: 16px;
    background: ${p => p.theme.hrefButton};
    box-shadow: 0 0  42px 0  rgba(0,0,0,0.2);
    border-radius: 8px;
    font-size: 16px;
`;
