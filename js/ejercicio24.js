 "use strict";

 function sendPassword () {
 	var resultado = document.getElementById ("resultado"); 
 	var pass1 = document.getElementById ("pass1").value; 
 	var pass2 = document.getElementById ("pass2").value; 

 	try {
 		validatePassword (pass1, pass2);
	 	resultado.style.color = "blue";	 		 	
	 	resultado.innerHTML = "La contraseña es segura";
 	} catch (err) {
 		resultado.style.color = "red";
 		resultado.innerHTML = "Error: " + err;
 	}
 }

function validatePassword (pass1, pass2){
	if (pass1 !== pass2){
		throw "Las contraseñas no son iguales";
	}
	if (pass1.length < 8){
		throw "La contraseña debe ser al menos de 8 caracteres";
	}
	if (!/[A-Z]/.test(pass1)){
		throw "La contraseña debe contener mayúsculas";
	}
	if (!/[a-z]/.test(pass1)){
		throw "La contraseña debe contener minúsculas";
	}
	if (!/[0-9]/.test(pass1)){
		throw "La contraseña debe contener números";
	}
	if (!/\W/.test(pass1)){
		throw "La contraseña debe contener caracteres no numéricos";
	}

 	return true;
}