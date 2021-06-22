const h1 = document.querySelector("div.hello h1")
//div.hello:first-child h1__wtf?__why is "first-child" is not working??
console.log(h1);

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    
    if(currentColor==="blue") {
        newColor="tomato";
    }else{
        newColor="blue";
    }

    h1.style.color=newColor;
    //이건뭐지?? 
}


h1.addEventListener("click",handleTitleClick);