console.log("Nombre del Estudiante: Isabella Torrico ");

const botonEnviar = document.getElementById('miBoton');
const inputNombre = document.getElementById('nombreInput');

botonEnviar.addEventListener('click', function(event) {

    if (inputNombre.value.trim() === "") {
        event.preventDefault(); 
        alert("Por favor, escribe tu nombre antes de enviar.");
    } else {
        alert("¡Formulario enviado con éxito!"); 
    }
});