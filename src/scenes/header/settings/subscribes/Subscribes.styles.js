import styled from 'styled-components';

export const Subscribes = styled.div`
    display: flex;
    flex-direction: column;    
    width: 100%;
    height 100%;
`;

export const NotificationMessage = styled.p`
    font-size: 30px;
    align-self: center;
    font-weight: bold; 
    font-family: Helvetica;
    color: #2E2E2E;
    &:hover {
    color: #08088A;
    cursor: pointer;
`;
export const SearchInput = styled.input`
    width: 97%;
    margin-left: 10px;
    border-radius:5px;
    padding-left:10px;
    outline:none;
    height:34px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
`;

export const TableSubscribers = styled.table`
    margin-left: 10px;
    margin-top: 10px;
    border-radius:5px;
    height:100px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
    overflow: auto;
    font-family: Helvetica;
`;
export const Tr = styled.tr`
    width:100%;
    border-radius:5px;
    height:20px;
    &:nth-child(2n+1){
        background-color:lightgrey;
        color:white;
    }
`;
export const Td = styled.td`
    font-family: Helvetica;
    padding:5px;
    &:nth-child(1){
        border-radius:5px 0 0 5px;
    }  
    &:nth-child(3){
        border-radius:0 5px 5px 0;
    }
`;
export const NullArray = styled.td`
    color: grey;
    text-align: center;
    height:20px;
`;
export const NullTr = styled.tr`
    color: gray;
`;
