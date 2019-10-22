function myFunction() {
  var d = new Date();
  var navidad = new Date(d.getFullYear(), 11, 25);
  var n, dias = 0, diasFin = 0;
  do {
    n = d.getDay();
    if (n == 0 || n == 6) {
      diasFin++;
    }
    dias++;
    d.setDate(d.getDate() + 1);
  } while (d.getTime() < navidad.getTime());


  document.getElementById("demo").innerHTML = "Quedan: " + dias + " dias<br>"+"Quedan: " + diasFin + " dias que son fines de semana<br>";
}
