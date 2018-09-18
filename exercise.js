var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var deleteArray = document.querySelectorAll("delete");
var liArray = document.querySelectorAll("li");


function inputLength(){
    return input.value.length;
}

function addListItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteBtn);
    input.value = "";
    li.addEventListener("click", toggleDone);
    deleteBtn.addEventListener("click", deleteItem);
};

function addListAfterClick(){
    if(inputLength() > 0){
        addListItem();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        addListItem();
    }
}

function toggleDone(){
    this.classList.toggle("done");
}

function deleteItem(){
    this.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);




