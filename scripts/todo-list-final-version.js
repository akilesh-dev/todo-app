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
}
function displayTodoList(){
    const todoList = document.querySelector('.todo-list');
    let todoListNew = ''
    for(let i = 0; i<list.length;i++){
        todoListNew = todoListNew + `
            <p> ${list[i].name} ${list[i].date} <button
            class="delete-button" onclick="deleteItem(${i});"> Delete </button> </p> 
        `;
    }
    todoList.innerHTML = todoListNew;
    console.log(localStorage.getItem('list'));
}

function deleteItem(itemNumber){
    list.splice(itemNumber, 1);
    localStorage.setItem('list', JSON.stringify(list));
    displayTodoList();
    
}