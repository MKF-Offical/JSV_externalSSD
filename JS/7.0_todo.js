const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//^-get the value of input!!
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = []; //항상초 기화되는걸 막기위해서!
//local storage!==data base
//toDos array is data base
//local storage is the place where we copy toDos array

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  //버튼이 여러개일 경우 어떤걸 클릭했는지알아야함!
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newtodo) {
  const li = document.createElement("li");
  li.id = newtodo.id;
  const span = document.createElement("span");
  span.innerText = newtodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //^-REMOVE THE DEFAULT BEHAVIOR(REFRESHING WHEN SUBMIT)
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  //^-VERY FUCKIN IMPORTANT SAVE THE VALUE AND EMPTY IT!!!
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos; //항상초기화되는걸 막기위해서!
  parsedToDos.forEach(paintToDo);
}
