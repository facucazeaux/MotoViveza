

let btnimgprox = document.querySelector("#botoncambioimgadelante");
let btnimganterior = document.querySelector("#botoncambioimgatras");
let indice = 0;

btnimgprox.addEventListener("click", cambiarprox);
btnimganterior.addEventListener("click", cambiarant);

let imagenes = ["img/faro.png", "img/escape.png", "img/escape2.png", "img/guardabarro.png", "img/guiñe.png"];

function cambiarprox() {
    let imagen = document.getElementById("img1");
    indice = (indice + 1) % imagenes.length;
    imagen.src = imagenes[indice];
}

function cambiarant() {
    let imagen = document.getElementById("img1");
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    imagen.src = imagenes[indice];
}


document.querySelector("div.btn_menu").addEventListener("click", cambia);


function cambia() {

    document.querySelector("ul.movilfirst").classList.toggle("show");




}


