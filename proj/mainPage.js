const elememtsDAshboard = document.querySelector('.container');

const generateId = () => {
    return Math.floor(Math.random() * 100000);
};

let dashboard = [
    //{
    //     id: generateId(),
    //     title: 'GV 2020 OD',
    //     tasks: [
    //         {
    //             id: generateId(),
    //             selected: true,
    //             name: 'Prepare mockups for Invoice flow'
    //         },
    //         {
    //             id: generateId(),
    //             selected: false,
    //             name: 'Add data'
    //         },
    //         {
    //             id: generateId(),
    //             selected: false,
    //             name: 'Demo with VJ'
    //         },
    //         {
    //             id: generateId(),
    //             selected: true,
    //             name: 'Prepare mockups for Invoice flow, contracts, new template animation'
    //         }
    //     ]
    // },
    // {
    //     id: generateId(),
    //     title: 'GV 2020 OD',
    //     tasks: [
    //         {
    //             id: generateId(),
    //             selected: true,
    //             name: 'Addiction When Gambling Becomes A Problem'
    //         },
    //         {
    //             id: generateId(),
    //             selected: false,
    //             name: 'How Plasma Tvs And Lcd Tvs Differ'
    //         },
    //         {
    //             id: generateId(),
    //             selected: true,
    //             name: 'How Does An Lcd Screen Work'
    //         },
    //         {
    //             id: generateId(),
    //             selected: false,
    //             name: 'Life Advice Looking Through A Window'
    //         }
    //     ]
    // },
    // {
    //     id: generateId(),
    //     title: 'GV 2020 OD',
    //     tasks: [
    //         {
    //             id: generateId(),
    //             selected: true,
    //             name: 'Sony Laptops Are Still Part Of The Sony Family'
    //         },
    //         {
    //             id: generateId(),
    //             selected: false,
    //             name: 'Choosing The Best Audio Player Software For Your Computer'
    //         },
    //         {
    //             id: generateId(),
    //             selected: true,
    //             name: 'Sony Laptops Are Still Part Of The Sony Family'
    //         },
    //         {
    //             id: generateId(),
    //             selected: false,
    //             name: 'What S Your Passion'
    //         }
    //     ]
    // }
];

if (JSON.parse(localStorage.getItem('dashboard')) == null) {
   dashboard = [
        {
            id: generateId(),
            title: 'Dashboard 1',
            tasks: [
                {
                    id: generateId(),
                    selected: false,
                    name: 'Task1'
                },
                {
                    id: generateId(),
                    selected: false,
                    name: 'Task2'
                }
            ]
        }
    ];
    dashboard = JSON.stringify(dashboard);
    localStorage.setItem('dashboard', dashboard);
    dashboard = JSON.parse(dashboard);
} else {
    dashboard = JSON.parse(localStorage.getItem('dashboard'));
    console.log(dashboard);
}


//Прорисовка dashboard
function getDashboard() {
    dashboard.forEach((item, i, arr) => {

        let stringDashboard = `<div class="box" id="${item.id}">
                                  <span class="sp">
                                  <img class="deleteElement" id="${item.id}" 
                                  src="image/delete.PNG" onclick="deleteElement(${item.id})">
                                  </span>
                                  <input id="${item.id}" type="text" class="title" value="${item.title}" onchange="changeTitle(value, id)">
                                  <div class="form" id="form" data-about="Tasks">${item.tasks.map((nameTask, num, arr) => {
            let string = `<div class="tas" id="${nameTask.id}"><div id="${nameTask.id}" class="checkbox ${nameTask.selected ? "active" : ""}" onclick="toggleActive(event)"></div>
                              <label class="label">
                              ${nameTask.name}
                              </label>
                              <img class="deleteTask" src="image/delete.PNG" onclick="deleteTask(${nameTask.id})">
                              <br>
                              </div>`;
            return string;
        }).join("")}<input class="addToDo" type="text" value="" placeholder="Add to-do" onchange="addTask(value, ${item.id})">
                                  </div></div>`;

        stringDashboard = new DOMParser().parseFromString(stringDashboard, "text/html").body.firstChild;
        elememtsDAshboard.appendChild(stringDashboard);

    });
}

getDashboard();


//Функция для удаления элемента
const deleteElement = elem => {
    console.log(elem);
    document.getElementById(elem).remove();
    dashboard = dashboard.filter(item => item.id !== elem);
    locStr();
    console.log(dashboard);

};

//Функция для удаления темы

const deleteTask = elem => {
    console.log(elem);
    document.getElementById(elem).remove();
    dashboard.forEach((item, i, arr) => {
        item.tasks = item.tasks.filter(task => task.id !== elem);
    });
    locStr();
    console.log(dashboard);
};

//Добавление окна "добавить dashboard"
let modal = document.getElementById("myModal");
let state = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

state.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function () {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

//Добавление нового dashboard
const newDashboard = () => {
    let title = document.getElementById("newTitle").value;
    let taskNew = document.getElementById("task").value;
    let newDashb = {
        id: generateId(),
        title: title,
        tasks: [
            {
                id: generateId(),
                selected: false,
                name: taskNew
            }]
    };
    console.log(newDashb);
    dashboard.push(newDashb);
    console.log(dashboard);
    var blockContent = document.querySelector(".container");
    while (blockContent.firstChild) {
        blockContent.removeChild(blockContent.firstChild);
    }
    document.getElementById("newTitle").value = "";
    document.getElementById("task").value = "";

    locStr();
    getDashboard();
};


//Обновление LocalStorage
const locStr = () => {
    dashboard = JSON.stringify(dashboard);
    localStorage.setItem('dashboard', dashboard);
    dashboard = JSON.parse(dashboard);
    console.log(dashboard);
};

//Изменение заголовка
const changeTitle = (elem, idElem) => {
    console.log(elem);
    console.log(idElem);
    dashboard.forEach((item, i, arr) => {
        if (item.id == idElem) {
            item.title = elem;
        }
    });
    locStr();
    console.log(dashboard);
};

//Добавление новой task
const addTask = (elem, idBox) => {
    console.log(elem);
    console.log(idBox);
    let newTask =
        {
            id: generateId(),
            selected: false,
            name: elem
        };
    // let str = dashboard.filter(item => item.id === idBox);
    dashboard.forEach((item, i, arr) => {
        if (item.id == idBox) {
            item.tasks.push(newTask);
        }
        let blockContent = document.querySelector(".container");
        while (blockContent.firstChild) {
            blockContent.removeChild(blockContent.firstChild);
        }
    });
    console.log(dashboard);
    locStr();
    getDashboard();

};

//Установить состояние checkbox
const toggleActive = event => {
    event.target.classList.toggle("active");
    console.log(event.target.id);
    dashboard = dashboard.map(item => {
        item.tasks = item.tasks.map(nameTask => nameTask.id == event.target.id ? {...nameTask, selected: !nameTask.selected} : nameTask);
        return item;
    });
    locStr();
};




