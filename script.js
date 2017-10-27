var input = document.getElementById("#input");
var button = document.getElementById("#add");
var output = document.getElementById("#todolist")
var data = document.createElement('label');

window.onload=function() {

    displayTodos();
    button.onclick = function () {
        add(input.value, false);
        input.value = "";
        displayTodos();
    }
}
input.addEventListener('keypress', function (e) {
    if (e.which === 13) {
        add(input.value, false);
        input.value = "";
        displayTodos();
    }
});


function displayTodos()
{
    output.innerHTML="";
    for(var id in localStorage)
    {
        var item=document.createElement('div');
        var delete_button=document.createElement('span');
        var data = document.createElement('label');
        var checkbox=document.createElement("input");
        var update_button=document.createElement("span");

        //delete_button.innerText="X";
        delete_button.id=(""+id+"");
        delete_button.setAttribute("class","head head2 glyphicon glyphicon-remove-sign");
        delete_button.onclick=(function(id){function del(){ondelete(""+id+"");};return del;})(id);

        data.setAttribute("for",""+id+"");
        data.innerText=JSON.parse(localStorage.getItem(id)).title;
        data.style.fontFamily="Algerian";
        data.setAttribute("class","head");


        checkbox.setAttribute("type","checkbox" );
        checkbox.setAttribute("class","head");
        checkbox.id=""+id+"";
        checkbox.onclick=(function(id){ function check(){oncheck(""+id+"");}; return check; })(id);

        if(JSON.parse(localStorage.getItem(id)).done){
            checkbox.checked="true";
            data.style.textDecoration = 'line-through';
            data.style.color = 'green';
            //data.style.fontFamily="Algerian";
        }



        //update_button.innerText="Edit";

        update_button.id=(""+id+"");
        update_button.setAttribute("class","head head1 glyphicon glyphicon-edit");
        update_button.onclick=(function(id) {function edit(){onedit(""+id+"");};return edit;})(id);


        item.appendChild(checkbox);
        item.appendChild(data);
        item.appendChild(update_button);
        item.appendChild(delete_button);

        output.appendChild(item);
    }    
}

function ondelete(id)
{
    delete_todo(id);
    displayTodos()
}
function oncheck(id) {
    change_Todo(id);
    displayTodos()
}

function onedit(ide) {
    input.setAttribute("placeholder", JSON.parse(localStorage.getItem(ide)).title);
    input.setAttribute("autofocus", "autofocus");
    button.innerText = "Update";
    button.onclick = function () {
        localStorage.setItem(ide, JSON.stringify({title: input.value, done: false}));
        //location.reload();
        displayTodos();
        input.placeholder="";
        button.innerText = "ADD";
        button.onclick = function () {
            add(input.value, false);
            input.value = "";
            displayTodos();
        }
    }
}
function deleteAll(){
    localStorage.clear();
    displayTodos();
}

function deleteDone() {
    for(var i in localStorage)
    {
        if(JSON.parse(localStorage.getItem(i)).done){
            localStorage.removeItem(i);
        }
    }
    displayTodos();
}




    
