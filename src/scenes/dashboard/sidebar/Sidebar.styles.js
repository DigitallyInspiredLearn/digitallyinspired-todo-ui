import styled from 'styled-components';

export const Close = styled.span`
    position: absolute;
    align-self: flex-end;
    color: grey;
    float: right;
    font-size: 50px;
    cursor: pointer;
    &:hover{
        color:black;
   }
`;
export const Plus = styled.div`
    width: 50px;
    cursor: pointer;
    margin: 10px;
    align-self: center;
`;
export const AddButton = styled.div`
    position: absolute;
    background-color: black;
    height: 30px;
    margin: 0 -5px;
    bottom: 0;
    padding: 7px;
    text-align: center;
    cursor: pointer;
    color: #3c3c3c;
    text-transform: uppercase;
    width:100%;
    text-decoration:none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to left,transparent,transparent 50%, #3c3c3c 50%, #3c3c3c);
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .25s ease-in;
    border: 1px solid #3c3c3c;
    &:hover {
        background-position: 0 0;
        color:${p => p.theme.activeButton};
    }    
`;
export const AddTask = styled.div`
    color: ${p => p.theme.buttonText};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.theme.backgroundButton};
    margin-top: 0;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    font-size: 15px;
    outline: none;
    &:hover {
        color: ${p => p.theme.activeButton};
        background: ${p => p.theme.hoverButton};
        outline: none;
    }
`;
export const InputTitle = styled.input`
    margin-top:40px;
    border: none;
    width: 470px;
    height: 25px;
    margin-left: 5px;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    color:${p => p.theme.mainText};
    cursor: pointer; 
`;
export const InputTask = styled.input`
    margin-top: 10px;
    width: 500px;
    height: 25px;
    margin-left: 15px;
    outline: none;
    font-size: 15px;
    font-weight: bold;
    color: ${p => p.theme.mainText};
    cursor: pointer;
    z-index:30;
`;
export const AddTaskPlace = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
`;
export const Background = styled.div`
    width: 100%;
    z-index: 10;
    flex-direction: row;
    background-color: ${p => p.theme.mainText};
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top:0;
`;
export const Aside = styled.aside`
    display: flex;
    background-color: ${p => p.theme.backgroundHeader};
    padding: 0 5px 0 5px;
    height: 101vh;
    margin: auto;
    position: fixed;
    top: -5px;
    left: auto;
    right: 0;
    flex-direction: column;
    z-index:  20;
    width: 30%;
    @media (max-width: 500px) {
        width: 100%;
    }
`;
export const Sidebar = styled.div`
    width: 100%;
    z-index: 2;
    position: absolute;
    height: 100%;
`;
export const TaskList = styled.div`
    max-height: 75%;
    overflow-y: auto;
    overflow-x: hidden;
`;
export const TrashTask = styled.img`
    width: 20px;
    padding: 7px 15px;
    font-size: 14px;
    cursor:pointer;
    z-index:1;
    &:hover {
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
export const ButtonPlus = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: all 1000ms;
    -moz-transition: all 1000ms;
    -o-transition: all 1000ms;
    transition: all 1000ms;
    &:hover{
        opacity: 1;
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }    
}
`;
