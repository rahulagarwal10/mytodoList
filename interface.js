var keys = Object.keys(localStorage);
//var id=0;
var id = keys.length;
var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    TodoList.prototype.addTodo = function (todotitle) {
        localStorage.setItem("" + (++id) + "", JSON.stringify({ title: todotitle.title, done: false }));
    };
    TodoList.prototype.deleteTodo = function (ide) {
        console.log(ide);
        localStorage.removeItem(ide);
    };
    TodoList.prototype.changeTodo = function (id) {
        localStorage.setItem(id, JSON.stringify({ title: JSON.parse(localStorage.getItem(id)).title, done: !(JSON.parse(localStorage.getItem(id)).done) }));
    };
    return TodoList;
}());
var todo = new TodoList();
function add(title, done) {
    todo.addTodo({ title: title, done: done });
}
function delete_todo(id) {
    todo.deleteTodo(id);
}
function change_Todo(id) {
    todo.changeTodo(id);
}
