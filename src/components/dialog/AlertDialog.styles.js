import styled from 'styled-components';
import _DialogContentText from '@material-ui/core/DialogContentText'


export const Dialog = styled.div`
    display: ${p => p.visible ? 'flex' : 'none'}; 
`;
export const DialogContentText = styled(_DialogContentText)`
    display: flex;
    flex: auto;
    padding: 16px 16px 32px 16px;
    border: rgb(128, 128, 128, 0.1) solid 1px;
    border-radius: 8px;
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