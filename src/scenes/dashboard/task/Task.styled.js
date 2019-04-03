import styled from 'styled-components';

export const Task = styled.div`
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    &:before{ 
          content: '';
          background-color: ${p => p.theme.background};
          z-index: -1;
          position: absolute;
          width: 0;
          height: 100%;
          transition: width 0.2s ease-in-out;
          opacity: 0.4;
    }
    &:hover:before{
        width: 100%;
    }
`;

export const NameAdnCheckedTask = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex: auto;
    margin: 5px 8px; 
`;

export const CheckboxTask = styled.div`
    z-index:5;
     width: 17px;
     height: 15px;
     margin-top: 3px;
     margin-left: 8px;
     background: ${p => (p.selected ? p.theme.activeCheckbox : p.theme.checkboxBackground)};
     border-radius: 3px;
     position: relative;
     border: ${p => (p.selected ? 'black solid 2px' : 'gray solid 2px')};
     &:before{ 
          content: '\\2714';
          color: ${p => p.theme.checkboxBackground};
          bottom: -3px;
          left: 1px;
          position: absolute;
     }
`;

export const TaskName = styled.input`
    font-size: 20px;
    width: 100%;
    text-overflow: ellipsis;
    z-index: 5;
    margin-left: 8px;
    outline: none;
    text-decoration: ${props => (props.selected ? 'line-through' : 'none')};
`;

export const DeleteTask = styled.img`
    width: 20px;
    height: 20px;
    opacity: 0.5;
    margin: 8px 10px 4px 0;
    cursor: pointer;
`;
