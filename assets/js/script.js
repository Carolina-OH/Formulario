var nombre
var apellidos
var correo
var usuario
var pass
var telefono

function validar() {
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    pass = document.getElementById("pass").value;
    telefono = document.getElementById("telefono").value;
    expresion = /\w+@\w+\.+[a-z]/;
    console.log(expresion.test(correo));

    if (nombre === "" || apellidos === "" || usuario === "" || correo === "" || telefono === "" || pass === "") {
        alert("debe rellenar todos los campos");
        return false;
    }
    else if
        (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    }
    else if
        (apellidos.length > 80) {
        alert("Los apellidos son muy largos");
        return false;
    }
    else if
        (correo.length > 100) {
        alert("El correo es muy largo");
        return false;
    }
    else if
        (usuario.length > 20) {
        alert("excede maximo de caracteres");
        return false;
    }
    else if
        (telefono.length > 15) {
        alert("excede maximo de caracteres");
        return false;
    }
    else if
        (expresion.test(correo) === false) {
        alert("ingrese correo correctamente");
        return false;
    }
    else if
        (isNaN(telefono)) {
        alert("ingrese teléfono válido");
        return false;
    }
    else {
        alert("Bienvenido" + " " + nombre + " " + apellidos + " " + "tu usuario es: " + usuario + " " + "y tu contraseña es: " + pass);
    }
}
