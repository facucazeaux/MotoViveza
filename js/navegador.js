document.querySelector("div.btn_menu").addEventListener("click", cambia);


function cambia() {

    document.querySelector("ul.movilfirst").classList.toggle("show");

}

document.querySelector("#botonmodo").addEventListener("click", modo);

let body = document.querySelector("#body");

function modo() {

    let boton = document.querySelector("#botonmodo");
    if (body.classList.contains("modoclaro")) {
        boton.innerHTML = "🌑"; // Cambiar a modo oscuro
    } else {
        boton.innerHTML = "🌞"; // Cambiar a modo claro
    }
    body.classList.toggle("modoclaro");
}

