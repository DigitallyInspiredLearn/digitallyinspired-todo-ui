import styled from 'styled-components';

export const Dashboard = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 0  40px 0  rgba(0,0,0,0.1);
    width: 49.6%;
    margin-bottom: 10px;
    border-radius: 5px;
    height: auto;
    min-height: 300px;
    transition: 500ms;
    animation: show 500ms 1;
    animation-fill-mode: forwards;
    animation-delay: 0s;
    @keyframes show{
        0%{
           opacity:0;
        }
        100% {
            opacity:1;
        }
    }
    @media (max-width: 600px) {
        width: 100%; 
    }
`;

export const DashboardHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 10px;
    width:100%
`;

export const Title = styled.input`
    font-size: 23px;
    color: black;
    font-weight: bold;
    text-overflow: ellipsis;
    cursor: pointer;
    outline: none;
    width:85%
`;
export const IconContainer = styled.div`
    width:auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-right: 20px;
`;

export const Icon = styled.img`
    width: 25px;
    height: 22px;
    color: grey;
    opacity: 0.5; 
`;

export const TaskList = styled.div`
    height:240px;
    overflow-y: auto;
    overflow-x: hidden;
    outline: none;
    ::-webkit-scrollbar {
         width: 8px;
    }
    ::-webkit-scrollbar-track {
         background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
         background: lightgrey; 
    }  
    ::-webkit-scrollbar-thumb:hover {
         background: grey; 
    }
    margin-right: 10px;
    border: 2px solid rgba(241,241,241,0.2)
`;

export const InputAddingTask = styled.input`
    display:flex;
    flex-direction: row;
    align=item:center;
    font-size: 16px;
    outline: none;
    margin: 10px;
`;

export const NullLenghtTask = styled.p`
     color: gray;
     margin: 10px;
     opacity: 0.6
`;