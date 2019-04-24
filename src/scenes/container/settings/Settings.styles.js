import styled from 'styled-components';

export const CloseWindow = styled.div`
    font-weight: bold; 
    font-size: 40px;  
    width: 30px; 
    align-self: flex-end; 
    cursor: pointer; 
`;

export const Background = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex:auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 11;
`;

export const Window = styled.div`
    display: flex;
    flex-direction: column;
    background: ${p => p.theme.backgroundWindow};
    border-radius: 8px;
    padding: 8px;
    width: 70%; 
    height: 70vh;
    font-family: Helvetica;
    @media (max-width: 500px) {
        width: 100%; 
        height: 100vh;
        border-radius: 0;
    }
`;

export const Main = styled.div`
    display: flex;
    flex: auto;
    border: 1px solid whitesmoke;
    border-radius: 8px;
    @media (max-width: 500px) {
        flex-direction: column;
        overflow:auto;
    }
`;

export const TabContainer = styled.nav`
    background-color:${p => p.theme.backgroundButton};
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
    align-content:stretch;
    @media (max-width: 500px) {
        flex-direction: row wrap;
        height:auto;
        min-height:128px;
    }
`;

export const Tab = styled.label`
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    padding: 8px;
    font-size: 20px;
    font-weight: bold;
    background-color: ${p => p.selected && p.theme.activeButton};
    color: ${p => p.selected && p.theme.activeButtonText};
    &:hover{
         background-color: ${p => (p.selected ? p.theme.activeButton : p.theme.hoverButton)};
    }
    &>input{margin-left: -12px;}
`;

export const Content = styled.main`
    overflow:auto;
    display: flex;
    flex:auto;
    height:100%;
    @media (max-width: 500px) {
        overflow:hidden;
        flex: none;
        height:auto;
    }
`;
