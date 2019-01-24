let getStorage = () =>{
    let toDoBoard = [
        {
            idList: 999,
            title: 'Title list',
            tasks: [
                {
                    id:4,
                    selected: false,
                    name:'изменить Object.assign на ...'
                },
                {
                    id:14,
                    selected: false,
                    name:'использовать датасет'
                },
                {
                    id:74,
                    selected: false,
                    name:'оптимизировать код(246 строк)'
                }
                ,
                // {
                //     id:84,
                //     selected: false,
                //     name:'сделать программу растяжки'
                // },
                // {
                //     id:94,
                //     selected: false,
                //     name:'пройти первій урок англ'
                // },
                {
                    id:194,
                    selected: false,
                    name:'пройти 10тем лерн жс'
                }
                // ,
                // {
                //     id:294,
                //     selected: false,
                //     name:'сделать растіжку'
                // },
                // {
                //     id:394,
                //     selected: false,
                //     name:'силовая на руки'
                // },
                // {
                //     id:394,
                //     selected: false,
                //     name:'приготовить кушать'
                // },
                // {
                //     id:494,
                //     selected: false,
                //     name:'сделать домашку'
                // }
            ]
        }
    ];
    JSON.parse(localStorage.getItem("toDoData"))===null?localStorage.setItem("toDoData", JSON.stringify(toDoBoard)):-1;
    return JSON.parse(localStorage.getItem("toDoData"));
};
const saveUpdatingStorege = (toDoBoard) =>localStorage.setItem('toDoData',JSON.stringify(toDoBoard));