const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userame";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  const userNameThatTheUserWrote = loginInput.value; //변수설저을 꼭 함수안에서 해야하는 이유??
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userNameThatTheUserWrote);
  //greeting.innerText="Hello_"+ userName;
  paintGreetings(userNameThatTheUserWrote);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("clicked!");
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click", handleLinkClick);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

/*
JS will execute(play) this function handleLinkClick()
not you!!
but when executing JS will give you first element object for function
handleLinkClick() -> handleLinkClick(OBJECT{information about the event that just happend})
All we have to do is "MAKE ROOM FOR IT, JUST LIKE CALCULATOR ,WE HAVE TO RECEIVE THAT ARGUMENT"
*/
