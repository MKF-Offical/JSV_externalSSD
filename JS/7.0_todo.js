const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//^-get the value of input!!
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  //^-REMOVE THE DEFAULT BEHAVIOR(REFRESHING WHEN SUBMIT)
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  //^-VERY FUCKIN IMPORTANT SAVE THE VALUE AND EMPTY IT!!
}
toDoForm.addEventListener("submit", handleToDoSubmit);
