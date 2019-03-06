import styled from 'styled-components';

export default styled.div`
    z-index:5;
     width: 17px;
     height: 15px;
     margin-top: 3px;
     margin-left: 10px;
     background: ${p => (p.selected ? p.theme.activeCheckbox : p.theme.checkboxBackground)};
     border-radius: 3px;
     position:relative;
     border:  ${p => (p.selected ? 'black solid 2px' : 'gray solid 2px')};
     &:before{ 
          content: '\\2714';
          color: ${p => p.theme.checkboxBackground};
          bottom:-3px;
          left:1px;
          position:absolute;
     }
`;
