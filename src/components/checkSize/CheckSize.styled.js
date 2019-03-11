import styled from 'styled-components';

export const Container = styled.div`
 position: relative;
 
`;

export const Button = styled.button`
    background-color: lightgrey;
    color:black;
    padding: 8px 4px;
    border-radius:5px;
    width: 80px;
    &:hover, &:active{
        border-radius:0px 0 5px 5px;
        background-color: gray; 
    }
`;
export const Ul = styled.div`
    position:absolute;
    top:-105px;
    width: 80px;
    border-radius: 5px 5px 0 0;
    background-color: lightgray;
    display: ${p => (p.visible ? 'block' : 'none')}
`;

export const Li = styled.div`
    padding:8px;
    &:hover {
      background-color: gray;
    }
    background-color:${p => (p.checked ? 'black' : 'inherit')};
    color:${p => (p.checked ? 'white' : 'inherit')}
`;
