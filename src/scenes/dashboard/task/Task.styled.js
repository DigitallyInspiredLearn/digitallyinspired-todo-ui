import styled from 'styled-components';

export const Task = styled.div`
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    align-items: center;
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
        width: auto;
        min-width: 210px;
        margin-top: 16px;
        background: ${p => p.theme.background};
        height: auto;
        overflow-y: auto;
        -moz-box-shadow: 0 5px 5px rgba(0,0,0,0.3);
        -webkit-box-shadow: 0 5px 5px rgba(0,0,0,0.3);
        box-shadow: 0 5px 5px rgba(0,0,0,0.3);
    }
`;

export const DeleteTask = styled.img`
    width: 20px;
    height: 20px;
    opacity: 0.7;
    margin: 8px 10px 6px 16px;
    cursor: pointer;

`;

export const AddTag = styled.div`
    opacity: 1;
    cursor: pointer;
    position: relative;
    box-shadow: 0 5px  10px 0  rgba(0,0,0,0.3);
    padding: 0px 4px ;
    margin-top:2px;
    background-color: white;
    border-radius: 50%;
    color: grey;
    font-size: 15px;
    border: 2px solid grey;
`;

export const TagsInfo = styled.div`
    display: flex;
    flexWrap: wrap;
    alignItems: center;
    cursor: default;
    ::-webkit-scrollbar {
        width: 8px;
    };
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    };
    ::-webkit-scrollbar-thumb {
        background: lightgrey; 
    };
    ::-webkit-scrollbar-thumb:hover {
        background: grey; 
    };
`;

export const TagName = styled.span`
    padding: 2px 4px;
    margin: 4px;
    borderRadius: 2px;
`;

export const DeleteTagFromTask = styled.span`
   backgroundColor: white;
   padding: 0 4px;
   borderRadius: 2px;
   border: 1px solid grey;
   marginLeft: 4px;
   opacity: 0.8;
`;
