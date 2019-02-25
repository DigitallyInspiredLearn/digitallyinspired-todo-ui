import styled from 'styled-components';

export const App = styled.div`
        display: flex;
        flex-direction: column;
        flex: auto;
        height: 100vh;
        overflow auto;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    padding:10px;
    box-shadow: 0 0  15px 0  rgba(0,0,0,0.2);
    z-index:2;
    background-color: white;
    & > b{
        font-size: 42px;
    }
}
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   min-width: 130px;
   input{
         border: none;
         background-color: inherit;
         color: grey;
   }
`;
