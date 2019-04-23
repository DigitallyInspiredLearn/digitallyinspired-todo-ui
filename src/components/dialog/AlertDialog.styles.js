import styled from 'styled-components';

export const Dialog = styled.div`
    display: ${p => (p.visible ? 'flex' : 'none')}; 
`;

export const closeWindow = styled.span`    
    font-weight: 400; 
    font-size: 30px;  
    margin: 0px 8px;
    align-self: center;
    cursor: pointer;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
    align-items: center;
    max-width: 600px;
    width: 600px;
`;
