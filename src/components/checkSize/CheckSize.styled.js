import styled from 'styled-components';

export const Container = styled.div`
 position: relative;
 padding-top: 12px;
 padding-right:750px;
 
`;

export const Button = styled.button`
    background-color: ${ p => p.theme.backgroundButton };
	border: none;
    color:black;
    padding: 8px 4px;
    border-radius:5px;
	font-size: 14px;
    width: 80px;
	cursor:pointer;
	outline: none !important;
    &:hover, &:active{
        background-color: ${ p => p.theme.hoverButton }; 
    }
`;
export const Ul = styled.div`
    position:absolute;
    top:-105px;
	text-size: 20px;
	cursor:pointer;
    width: 80px;
    display: ${p => (p.visible ? 'block' : 'none')}
`;

export const Li = styled.div`
    padding:8px;
	text-size: 20px;
	cursor:pointer;
    &:hover {
      background-color: ${ p => p.theme.hoverButton };
    }
    background-color:${p => (p.checked ? 'black' : p.theme.backgroundButton)}
    color:${p => (p.checked ? 'white' : 'inherit')}
`;
