/*
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/
const loginForm=document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link= document.querySelector("a");

function onLoginSubmit(event) {
  /*
  console.dir(loginInput); //CHECK OUT WHICH ELEMENT IT HAS!!! WE FOUND VALUE!!! BIAAAATCH!!!
  console.log(loginInput.value);
  console.log("click!");
  */
  /*
  const userName = loginInput.value;
  console.log(userName);
  */
  /*
  if (userName === "") {
    alert("pleanse write your fuckin name u ass motherfucker");
  } else if (userName.length > 15) {
    alert("Your name is too long.");
  }
  */
  event.preventDefault();
  console.log(loginInput.value);
  console.log(event)
}
function handleLinkClick(event){
  event.preventDefault();
  console.log(event);
alert("clicked!");
}
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);

/*
JS will execute(play) this function handleLinkClick()
not you!!
but when executing JS will give you first element object for function
handleLinkClick() -> handleLinkClick(OBJECT{information about the event that just happend})
All we have to do is "MAKE ROOM FOR IT, JUST LIKE CALCULATOR ,WE HAVE TO RECEIVE THAT ARGUMENT"
*/