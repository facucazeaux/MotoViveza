const url = 'https://6671e33de083e62ee43d712c.mockapi.io/api/groups/A016-A3/tpespecial/usuarios';
let id = 0;

async function obtenerDatos() {     //funcion que se encarga de obtener y mostrar datos de la API
    const tabla = document.getElementById('lineatabla');
    tabla.innerHTML = "";
    try {
        let res = await fetch(url);  // GET url
        let json = await res.json(); // texto json a objeto
        console.log(json);
        for (const usuario of json) {
            let nombre = usuario.Nombre;
            let opinion = usuario.opinion;
            id = usuario.id;
            let fila = document.createElement('tr');
            fila.innerHTML = `<td>${nombre} ${"|"}     ID:${id}</td><td>${opinion}</td>`;
            tabla.appendChild(fila);
        }
    } catch (error) {
        console.log(error);
    }
}


// Función para manejar el envío del formulario y agregar una nueva opinión
async function formularioDatos(event) {
    event.preventDefault();
    const nombree = document.getElementById('nombreinput').value;
    const Apellido = document.getElementById('apellidoinput').value;
    const opinionn = document.getElementById('opinioninput').value;
    const DNI = document.getElementById('dniinput').value;

    const usuario = {
        "Nombre": nombree,
        "Apellido": Apellido,
        "DNI": DNI,
        "opinion": opinionn
    };

    try {
        let res = await fetch(url, {
            "method": 'POST',
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify(usuario)
        });

        if (res.ok) {
            console.log("Creado!");
            obtenerDatos();    // Actualizo la tabla después de agregar la nueva opinión
        }
    } catch (error) {
        console.log(error);
    }
}

async function borrarFila() {
    let fila = document.getElementById('nrofilaeliminar').value;
    try {
        let res = await fetch(`${url}/${fila}`, {
            "method": "DELETE"
        });

        if (res.ok) {
            console.log("Se ha eliminado con éxito");
            obtenerDatos();
        } else {
            console.log("Error al intentar eliminar");
        }
    } catch (error) {
        console.log(error);
    }
}

async function EditarFila() {
    const nombree = document.getElementById('nombreinput').value;
    const opinionn = document.getElementById('opinioninput').value;

    const usuario = {
        "Nombre": nombree,
        "opinion": opinionn
    };
    let filaa = document.getElementById('nrofilaeditar').value;
    try {
        let res = await fetch(`${url}/${filaa}`, {
            "method": "PUT",
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(usuario)
        });

        if (res.status === 200) {
            console.log("Editado con exito!");
            obtenerDatos();
        } else {
            console.log("Se complicó para editar");
        }
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    obtenerDatos();

    const form = document.getElementById('opinionForm');
    form.addEventListener('submit', formularioDatos);

    // Creamos botones dinámicamente
    const botonesContainer = document.getElementById('botones-container');
    
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.id = 'btn-eliminar';
    botonesContainer.appendChild(btnEliminar);

    const inputEliminar = document.createElement('input');
    inputEliminar.type = 'number';
    inputEliminar.id = 'nrofilaeliminar';
    inputEliminar.placeholder = 'Ingrese el ID para eliminar';
    botonesContainer.appendChild(inputEliminar);

    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.id = 'btn-editar';
    botonesContainer.appendChild(btnEditar);

    const inputEditar = document.createElement('input');
    inputEditar.type = 'number';
    inputEditar.id = 'nrofilaeditar';
    inputEditar.placeholder = 'Ingrese el ID para editar';
    botonesContainer.appendChild(inputEditar);

    // Configurar el evento click en el botón de eliminar
    btnEliminar.addEventListener('click', borrarFila);
    btnEditar.addEventListener('click', EditarFila);
});
