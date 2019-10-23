function reloj() {
  var Factual = new Date();
  var horas = Factual.getHours();
  var minutos = Factual.getMinutes();
  var segundos = Factual.getSeconds();

  horas = anadircero(horas);
  minutos = anadircero(minutos); 
  segundos = anadircero(segundos);


  document.getElementById("reloj").innerHTML = horas + " : " + minutos + " : " + segundos;
  
}


function anadircero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

setInterval(function () { reloj() }, 1000);