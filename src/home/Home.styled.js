import styled from 'styled-components';

export const ExapleContainer = styled('div')`
    display: flex;
    flex-direction: column;
    width: 800px;
    margin: 0 auto;
`;

export const ExapleRow = styled('div')`
    font-weight: ${p => (p.primary ? 'bold' : 'regular')};
    font-size: 20px;
    margin: 5px 0;
`;
