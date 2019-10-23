function imprimirfecha(){

    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var anio = document.getElementById("anio").value;

    var fecha = new Date(anio,mes,dia);


    document.getElementById("demo").innerHTML = fecha;
}
  
  
  function rellenardias() {
      var opciones="";
    for (let i = 1; i <= 31; i++) {
       opciones+=document.getElementById("dia").innerHTML = '<option value='+i+'>'+i+'</option>';
    }

    document.getElementById("dia").innerHTML = opciones;
  }
  
    
  function rellenarmeses() {
    var opciones="";
  for (let i = 1,j=0; i <= 12; i++,j++) {
      
     opciones+=document.getElementById("mes").innerHTML = '<option value='+j+'>'+i+'</option>';
  }

  document.getElementById("mes").innerHTML = opciones;
}
  
function rellenaranios() {
    var opciones="";
  for (let i = 2019; i <= 2050; i++) {
     opciones+=document.getElementById("anio").innerHTML = '<option value='+i+'>'+i+'</option>';
  }

  document.getElementById("anio").innerHTML = opciones;
}