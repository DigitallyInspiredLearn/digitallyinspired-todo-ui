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
    margin: 4px 8px; 
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

export const Icon = styled.img`
    width: 25px;
    height: 22px;
    color: ${p => p.theme.mainText};
    opacity: 0.5; 
    margin-right: 4px;
`;

export const IconInfo = styled.div`
    position: relative;
    p{
        display: none;
        padding: 8px;
    }
    &:hover p{
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 12px;
        z-index: 9999;
        width: 210px;
        margin-top: 16px;
        background: #f3f3f3;
        height: 70px;
        -moz-box-shadow: 0 5px 5px rgba(0,0,0,0.3);
        -webkit-box-shadow: 0 5px 5px rgba(0,0,0,0.3);
        box-shadow: 0 5px 5px rgba(0,0,0,0.3);
    }
`;

export const DeleteTask = styled.img`
    width: 20px;
    height: 20px;
    opacity: 0.5;
    margin: 8px 10px 4px 0;
    cursor: pointer;
`;

export const TrashTaskOneList = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover{
        animation: 1.2s ease-in-out 0s normal none infinite running trambling-animation;
    }
    @keyframes trambling-animation {
        0%, 50%, 100% {
            transform: rotate(0deg);
        }
        10%, 30% {
            transform: rotate(-10deg);
        }
        20%, 40% {
            transform: rotate(10deg);
        }
    }
`;
