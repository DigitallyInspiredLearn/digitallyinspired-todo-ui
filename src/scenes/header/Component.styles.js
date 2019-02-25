import styled from 'styled-components';

export const App = styled.div`
        display: flex;
        flex-direction: column;
        align-content: center;
`;

export const Header = styled.header`
        display: flex;
        height: 60px;
        width: auto;
        flex-direction: row;
        padding:30px 0;
        margin-bottom: 20px;

    & > b{
        font-size: 42px;
    }
    & > div{
        margin-top: 0.8%;
    }
`;