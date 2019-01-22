let windowToAddToDo = `<div id="divWindowAdd" style="z-index: 5">
                           <div id="fon" onclick="closeWindowFunk()"></div>
                           <aside id="addingArticle">
                               <h4 class="window-close" onclick="closeWindowFunk()">✕</h4>
                               <input type="text" placeholder="Add title" id="newTitle" style="outline: none;">
                               <div class="taskList" style="display: flex;flex-direction: column">
                               <input type="text" placeholder=" Add to-do" class="newTask" style="outline: none;"
                               oninput="deleteInputWithNullValue(event)" onchange="addTask()" value="" id="mainInput">
                               </div>
                               <button class="addList" type="submit" onclick="btnAddNewList()">Add</button>
                           </aside>
                       </div>`;

elementBody.appendChild(parseFunction(windowToAddToDo,parser));
const windowAdd = document.querySelector('#divWindowAdd');

const closeWindowFunk = () =>{
    windowAdd.style.display = 'none';
    let inputs = document.querySelectorAll('.newTask');
    deledeInputs(inputs);
    document.querySelector("#mainInput").value = null;
    document.querySelector("#newTitle").value=null;
};

const funcOpenWindowAdd = () =>{
    windowAdd.style.display = 'flex';
    document.getElementById('addingArticle').style.animation='move 1s';
};

const deledeInputs = (inputs) =>{
    for (i=1;i<inputs.length;i++) {
        inputs[i].remove();
    }
};

const deleteInputWithNullValue = (event) =>{

    let allElem = document.querySelectorAll(".newTask");

    event.target.value.length===0?allElem.forEach((e,i) => {
     i<allElem.length-1&&e.value.length===0?e.remove():-1
     }):-1;
};

const addTask =()=>{
    let parent = document.querySelector('.taskList');
    let lastInput = parent.lastElementChild;
    let task =`<input type="text" placeholder=" Add to-do" class="newTask" style="outline: none;" 
               oninput="deleteInputWithNullValue(event)" onchange="addTask()" value="">`;
    if(lastInput.value.length!==0){
        document.querySelector('.taskList').appendChild(parseFunction(task,parser));
        parent.lastElementChild.focus();
    }
};

const btnAddNewList = () =>{
    windowAdd.style.display = 'none';
    let newTitle = document.querySelector('#newTitle').value;
    let inputs = document.querySelectorAll(".newTask");
    inputs = Array.from(inputs).map((e,i) =>{
        if(e.value!=='') {
            return e.value;
        }else  return e.value='to-do';
    });
    newTitle === ''?newTitle = 'TitleList':newTitle;

    deledeInputs(document.querySelectorAll(".newTask"));
    addNewToDoBoard(newTitle,inputs);

    document.querySelector("#mainInput").value = null;
    document.querySelector("#newTitle").value=null;
};

const addNewToDoBoard = (newTitle,arrayNewTasks) => {
    getStorage().length === 0?document.getElementById('nullVal').remove():-1;
    const newIdList = randomInteger(1, 1000000);
    const newIdTask = [];

    arrayNewTasks.forEach(i =>{
        newIdTask.push(randomInteger(1, 1000000));
    });

    toDoBoard.push({idList: newIdList, title: newTitle, tasks:[]});
    section = getSection(newTitle, newIdList);
    const listIndex = getListIndex(newIdList);

    for (i = 0; i < arrayNewTasks.length; i++) {
        toDoBoard[listIndex].tasks.push({id: newIdTask[i],selected:false, name: ""+arrayNewTasks[i]});
        section.querySelector(".toDo").appendChild(getTask(""+arrayNewTasks[i],checkGenerator(false),""+newIdTask[i],newIdList));
    }
    elementMain.appendChild(section);
    saveUpdatingStorege(toDoBoard);
};

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);

    toDoBoard.forEach(e=>{
        e.idList === rand?randomInteger(min, max):e.tasks.forEach(i => {
            i.id === rand?randomInteger(min, max): rand;})
    });
    return rand;
}