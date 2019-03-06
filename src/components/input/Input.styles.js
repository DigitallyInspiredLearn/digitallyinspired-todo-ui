import styled from 'styled-components';

export default styled.input`
    font-size: 20px;
    width: ${p => p.width};
    text-overflow: ellipsis;
    z-index: 5;
    margin-left: 5px;
    outline: none;
    text: ${p => p.value};
    border: ${p => (p.border ? '1px solid black !important' : 'none')};
`;
