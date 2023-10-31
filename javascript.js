const btn = document.querySelector(".btn");
const bkground = document.querySelector("body");

btn.addEventListener("click", () => {
    const randoColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    bkground.style.backgroundColor = randoColor;});