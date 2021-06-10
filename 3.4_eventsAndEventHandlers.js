function handleResize(){
    console.log("I have been resized.")
} ;

window.addEventListener("resize", handleResize);

const title = document.querySelector("#title");

function handleClick() {
    title.style.color="red"
    console.log("Color changed!!")
};

title.addEventListener("click",handleClick);

console.dir(title);
