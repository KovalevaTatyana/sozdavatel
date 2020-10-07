'use strict';

function toggle() {
    let toggle = document.getElementById("catalog");
    toggle.classList.toggle("list");
    let text = document.getElementById("btn_toggle");
        text.innerHTML == 'Плитка' ? text.innerHTML = 'Список' : text.innerHTML = 'Плитка';
}