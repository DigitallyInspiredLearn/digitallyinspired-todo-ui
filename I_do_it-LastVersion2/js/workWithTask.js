function getTask(taskName,check,id,idList){

    let taskListHtml = `<div id="${id}" class="tasks" 
                          onmouseover="document.getElementById(${id}).querySelector('.manipulationTasls').style.display='block';"
                          onmouseout="document.getElementById(${id}).querySelector('.manipulationTasls').style.display='none';">     
                             <div class="checkboxDiv" style="display: flex; flex-direction:row; width:100%" >
                                 <div class="${check}" onclick="updateSelected(${id},${idList},this)"></div>
                                 <input type="text" value="${taskName}" class="taskName" style="width: 100%;text-overflow: ellipsis"
                                    onchange="updateTaskFunc(${id},${idList},this)"/>  
                             </div>
                             <div class="manipulationTasls" style="display: none" >
                                 <label class="deleteTask fa fa-trash" onclick="deleteTaskFunc(${id},${idList})" />
                             </div>
                        </div>`;
    taskListHtml=parseFunction(taskListHtml,parser);
    return taskListHtml;
}

const getListIndex = (idList) =>listIndex = toDoBoard.findIndex(i => i.idList === idList);

const addNewTask = (inputTask,newTaskValue,idList) =>{

    const listIndex = getListIndex(idList);
    toDoBoard[listIndex].tasks.length===0?document.getElementById('nullTask').remove():1;
    let newIdTask = randomInteger(1,10000);

    toDoBoard[listIndex].tasks.push({id: newIdTask,selected:false, name: newTaskValue});
    inputTask.blur();
    inputTask.value = '';
    document.getElementById(idList).querySelector('.toDo').appendChild(getTask(newTaskValue,checkGenerator(false),newIdTask,idList));
    saveUpdatingStorege(toDoBoard);
};

const updateSelected = (id,idList,selectedClass) =>{
    const listIndex = getListIndex(idList);

    selectedClass.className==='unselected'?toDoBoard[listIndex].tasks.map(i=>{
        i.id===id?i = Object.assign(i,{selected:true}):-1;
        selectedClass.className ='fa fa-check-square'
    }):selectedClass.className==='fa fa-check-square'?toDoBoard[listIndex].tasks.map(i=>{
        i.id===id?i = Object.assign(i,{selected:false}):-1;selectedClass.className ='unselected'}):-1;
    saveUpdatingStorege(toDoBoard);
};

const updateTaskFunc = (id,idList,updatingTask) =>{
    let newName = updatingTask.value;
    updatingTask.blur();

    const listIndex = getListIndex(idList);
    newName===''?updatingTask.value='newNameTask':-1;
    toDoBoard[listIndex].tasks.map(i=>{
        i.id===id?i = Object.assign(i,{name:newName}):false;});
    saveUpdatingStorege(toDoBoard);
};

const deleteTaskFunc = (id,idList) =>{
    const  answer = confirm('You are sure, that you want to delete this to-do?');
    const listIndex = getListIndex(idList);
    const toDoDiv = document.getElementById(idList).querySelector('.toDo');
    const valTask = `<div id ="nullTask" style="margin: 10px;opacity: 0.6;">You don\'t have a do-to at the moment!</div>`;

    answer===true?toDoBoard[listIndex].tasks = toDoBoard[listIndex].tasks.filter(e => {
        return e.id !==id;
    }):-1;

    answer===true?document.getElementById(id).remove():-1;
    answer===true?toDoBoard[listIndex].tasks.length===0?toDoDiv.appendChild(parseFunction(valTask,parser)):-1:-1;
    saveUpdatingStorege(toDoBoard);
};

const checkGenerator = (selected) =>{
    let check = '';
    selected ===true?check = 'fa fa-check-square':check ='unselected';
    return check;
};

const deleteValueFromAddTask = () => {
    let btns = document.querySelectorAll(".addToDo");
    btns.forEach(e => {
        e.value = '';
    })
};