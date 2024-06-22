document.getElementById('btn').addEventListener('click', generarCaptcha);

let numeroAleatorio;

let form = document.querySelector('#formu');
form.addEventListener('submit', verificar);

function generarCaptcha() {
    numeroAleatorio = Math.floor(Math.random() * 10000);
    console.log(numeroAleatorio);
    document.getElementById('parrafo').innerText = "CAPTCHA: " + numeroAleatorio;
}

function verificar(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let numeroIngresado = formData.get('obtener');   //se hace con name en html, ya q con id no anda
    console.log(numeroAleatorio);
    console.log(numeroIngresado);

    if (numeroAleatorio == numeroIngresado) {
        document.querySelector("#pcapchat").innerHTML = "Captcha Confirmado";

    } else {
        document.querySelector("#pcapchat").innerHTML = "Error en la confirmacion";
    }
}

