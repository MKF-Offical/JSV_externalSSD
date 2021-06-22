const title = document.getElementsByTagName("h1");

console.log(title);

const title00=document.getElementsByTagName ("h1") ;

console.log(title00);

const title01=document.querySelector(".hello h1");
//ONLY RETURNS ONE ELEMENT (TOP TO BOTTOM!!)
console.log(title01);

title01.innerText="fuckU";
title01.style.color="red";

function handlTitleClick(){
    title01.style.color="blue";
    console.log("title was clicked!!!");
};

function handleMouseEnter(){
    title01.innerText="mouse is here!!";
}

function handleMouseLeave(){
    title01.innerText="mouse is gone!!";
}

title01.addEventListener("click", handlTitleClick/*UNDERSTAND THE DIFFERENCE!()*/);
title01.addEventListener("mouseenter", handleMouseEnter);
title01.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

function handleWindowCopy(){
    alert("copier!!");
}

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
//console.dir(title01);
