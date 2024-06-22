

let btnimgprox = document.querySelector("#botoncambioimgadelante");
let btnimganterior = document.querySelector("#botoncambioimgatras");
let indice = 0;

btnimgprox.addEventListener("click", cambiarprox);
btnimganterior.addEventListener("click", cambiarant);

let imagenes = ["imagenes/yamaha2.png", "imagenes/yamaha3.png", "imagenes/yamaha4.png"];
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

