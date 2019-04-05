import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const Button = styled.button`
	border: none;
	background-color: ${p => (p.checked ? p.theme.activeButton : p.theme.backgroundButton)};
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.1);
    color: ${p => (p.checked ? p.theme.activeButtonText : p.theme.buttonText)};
    border-radius:5px;
	font-size: 14px;
	cursor:pointer;
	outline: none !important;
    &:hover, &:active{
        background-color: ${p => p.theme.hoverButton}; 
    }
    ${p => p.stylesButton}
`;
export const Ul = styled.div`
    ${p => p.stylesContainer}  
    position: absolute;
	font-size: 20px;
	cursor: pointer;
	z-index: 5;
    display: ${p => (p.visible ? 'block' : 'none')};
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    border-radius: 8px;
`;

export const Li = styled.div`
    ${p => p.stylesValues}
    padding: 8px;
	text-size: 20px;
	cursor: pointer;
    &:hover {
      background-color: grey;
    }
    background-color: ${p => (p.checked ? 'black' : p.theme.backgroundList)};
    color: ${p => (p.checked ? p.theme.activeButtonText : p.theme.buttonText)}  ;
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 8px;
`;
