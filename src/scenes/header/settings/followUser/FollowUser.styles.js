import styled from 'styled-components';

export const Follow = styled.div`
    display: flex;
    flex-direction: column;
    flex:auto;
`;

export const Label = styled.div`
    font-family: Helvetica;
    align-self: center;
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
`;
export const SearchBlock = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px 10px;
    border-radius:5px;
    
`;
export const Search = styled.main`
    display: flex;
    flex:auto;
    flex-direction:column;
`;
export const SearchInput = styled.input`
    width:100%;
    border-radius:5px 0 0 0 ;
    padding-left:10px;
    outline:none;
    height:34px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
`;

export const UsernameList = styled.div`
    border-radius: 0 0 5px 5px;
    background-color:whitesmoke;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
    color:darkgrey;
`;
export const Ul = styled.div`
    list-style-type: none;
`;

export const Result = styled.p`
    align-self: center;
    margin-top: 10px;
    font-size: 20px;
`;

export const SearchUserBtn = styled.div`
    width: 100px;
    height: 20px;
    text-align: center;
    padding: 8px 32px;
    border: none;
    border-radius: 0  5px 5px 0;
    font: 18px Arial,Helvetica,sans-serif;
    font-weight: bold;
    color: #ffffff;
    background-color: #020303;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
`;
