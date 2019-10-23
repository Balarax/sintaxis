function modificarfecha() {

  var fechaActual = new Date();

  var dias = fechaActual.getDate();
  var operacion = document.getElementById("operacion").value;
  var comp = document.getElementById("r1").value;
  parseInt(comp);

  if (comp == 1) {
    dias += parseInt(operacion);
  } else if (comp == 2) {
    dias -= parseInt(operacion);
  }

  
  fechaActual.setDate(dias);

  document.getElementById("demo").innerHTML = fechaActual;
}
