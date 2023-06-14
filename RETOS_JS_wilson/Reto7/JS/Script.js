function validarFormulario() {
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var password = document.getElementById("password").value;
    var confirmarPassword = document.getElementById("confirmarPassword").value;
    var aceptarTerminos = document.getElementById("aceptarTerminos").checked;

    // Validar que todos los campos estén llenos
    if (tipoDocumento === "" || numeroDocumento === "" || nombre === "" || apellido === "" || fechaNacimiento === "" || correoElectronico === "" || password === "" || confirmarPassword === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    // Validar el campo No. documento
    if (!/^[0-9]{5,}$/.test(numeroDocumento)) {
        alert("El campo No. documento debe contener solo números y tener una longitud mínima de 5 caracteres");
        return false;
    }

    // Validar los campos Nombre y Apellido
    if (!/^[A-Za-z0-9\s]+$/.test(nombre) || !/^[A-Za-z0-9\s]+$/.test(apellido)) {
        alert("Los campos Nombre y Apellido deben contener solo caracteres alfanuméricos");
        return false;
    }

    // Validar la fecha de nacimiento
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var fechaMinima = new Date("2002-01-01");
    if (fechaNacimientoDate < fechaMinima) {
        alert("Debe ser mayor de 18 años para registrarse");
        return false;
    }

    // Validar el correo electrónico
    if (!/^[a-zA-Z0-9._%+-]+@misena.edu.co$/.test(correoElectronico)) {
        alert("El correo electrónico debe tener el dominio @misena.edu.co");
        return false;
    }

    // Validar el campo password
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/.test(password)) {
        alert("El campo Password debe tener mínimo 10 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial");
        return false;
    }

    // Validar que el password y su confirmación sean iguales
    if (password !== confirmarPassword) {
        alert("El password y su confirmación no coinciden");
        return false;
    }

    // Validar que se haya aceptado los Términos de uso
    if (!aceptarTerminos) {
        alert("Debe aceptar los Términos de uso");
        return false;
    }

    return true;
}

// Función para mostrar los términos de uso en la ventana modal
function mostrarTerminos() {
    var modalTerminos = new bootstrap.Modal(document.getElementById("modalTerminos"));
    modalTerminos.show();
}
