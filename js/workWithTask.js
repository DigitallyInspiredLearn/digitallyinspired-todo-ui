const getTask = (taskName,check,id,idList) =>
    taskListHtml=parseFunction(`<div id="${id}" class="tasks" 
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
                        </div>`);

const getListIndex = (idList) =>listIndex = toDoBoard.findIndex(i => i.idList === idList);

const addNewTask = (inputTask,newTaskValue,idList) =>{
    const listIndex = getListIndex(idList);
    const newIdTask = randomInteger(1,10000);

    toDoBoard[listIndex].tasks.length===0?document.getElementById('nullTask').remove():1;
    toDoBoard[listIndex].tasks.push({id: newIdTask,selected:false, name: newTaskValue});

    inputTask.blur();
    inputTask.value = '';
    document.getElementById(idList).querySelector('.toDo').appendChild(getTask(newTaskValue,checkGenerator(false),newIdTask,idList));
    saveUpdatingStorege(toDoBoard);
};

const updateSelected = (id,idList,selectedClass) =>{
    const listIndex = getListIndex(idList);

    selectedClass.className==='unselected'?toDoBoard[listIndex].tasks.map(i=>i.id===id?
        (i = Object.assign(i,{selected:true}), selectedClass.className ='fa fa-check-square'):-1)
        :selectedClass.className==='fa fa-check-square'?toDoBoard[listIndex].tasks.map(i=>i.id===id?
        (i = Object.assign(i,{selected:false}),selectedClass.className ='unselected'):-1):-1;
    saveUpdatingStorege(toDoBoard);
};

const updateTaskFunc = (id,idList,updatingTask) =>{
    let newName = updatingTask.value;
    updatingTask.blur();

    newName===''?updatingTask.value=newName='newNameTask':-1;
    toDoBoard[getListIndex(idList)].tasks = toDoBoard[getListIndex(idList)].tasks.map(i=>i.id===id?{...i,name:newName}:i);
    saveUpdatingStorege(toDoBoard);
};

const deleteTaskFunc = (id,idList) =>{
    const  answer = confirm('You are sure, that you want to delete this to-do?');
    const listIndex = getListIndex(idList);
    const toDoDiv = document.getElementById(idList).querySelector('.toDo');

    answer===true?(toDoBoard[listIndex].tasks = toDoBoard[listIndex].tasks.filter(e => e.id !==id),
            document.getElementById(id).remove(),
            toDoBoard[listIndex].tasks.length===0?toDoDiv.appendChild(parseFunction(nullValTask)):-1):-1;
    saveUpdatingStorege(toDoBoard);
};

let check ;
const checkGenerator = (selected) =>selected ===true?check = 'fa fa-check-square':check ='unselected';

let btns = document.querySelectorAll(".addToDo");
const deleteValueFromAddTask = () => btns.forEach(e => e.value = '');