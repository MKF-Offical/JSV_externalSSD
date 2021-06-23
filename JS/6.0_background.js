const images = ["jordan00.jpg", "jordan01.jpg", "jordan02.jpg"];

const chosenimage = images[Math.floor(Math.random() * images.length)];

console.log(chosenimage);

// <img src="img/jordan??.jpg" / >
// MAKE THIS MTF IN JS AND SAND TO HTML

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimage}`;

document.body.appendChild(bgImage);
