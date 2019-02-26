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

export const BlockTheme = styled.div`
    display: flex;
    flex-direction: column;  
    width: 50%;
    padding: 10px;  
    margin-left: 20px;
`;

export const NewTheme = styled.div`
    display: flex;
    flex-direction: row;   
    align-self: center;
    margin-top: 20px;
    width: 100%;
    height: 60%
`;

export const NewAddingTheme = styled.div`
    display: flex;
    flex-direction: row;   
    align-item: center;
    margin-left: 30px;
    margin-top: 50px;
`;

export const ImageTheme = styled.img`
    width: 95%;
    height: 95%;
    border-radius: 10px;
    margin: 20px 10px;
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

