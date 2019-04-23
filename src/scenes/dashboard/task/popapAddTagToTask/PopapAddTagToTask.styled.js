import styled from 'styled-components';

export const HeaderWindow = styled.button`
     display: flex;
     alignItems: center;
`;

export const TagsDiv = styled.button`
     display: flex;
     flex-flow: row wrap;
     max-height: 60px;
     flex: auto;
     border: 1px solid whitesmoke;
`;

export const Tag = styled('button')`
     padding: 4px 8px;
     margin: 4px;
     border-radius: 4px;
     display: flex;
     align-items: center;
     outline: none;
     border: none;
     max-height: 60px;
`;
