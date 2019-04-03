import styled from 'styled-components';

export const Subscribes = styled.div`
    display: flex;
    flex-direction: column;    
    width: 100%;
    height: 100%;
`;

export const Title = styled.div`
    font-family: Helvetica;
    align-self: center;
    margin: 8px 0px 16px;
    font-size: 30px;
    font-weight: bold;
    color: ${p => p.theme.mainText};
`;

export const SearchInput = styled.input`
    width: 97%;
    margin-left: 10px;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
    height: 32px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
`;

export const TableSubscribers = styled.table`
    margin: 8px 12px 8px 8px;
    border-radius: 5px;
    height: 100px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
    overflow: auto;
    font-family: Helvetica;
`;

export const Tr = styled.tr`
    width:100%;
    border-radius:5px;
    height:20px;
    &:nth-child(2n+1){
        background-color:${p => p.theme.background};
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
    padding: 8px;
`;
