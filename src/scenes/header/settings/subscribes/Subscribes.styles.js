import styled from 'styled-components';

export const Subscribes = styled.div`
    display: flex;
    flex-direction: column;    
    width: 100%;
    height 100%;
`;
export const Title = styled.h2`
    font-size: 30px;
    align-self: center;
    font-weight: bold; 
    color: #2E2E2E;
`;
export const NotificationMessage = styled.p`
    font-size: 24px;
    color: #2E2E2E;
    margin-top: 40px;
    margin-left: 10px;
    &:hover {
    color: #08088A;
    cursor: pointer;
`;
export const SearchInput = styled.input`
    width:95%;
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
    width:96%;
    height:200px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
    overflow: auto;
`;
export const Tr = styled.tr`
    width:100%;
    border-radius:5px;
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
