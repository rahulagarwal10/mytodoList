var keys=Object.keys(localStorage);
//var id=0;
var id=keys.length;
//var input=document.getElementById("#input");
//var button=document.getElementById("#add");
//var output=document.getElementById("#todolist")
//var data = document.createElement('label');
interface List{
    title:string;
    done:boolean;
}

class TodoList{

constructor(){

}
addTodo(todotitle:List){
    localStorage.setItem(""+(++id)+"",JSON.stringify({title:todotitle.title,done:false}));
}
deleteTodo(ide:string){
    console.log(ide);
    localStorage.removeItem(ide);
}
changeTodo(id:string){
    localStorage.setItem(id,JSON.stringify({title:JSON.parse(localStorage.getItem(id)).title,done:!(JSON.parse(localStorage.getItem(id)).done)}))
}

}

var todo=new TodoList();
function add(title:string,done:boolean){
    todo.addTodo({title:title,done:done});
}
function delete_todo(id:string)
{
    todo.deleteTodo(id);
}
function change_Todo(id:string){
    todo.changeTodo(id);
}
