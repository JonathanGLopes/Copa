'use strict';

const $menu = document.querySelector(".fa-bars");
const $ul = document.querySelector(".nav_inativo");

$menu.addEventListener("click", toggleMenu);

function toggleMenu() {
    $ul.classList.toggle("nav_ativo");
    $ul.classList.toggle("nav_inativo");
}