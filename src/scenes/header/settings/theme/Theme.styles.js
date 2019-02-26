import styled from 'styled-components';

export const Theme = styled.div`
    display: flex;
    flex-direction: column;    
    width: 100%;
`;

export const ThemeTitle = styled.div`
    font-size: 30px;
    align-self: center;
    font-weight: bold; 
    color: #2E2E2E;
`;

export const NewTheme = styled.div`
    display: flex;
    flex-direction: row;   
    justify-content: center;
    align-self: center;
    margin: 0px auto;
    width: 90%;
    height: 70%
`;

export const BlockTheme = styled.div`
    display: flex;
    flex-direction: column;  
    max-width: 420px;
    margin: 10px 20px;
`;

export const NewAddingTheme = styled.div`
    display: flex;
    flex-direction: row;   
    align-item: center;
    margin-left: 65px;
    margin-top: 50px;
`;

export const ImageTheme = styled.img`
    width: 95%;
    height: 97%;
    border-radius: 10px;
    margin: 20px 0;
`;

export const NameTheme = styled.span`
    align-self: center;
    font-size: 20px;
    color: #2E2E2E;
    &:hover {
    color: #08088A;
    cursor: pointer;
    }
`;

export const PaintTheme = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px 10px;
`;

export const TextTheme = styled.span`
    font-size: 24px;
    color: #2E2E2E;
    margin-top: 40px;
    margin-left: 10px;
    &:hover {
    color: #08088A;
    cursor: pointer;
    }
`;

