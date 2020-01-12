var lista = document.getElementById("listId");
var inputElement = document.getElementById("input");
var btnAdicionar = document.getElementById("btnAdicionar");

var todos = [
    "Fazer café",
    "Estudar Javascript",
    "Acessar Github"
]

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

}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}

renderTodos();
btnAdicionar.onclick = addTodos;