
const val = `<div id ="nullVal" style="margin: auto;opacity: 0.6;">You don\'t have a TodoList at the moment!</div>`;
let content = `<div id="content" onclick="deleteValueFromAddTask()">
        <main onclick="deleteValueFromAddTask()"></main>
        <div class="addNewArticleButton" onclick="funcOpenWindowAdd()">+</div>
        </div>`;

elementBody.appendChild(parseFunction(content,parser));

const elementMain = document.querySelector("main");
let toDoBoard = getStorage();





getStorage().length===0?elementMain.appendChild(parseFunction(val,parser)):-1;
toDoBoard.forEach((item) => {
    let select = getSection(item.title,item.idList);
    elementMain.appendChild(select);

    const valTask = '<div id ="nullTask" style="margin: 10px;opacity: 0.6;">You don\'t have a do-to at the moment!</div>';

    item.tasks.length===0?select.querySelector(".toDo").appendChild(parseFunction(valTask,parser)):item.tasks.forEach((itm) => {
            select.querySelector(".toDo").appendChild(getTask(itm.name,checkGenerator(itm.selected),itm.id,item.idList));
        }
    );
});

const saveUpdatingStorege = (toDoBoard) =>{
    localStorage.setItem('toDoData',JSON.stringify(toDoBoard));
}