 "use strict";

//Variable global para contener lso valores de la pila
 var ARRAY = [];

//Limpia el formulario de entrada
 function cleanData (){
 	//document.getElementById ("resultado").innerHTML = "";
 	document.getElementById ("num").value = "" ;  
 }

// Función invocada desde HTML para recoger el número y mostrar el array.
 function pushNumber () {
 	document.getElementById ("resultado").innerHTML = "";
 	var num = parseInt (document.getElementById ('num').value);
 	try {
 		if (ARRAY.length === 10){
 			throw "La pila está llena y no se puede introducir el elemento";
 		}
	 	if (isNaN (num)) {
	 		throw "Debes introducir un entero";
	 	} 	
	 	resultado.style.color = "blue";
	 	ARRAY.push(num); 	
	 	drawStack ();	
 	} catch (err) {
 		resultado.style.color = "red";
 		resultado.innerHTML = "Error: " + err;
 	}	 	
 }

// Función que consume un número y lo muestra en la página
 function popNumber () {
 	var resultado = document.getElementById ("resultado"); 
 	try {
 		if (ARRAY.length == 0){
 			throw "La pila es vacía y no se puede consumir elementos";
 		} 		
 		resultado.style.color = "blue";
		resultado.innerHTML = "Elemento consumido: " + ARRAY.pop(); 	 	
 		drawStack ();
 	} catch (err) {
 		resultado.style.color = "red";
 		resultado.innerHTML = "Error: " + err;
 	}

 }

// Recorre la pila para mostrarla
 function drawStack (){
 	var stack = document.getElementById ("stack");  	
 	stack.innerHTML = "";

	for (let i of ARRAY) {
	   stack.innerHTML = stack.innerHTML + i + "<br/>"
	}
 }
