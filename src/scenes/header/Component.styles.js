import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   height:100vh;
   width:100%;
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
    z-index:2;
    background-color: white;
    & > b{
        font-size: 42px;
    }
}
`;
const transition = keyframes`
   0%{ width:1%; }
   100% { width:100%; }
}
`;

export const Line = styled.div`
    height: 5px;
    display: flex;
    flex:auto;
    margin-top: 25px;
    background-color: black;
    animation: ${transition} 700ms 1;
`;

export const Logo = styled.img`
    width: 50px;
    height: 46px;
`;

export const Burger = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
`;
