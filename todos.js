var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//Cria a lista de todos em tela
function renderTodos(){
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode(' Excluir');

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')');

        linkElement.appendChild(linkText);  

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

//Add todos
function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();    
    SaveToStorage();
}

buttonElement.onclick = addTodo;

//Del todos
function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    SaveToStorage();
}

function SaveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}