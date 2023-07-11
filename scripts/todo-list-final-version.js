let list =  localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
displayTodoList();
function addTodo(){
    const todoName = document.querySelector('.todo-name');
    const todoDate = document.querySelector('.todo-date');
    if(!todoName.value){
        return;
    }
    list.push({
        name: todoName.value,
        date: todoDate.value||''
    });

    displayTodoList();
    todoName.value = '';
    todoDate.value = '';
    //console.log(list);
    localStorage.setItem('list', JSON.stringify(list));
}
function resetList(){
    list = [];
    localStorage.removeItem('list');
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';
    displayResetButton();
}
function displayTodoList(){
    displayResetButton();
    const todoList = document.querySelector('.todo-list');
    let todoListNew = ''
    for(let i = 0; i<list.length;i++){
        todoListNew = todoListNew + `
            <div class="div-name"> ${list[i].name} </div> <div class="div-date"> ${list[i].date} </div> <button
            class="delete-button" onclick="deleteItem(${i});"> Delete </button> 
        `;
    }
    todoList.innerHTML = todoListNew;
   // console.log(localStorage.getItem('list'));
}

function deleteItem(itemNumber){
    list.splice(itemNumber, 1);
    localStorage.setItem('list', JSON.stringify(list));
    displayTodoList();
    
}

function displayResetButton(){
    const deleteButton = document.querySelector('.div-delete-button');
    
    if(list.length>0){
        deleteButton.innerHTML = `<button class="reset-button" onclick="resetList();"> Reset List</button>`;
    }
    else{
        deleteButton.innerHTML = '';
    }
    //console.log(deleteButton.innerHTML);
}

function handleDarkMode(){
    const bodyElement = document.querySelector('body');
    if(bodyElement.classList.contains('js-dark-mode')){
        bodyElement.classList.remove('js-dark-mode');
    }
    else{
        bodyElement.classList.add('js-dark-mode');
    }
}