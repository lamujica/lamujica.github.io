let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");
let box = document.querySelector(".bx")

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle('open')
}