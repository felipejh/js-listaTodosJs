var lista = document.getElementById("listId");
var inputElement = document.getElementById("input");
var btnAdicionar = document.getElementById("btnAdicionar");

var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];

function renderTodos() {

    lista.innerHTML = '';

    for (todo of todos) {

        var itemElement = document.createElement('li');
        var textTodo = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var textLink = document.createTextNode("Excluir");
        linkElement.appendChild(textLink);
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        itemElement.appendChild(textTodo);
        itemElement.appendChild(linkElement);

        lista.appendChild(itemElement);

    }

}

function addTodos() {
    var todoText = inputElement.value;
    todos.push(todoText);

    inputElement.value = null;
    renderTodos();
    saveToStorage();

}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('lista_todos', JSON.stringify(todos));
}

renderTodos();
btnAdicionar.onclick = addTodos;