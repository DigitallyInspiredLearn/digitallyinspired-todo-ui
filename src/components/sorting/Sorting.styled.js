import styled from 'styled-components';

export const Container = styled.div`
 position: relative;
`;

export const Button = styled.div`
    border-radius: 5px;
    margin-left: 10px;
    background-color: ${p => (p.checked ? p.theme.activeButton : p.theme.backgroundButton)};
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    color: ${p => (p.checked ? p.theme.activeButtonText : p.theme.buttonText)};
    height: auto;
    min-height:15px;
    font-weight: bold;
    &:hover{
        background-color: ${p => (p.checked ? p.theme.hoverButton : p.theme.backgroundButton)};
    }
    width: auto;
    padding: 15px 5px;
    @media (max-width: 600px) {
        flex: 1;
        text-align: center;
         padding:5px;
    }
`;
export const Ul = styled.div`
    position:absolute;
    z-index:99999;
    top:55px;
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
