// JavaScript Document

let deButton = document.querySelector("nav button");
let deUl = document.querySelector("nav");

deButton.onclick = toggleMenu;

function toggleMenu() {
  deUl.classList.toggle("toonMenu");
}