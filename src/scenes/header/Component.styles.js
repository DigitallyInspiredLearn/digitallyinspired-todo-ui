import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   height:100vh;
   width:100%;
   background-color: ${p => p.theme.background};
   input{
         border: none;
         background-color: inherit;
         color: grey;
   }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    padding:10px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
    z-index:1;
    background-color: ${ p => p.theme.backgroundHeader };
    & > b{
        font-size: 42px;
        color: ${ p => p.theme.textHeader };
    }
`;

export const Logo = styled.svg`
    width: 50px;
    height: 46px;
    fill: ${ p => p.theme.textHeader };
`;

const transition = keyframes`
   0%{ width:1%; }
   100% { width:100%; }
`;

export const Line = styled.div`
    height: 5px;
    display: flex;
    flex:auto;
    margin-top: 25px;
    background-color: ${ p => p.theme.textHeader };
    animation: ${transition} 700ms 1;
`;

export const Burger = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
`;

export const Logout = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
`;
