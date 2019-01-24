const getSection = (title, idList) =>toDoBoardHtml = parseFunction(`<section id="${idList}" onclick="deleteValueFromAddTask()">
              <article>
                <input type="text"  value="${title}" class="titleList" onchange="updateTitleList(${idList},this.value,this)" min="1"/>
                <div class="deleteArticle fa fa-trash fa-2x" onclick="deleteList(${idList})"></div>
             </article>
              <div class="toDo" >
             </div>
             <input class="addToDo" placeholder="add to-do" style="outline: none" onchange="addNewTask(this,this.value,${idList})"/> 
           </section>`);

const  updateTitleList = (id,newTitle,inputUpdating)=>{
    newTitle===''?inputUpdating.value=newTitle='TitleList':-1;
    toDoBoard = toDoBoard.map(e=> e.idList === id ? { ...e, title: newTitle } : e);
    inputUpdating.blur();
    saveUpdatingStorege(toDoBoard);
};

const deleteList = (idList) =>{
    const  answer = confirm('You are sure, that you want to delete this list?');
    answer===true?(toDoBoard = toDoBoard.filter(e =>e.idList !== idList),document.getElementById(idList).remove(),
        toDoBoard.length===0?elementMain.appendChild(parseFunction(nullValList)):-1):-1;
        saveUpdatingStorege(toDoBoard);
};