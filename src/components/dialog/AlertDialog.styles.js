import styled from 'styled-components';

export const Dialog = styled.div`
    display: ${p => (p.visible ? 'flex' : 'none')};  
`;

export const closeWindow = styled.span`    
    font-weight: bold; 
    font-size: 30px;  
    width: 30px; 
    align-self: center;
    cursor: pointer;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
    align-items: center; 
`;
