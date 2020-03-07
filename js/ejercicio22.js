 "use strict";

// Variable global donde iremos guardando los enteros recogidos.
 var ARRAY = [];

// Limpia formulario y elemento donde se muestra el resultado
 function cleanData (){
 	document.getElementById ("num").value = "" ;  
 }


 function addNumber (elem) {
 	var num = parseInt (elem.value);
 	var resultado = document.getElementById ("resultado"); 

 	try {
	 	if (isNaN(num)) { //Si el valor no es un entero se genera un error.
	 		throw "Debes introducir un entero";
	 		resultado.style.color = "red";
	 		resultado.innerHTML = "Debes introducir un entero";
	 	} else {
	 		// Si el valor es un número y no hemos llegado al final guardamos el dato
		 	if (num !== 0 && ARRAY.length < 5) {
		 		ARRAY.push(parseInt(num)); 
		 		resultado.style.color = "blue";
		 		resultado.innerHTML = ARRAY; 		
		 	} 

		 	if (num === 0 || ARRAY.length === 5) { // Si hemos llegado al final se desactiva el botón y se calcula los repetidos.
		 		elem.disabled = true;
		 		document.getElementById ("addButton").disabled = true;
		 		let values = isThereRepeted ();
		 		if (values.length >0) resultado.innerHTML = "Repetidos: " + values;
		 		else resultado.innerHTML = "No hay repetidos";	 		
		 	} 		
	 	}
 	} catch (err) {
 		resultado.style.color = "red";
 		resultado.innerHTML = "Error: " + err;
 	}
 }

 //Función para calcular los repetidos
 function isThereRepeted () {
 	var repeatedNumbers = []; //Array auxiliar para ir almacenando los repetidos.

 	for (let i = 0, j, isOnARRAY; i < ARRAY.length-1; i++){
 		isOnARRAY = false; //Variable que me permite salir antes del While si hay un repetido
 		j = i+1; //Mirarmos repetidos a partir de los que ha hemos comprobado.
 		if (repeatedNumbers.indexOf (ARRAY[i]) === -1) { //Si el número ya está en los repetidos no hace falta buscarlos ni guardarlo
	 		while (j < ARRAY.length && isOnARRAY === false){ //Recorremos el array hasta que encontremos repetido o el final del array
	 			if (ARRAY[i] === ARRAY[j]) { // Si encontramos repetido se guarda y salimos del bucle.
	 				isOnARRAY = true;
	 				repeatedNumbers.push(ARRAY[i]);
	 			} else {
	 				j++;
	 			}
	 		} 			
 		}
 	}

 	return (repeatedNumbers); 		

 }