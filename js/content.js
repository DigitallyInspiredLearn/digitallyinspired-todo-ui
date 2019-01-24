const elementMain = document.querySelector("main");

const nullValList = `<div id ="nullVal" style="margin: auto;opacity: 0.6;">You don\'t have a TodoList at the moment!</div>`;
const nullValTask = `<div id ="nullTask" style="margin: 10px;opacity: 0.6;">You don\'t have a do-to at the moment!</div>`;

let toDoBoard = getStorage();

getStorage().length===0?elementMain.appendChild(parseFunction(nullValList)):-1;
toDoBoard.forEach((item) => {
    let select = getSection(item.title,item.idList);
    elementMain.appendChild(select);

    item.tasks.length===0?select.querySelector(".toDo").appendChild(parseFunction(nullValTask)):item.tasks.forEach((itm) =>
        select.querySelector(".toDo").appendChild(getTask(itm.name,checkGenerator(itm.selected),itm.id,item.idList)) );
});