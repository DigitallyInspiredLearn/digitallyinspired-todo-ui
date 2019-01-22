let getStorage = () =>{
    let toDoBoard = [
        {
            idList: 999,
            title: 'Title list',
            tasks: [
                {
                    id:4,
                    selected: false,
                    name:'I want to do it'
                }
            ]
        }
    ];
    JSON.parse(localStorage.getItem("toDoData"))===null?localStorage.setItem("toDoData", JSON.stringify(toDoBoard)):-1;
    return JSON.parse(localStorage.getItem("toDoData"));
};