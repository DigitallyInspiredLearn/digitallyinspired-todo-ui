import styled from 'styled-components';
import _ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import _ToggleButton from '@material-ui/lab/ToggleButton';

export const ToggleButtonGroup = styled(_ToggleButtonGroup)`
    border-radius: 4px;
    height: 52px;
    display: flex;
    align-self: center;
`;

export const ToggleButton = styled(_ToggleButton)`
    border-radius: 4px;
    height: 52px;
    display: flex;
    align-self: center;
`;

export const App = styled.div`
    display: flex;
    flex-direction: column;
    flex: auto;
    width: 100%;
    height: 100vh;
    overflow: auto;
`;

export const Head = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    z-index: 5;
    margin: 0px 0px 8px 0px;
    box-shadow: 0 0  4px 0  rgba(0,0,0,0.2);
    padding: 8px;
    justify-content: space-between;
   position:relative;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
        min-height: 64px;
    }
`;

export const SearchContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: auto;
`;

export const Footer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-content: space-between;
   width:100%;
   z-index: 5;
   box-shadow: 0 0  4px 0  rgba(0,0,0,0.2);
   background-color: ${ p => p.theme.backgroundHeader };
   max-height: 80px;
   height: 8vh;
   .pagination-container {
	    outline: none;
        display: flex;
        
    }
    li {
        margin: 8px 8px;
		cursor: pointer;
		background-color: ${p => p.theme.backgroundButton};
		border-radius: 3px;
		/* height: 16px;
		width: auto;
		text-align: center;
		padding: 0 8px; */
		outline: none !important;
		list-style-type: none;
		text-decoration: none !important;
		&:hover {
			background-color: ${p => p.theme.hoverButton};
		}
   }
   
`;

export const Pagination = styled.div`
   display: flex;
   width: auto;
   height: auto;
   background-color: ${ p => p.theme.backgroundHeader };
   .pagination-container {
       display: flex;
       margin-left: 16px;
       margin-top: 8px;
       height: 40px;
       padding-left: 0;
       li {
           transition: background-color .3s;
           padding: 12px 16px;
           background-color: ${p => p.theme.backgroundList};
       };
       li:hover {
           background-color: ${p => p.theme.hoverButton};
       }
       li.selected {
           background-color: ${p => p.theme.activeButton};
           color: ${p => p.theme.activeButtonText};
       }
       li a {
           outline: none;
           
       }
   }
   li {
       margin: 0px 4px;
       box-shadow: 0 0  4px 0  rgba(0,0,0,0.2);
   }
`;

export const CheckboxDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7px;
    @media (max-width: 600px) {
        margin-bottom: 8px;
    }
`;

export const ShowButton = styled.div`
    border-radius: 5px;
    background-color: ${p => (p.checked ? p.theme.activeButton : p.theme.backgroundButton)};
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    color: ${p => (p.checked ? p.theme.activeButtonText : p.theme.buttonText)};
    height: auto;
    min-height: 16px;
    font-weight: bold;
    &:hover{
        background-color: ${p => (p.checked ? p.theme.hoverButton : p.theme.backgroundButton)};
    }
    width: auto;
    padding: 16px 8px;
    cursor: pointer;
    @media (max-width: 600px) {
        flex: 1;
        text-align: center;
        padding: 8px;
    }
`;

export const DashboardList = styled('main')`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex: auto;
    margin: -8px 0px;
    padding-bottom: 8px;
    height: 100vh;
    @media (max-width: 600px) {
        flex-flow: column nowrap;
    }
    overflow: auto;
    
`;

export const NullLenghtDashboards = styled.div`
    display: flex;
    color: ${p => p.theme.mainText};
    margin: 100px auto;
    font-size: 20px;
`;
