var nombres = ["Wilson", "Maria", "Pedro"];
var apellidos = ["Parra", "Guerra", "Porro"];
var actividades = ["Futbol", "Java", "Zumba"];

function comprobarRespuesta() {

  var nombreSeleccionado = document.getElementById("nombres").value;
  var apellidoSeleccionado = document.getElementById("apellidos").value;
  var actividadSeleccionada = document.getElementById("actividades").value;


  var indice = nombres.indexOf(nombreSeleccionado);


  if (indice !== -1 && apellidoSeleccionado === apellidos[indice] && actividadSeleccionada === actividades[indice]) {
    alert("Instructor correcto");
  } else {
    alert("Upss Instructor incorrecto, Revisa por favor");
  }
}
