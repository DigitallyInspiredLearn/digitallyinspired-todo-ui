import styled from 'styled-components';

export const Theme = styled.div`
    display: flex;   
    width: 100%;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ColumnTitle = styled.div`
    font-size: 30px;
    align-self: center;
    font-weight: bold; 
    color: #2E2E2E;
    border-bottom: 1px solid grey; 
`;

export const Row = styled.div`
    display: flex;

    justify-content: space-between;
`;

export const Text = styled.p`
    font-size: 14px;
    color: #2E2E2E;

`;

export const Input = styled.input`
    border: 1px solid black !important;
    height: 32px;
    width: 150px;
`;

export const ThemeTitle = styled.div`
    font-size: 30px;
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
    max-width: 380px;
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

export const ApplyButton = styled.button`
    width: 150px;
    
`;
