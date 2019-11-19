"use strict";

function Persona(nombre,edad,genero){
	this.nombre= nombre;
	this.edad=edad;
	this.genero=genero;
}


function Estudiante(curso,grupo,nombre,edad,genero){
	Persona.call(this,nombre,edad,genero)
	this.curso=curso;
	this.grupo=grupo;

}
Estudiante.prototype = new Persona;

function Profesor(asignatura,nivel,nombre,edad,genero){
	Persona.call(this,nombre,edad,genero)
	this.asignatura=asignatura;
	this.nivel=nivel;

}

Profesor.prototype = new Persona;

Persona.prototype.obtDetalles = function () {

	console.log(this.nombre);
	console.log(this.edad);
	console.log(this.genero);

}

Estudiante.prototype.registrar = function (curso,grupo) {	
	this.curso=curso;
	this.grupo=grupo;
}

Profesor.prototype.asignar = function (asignatura,nivel) {	
	this.asignatura=asignatura;
	this.nivel=nivel;
}




var persona1 = new Persona('roberto',34,'hombre');


console.log(persona1);
console.log(persona1.obtDetalles());


var personaestudiante = new Estudiante('Primero','A','Alejandro',20,'transgenero');
console.log(personaestudiante);

personaestudiante.registrar('Segundo','B');
console.log(personaestudiante);


var personaprofesor = new Profesor('Matematicas','8','Maria',26,'Mujer');
console.log(personaprofesor);

personaprofesor.asignar('Naturales','5');
console.log(personaprofesor);
