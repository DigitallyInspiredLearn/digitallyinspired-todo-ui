import styled from 'styled-components';

export const App = styled.div`
    display: flex;
    flex-direction: column;
    flex: auto;
    width: 100%;
    height: 100vh;
    overflow: auto;
`;
export const SearchAndChecked = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    margin: 8px;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
        min-height: 64px;
    }
`;

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex: auto;
    background-color: ${p => p.theme.backgroundList};
    height: auto;
    min-height: 16px;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    border-radius: 5px;
    padding: 8px;
    align-items: center;
    @media (max-width: 600px) {
        padding: 8px;   
    }
     
`;

export const Footer = styled.div`
   display: flex;
   flex-direction: row;
   flex: auto;
   justify-content: space-between;
   align-content: space-between;
   width:100%;
   z-index: 5;
   box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
   background-color: ${p => p.theme.background};
   .pagination-container {
	    outline: none;
        display: flex;
    }
    li {
        margin: 0 8px;
		cursor: pointer;
		background-color: ${p => p.theme.backgroundButton};
		border-radius: 3px;
		height: 16px;
		width: auto;
		text-align: center;
		padding: 0 8px;
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
   background-color: ${p => p.theme.background};
   .pagination-container {
       display: flex;
       li {
            transition: background-color .3s;
           padding: 12px 16px;
           background-color: ${p => p.theme.backgroundButton};
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
       margin: 0 4px;
   }
`;

export const Search = styled.input`
    display: flex;
    flex: auto;
    outline: none;
    font-size: 1.1em;
`;

export const IconSearch = styled.img`
    width: 32px;
    height: 32px;
    color: ${p => p.theme.mainText};
`;
export const CheckboxDiv = styled.div`
    display: flex;
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

export const DashboardList = styled.main`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex: auto;
    margin: -8px 0px;
    height: 100vh;
    @media (max-width: 600px) {
        flex-flow: column nowrap;
    }
`;

export const NullLenghtDashboards = styled.p`
    color: ${p => p.theme.mainText};
    margin: auto;
`;
