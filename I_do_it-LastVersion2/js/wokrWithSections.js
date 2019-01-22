function getSection(title, idList){
    let toDoBoardHtml = `<section id="${idList}" onclick="deleteValueFromAddTask()">
              <article>
                <input type="text"  value="${title}" class="titleList" onchange="updateTitleList(${idList},this.value,this)" min="1"/>
                <div class="deleteArticle fa fa-trash fa-2x" onclick="deleteList(${idList})"></div>\
             </article>
              <div class="toDo" >
             </div>
             <input class="addToDo" placeholder="add to-do" style="outline: none" onchange="addNewTask(this,this.value,${idList})"/> 
           </section>`;
    toDoBoardHtml = parseFunction(toDoBoardHtml,parser);
    return toDoBoardHtml;
}

const  updateTitleList = (id,newTitle,inputUpdating)=>{
    newTitle===''?inputUpdating.value='TitleList':-1;
    toDoBoard.forEach(e=>{
        e.idList===id?e = Object.assign(e,{title:newTitle}):false;
    });
    inputUpdating.blur();
    saveUpdatingStorege(toDoBoard);
};

const deleteList = (idList) =>{
    const  answer = confirm('You are sure, that you want to delete this list?');
    if(answer===true) {
        toDoBoard = toDoBoard.filter(e => {
            return e.idList !== idList;
        });
        document.getElementById(idList).remove();
        toDoBoard.length===0?elementMain.appendChild(parseFunction(val,parser)):-1;
        saveUpdatingStorege(toDoBoard);
    }
};
