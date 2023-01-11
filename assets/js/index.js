'use strict';

const $menu = document.querySelector(".fa-bars");
const $ul = document.querySelector("ul");

$menu.addEventListener("click", toggleMenu);

function toggleMenu() {
    if($ul.className === ""){
        $ul.classList.toggle("nav_ativo");
    } else {
        $ul.classList.toggle("nav_inativo");
    }
}