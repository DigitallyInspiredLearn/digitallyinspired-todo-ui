/* eslint-disable template-curly-spacing */
import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100vh;
   background-color: ${p => p.theme.background};
   input{
        border: none;
        background-color: inherit;
        color: grey;
   }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 8px;
    box-shadow: 0 0 16px 0 rgba(0,0,0,0.2);
    z-index:1;
    background-color: ${ p => p.theme.backgroundHeader };
    & > b{
        font-size: 40px;
        color: ${ p => p.theme.textHeader };
    }
`;

export const Logo = styled.svg`
    width: 48px;
    height: 48px;
    fill: ${ p => p.theme.textHeader };
`;

export const Line = styled.div`
    height: 5px;
    display: flex;
    flex: auto;
    background-color: ${ p => p.theme.textHeader };
`;

export const Icon = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`;
