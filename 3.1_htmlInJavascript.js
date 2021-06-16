const title = document.getElementsByTagName("h1");

console.log(title);

const title00=document.getElementsByTagName("h1") ;

console.log(title00);

const title01=document.querySelector(".hello h1");
//ONLY RETURNS ONE ELEMENT (TOP TO BOTTOM!!)
console.log(title01);

title01.innerText="fuckU";