const h1 = document.querySelector("div.hello h1")
//div.hello:first-child h1__wtf?__why is "first-child" is not working??
console.log(h1);

function handleTitleClick(){
    /*
    const clickedClass="clicked";

    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    */
    //HARD WAY~~
    h1.classList.toggle("clicked");
    //EASY WAY~~
}


h1.addEventListener("click",handleTitleClick);