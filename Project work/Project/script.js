"use strict";

const firstBlock = document.getElementById('firstCard');
const secondBlock = document.getElementById('secondCard');
const thirdBlock = document.getElementById('thirdCard');

const fbtn = document.getElementById('fbtn');
const sbtn = document.getElementById('sbtn');
const tbtn = document.getElementById('tbtn');

function all(){
fbtn.addEventListener("click", function (e) {
    firstBlock.classList.add("border-danger")
    secondBlock.classList.remove("border-danger");
    thirdBlock.classList.remove("border-danger");
})

sbtn.addEventListener("click", function (e) {
    firstBlock.classList.remove("border-danger")
    secondBlock.classList.add("border-danger");
    thirdBlock.classList.remove("border-danger");
})

tbtn.addEventListener("click", function (e) {
    firstBlock.classList.remove("border-danger")
    secondBlock.classList.remove("border-danger");
    thirdBlock.classList.add("border-danger");
})
}
all();