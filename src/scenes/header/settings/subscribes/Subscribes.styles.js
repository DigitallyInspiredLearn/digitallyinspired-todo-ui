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
    width:90%;
    margin-left: 10px;
    border-radius:5px 0 0 0 ;
    padding-left:10px;
    outline:none;
    height:34px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2);
`;
