import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

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
    flex-direction:row;
    height: auto;
    margin:1% 10px 3% 10px;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
        min-height: 60px;
    }
`;

export const SearchDiv = styled.div`
    display: flex;
    flex-direction:row;
    flex: auto;
    background-color: ${p => p.theme.backgroundList};
    height: auto;
    min-height: 15px;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.2);
    border-radius: 5px;
    padding:15px 5px;
    align-items: center;
    @media (max-width: 600px) {
        padding: 5px;   
     }
     
`;

export const Footer = styled.div`
   display: flex;
   flex-direction: row;
   flex:auto;
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
        margin: 0 10px;
		cursor: pointer;
		background-color: ${p => p.theme.backgroundButton};
		border-radius: 3px;
		height: 20px;
		width: auto;
		text-align: center;
		padding: 0 5px;
		padding-top:3px;
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
   width: 400px;
   background-color: ${p => p.theme.background};
   .pagination-container {
        display: flex;
        li {
             margin: 0 10px;
        }
   }
   li {
        margin: 0 10px;
		
   }
`;

export const Search = styled.input`
    display: flex;
    flex: auto;
    outline: none;
    font-size: 1.1em;
`;

export const IconSearch = styled.img`
    width:30px;
    height:30px;
    color: ${p => p.theme.mainText};
`;
export const CheckboxDiv = styled.div`
    display: flex;
    @media (max-width: 600px) {
        margin-bottom: 10px;
    }
`;

export const ShowButton = styled.div`
    border-radius: 5px;
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
    cursor: pointer;
    @media (max-width: 600px) {
        flex: 1;
        text-align: center;
         padding:5px;
    }
`;

export const DashboardList = styled.main`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: flex-start;
    flex: auto;
    margin: 10px 10px;
    height: 100vh;
    @media (max-width: 600px) {
        flex-flow: column nowrap;
    }
`;

export const NullLenghtDashboards = styled.p`
    color: ${p => p.theme.mainText};
    margin: auto;
`;
